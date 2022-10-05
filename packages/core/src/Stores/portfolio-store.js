import throttle from 'lodash.throttle';
import { action, computed, observable, reaction } from 'mobx';
import { createTransformer } from 'mobx-utils';
import {
    isEmptyObject,
    isEnded,
    isUserSold,
    isValidToSell,
    isMultiplierContract,
    getCurrentTick,
    getDisplayStatus,
    WS,
    formatPortfolioPosition,
    contractCancelled,
    contractSold,
    getDurationPeriod,
    getDurationTime,
    getDurationUnitText,
    getEndTime,
    removeBarrier,
    getDummyAllPositionsForACCU,
    getDummyPOCResponseForACCU,
    getDummyPortfolioContractsForACCU,
} from '@deriv/shared';
import { Money } from '@deriv/components';
import { ChartBarrierStore } from './chart-barrier-store';
import { setLimitOrderBarriers } from './Helpers/limit-orders';
import BaseStore from './base-store';

export default class PortfolioStore extends BaseStore {
    @observable.shallow positions = [];
    @observable.shallow all_positions = [];
    positions_map = {};
    @observable is_loading = false;
    @observable error = '';

    // barriers
    @observable barriers = [];
    @observable main_barrier = null;
    @observable contract_type = '';

    getPositionById = createTransformer(id => this.positions.find(position => +position.id === +id));

    responseQueue = [];

    @observable.shallow active_positions = [];

    constructor(root_store) {
        super({
            root_store,
        });

        this.root_store = root_store;
    }
    @action.bound
    async initializePortfolio() {
        if (this.has_subscribed_to_poc_and_transaction) {
            this.clearTable();
        }
        this.is_loading = true;
        await WS.wait('authorize');
        WS.portfolio().then(this.portfolioHandler);
        WS.subscribeProposalOpenContract(null, this.proposalOpenContractQueueHandler);
        WS.subscribeTransaction(this.transactionHandler);
        this.has_subscribed_to_poc_and_transaction = true;
    }

    @action.bound
    clearTable() {
        this.positions = [];
        this.positions_map = {};
        this.is_loading = false;
        this.error = '';
        this.updatePositions();
        if (this.has_subscribed_to_poc_and_transaction) {
            WS.forgetAll('proposal_open_contract', 'transaction');
        }
        this.has_subscribed_to_poc_and_transaction = false;
    }

    @action.bound
    portfolioHandler(response) {
        this.is_loading = false;
        if ('error' in response) {
            this.error = response.error.message;
            return;
        }
        this.error = '';

        // maryia: temporary dummy data for accumulators
        const dummy_contracts = getDummyPortfolioContractsForACCU(Date.now());

        let contracts;
        if (this.is_accumulator) {
            contracts = dummy_contracts;
        } else contracts = response.portfolio.contracts;
        if (contracts) {
            this.positions = contracts
                .map(pos => formatPortfolioPosition(pos, this.root_store.active_symbols.active_symbols))
                .sort((pos1, pos2) => pos2.reference - pos1.reference); // new contracts first

            this.positions.forEach(p => {
                this.positions_map[p.id] = p;
            });
            this.updatePositions();
        }
    }

    @action.bound
    onBuyResponse({ contract_id, longcode, contract_type }) {
        const new_pos = {
            contract_id,
            longcode,
            contract_type,
        };
        this.pushNewPosition(new_pos);
    }

    @action.bound
    async transactionHandler(response) {
        if ('error' in response) {
            this.error = response.error.message;
        }
        if (!response.transaction) return;
        const { contract_id, action: act, longcode } = response.transaction;

        if (act === 'buy') {
            this.onBuyResponse({
                contract_id,
                longcode,
                contract_type: '', // TODO: figure out the icon not showing
            });
        } else if (act === 'sell') {
            const i = this.getPositionIndexById(contract_id);

            if (!this.positions[i]) {
                // On a page refresh, portfolio call has returend empty,
                // even though we we get a transaction.sell response.
                return;
            }
            this.positions[i].is_loading = true;

            // Sometimes when we sell a contract, we don't get `proposal_open_contract` message with exit information and status as `sold`.
            // This is to make sure that we get `proposal_open_contract` message with exit information and status as `sold`.
            const subscriber = WS.subscribeProposalOpenContract(contract_id, poc => {
                if (poc.error) {
                    // Settles the contract based on transaction response when POC response is throwing error.
                    this.populateResultDetailsFromTransaction(response);
                } else {
                    this.updateContractTradeStore(poc);
                    this.updateContractReplayStore(poc);
                    this.populateResultDetails(poc);
                }
                subscriber.unsubscribe();
            });
        }
    }

    deepClone = obj => JSON.parse(JSON.stringify(obj));
    updateContractTradeStore(_response) {
        // maryia: temporary dummy data for accumulators
        const dummy_response = getDummyPOCResponseForACCU(Date.now());
        let response;
        if (this.is_accumulator) {
            response = dummy_response;
        } else {
            response = _response;
        }
        const contract_trade = this.root_store.contract_trade;
        const has_poc = !isEmptyObject(response.proposal_open_contract);
        const has_error = !!response.error;
        if (!has_poc && !has_error) return;
        if (has_poc) {
            contract_trade.addContract(this.deepClone(response.proposal_open_contract));
            contract_trade.updateProposal(this.deepClone(response));
        }
    }

    updateContractReplayStore(_response) {
        // maryia: temporary dummy data for accumulators
        const dummy_response = getDummyPOCResponseForACCU(Date.now());
        let response;
        if (this.is_accumulator) {
            response = dummy_response;
        } else {
            response = _response;
        }
        const contract_replay = this.root_store.contract_replay;
        if (contract_replay.contract_id === response.proposal_open_contract?.contract_id) {
            contract_replay.populateConfig(response);
        }
    }

    updateTradeStore(is_over, portfolio_position, is_limit_order_update) {
        // const trade = this.root_store.modules.trade;
        if (!is_limit_order_update) {
            this.setPurchaseSpotBarrier(is_over, portfolio_position);
        }
        this.updateLimitOrderBarriers(is_over, portfolio_position);
    }

    proposalOpenContractQueueHandler = response => {
        this.responseQueue.push(response);
        this.throttledUpdatePositions();
    };

    @action.bound
    proposalOpenContractHandler(response) {
        // maryia: temporary dummy data for accumulators
        const now = Date.now();
        const dummy_response = getDummyPOCResponseForACCU(now);

        let proposal, portfolio_position;
        if (this.is_accumulator) {
            if ('error' in dummy_response) {
                this.updateContractTradeStore(dummy_response);
                this.updateContractReplayStore(dummy_response);
                return;
            }
            proposal = dummy_response.proposal_open_contract;
            portfolio_position = getDummyAllPositionsForACCU(now)[0];

            this.updateContractTradeStore(dummy_response);
            this.updateContractReplayStore(dummy_response);
        } else {
            if ('error' in response) {
                this.updateContractTradeStore(response);
                this.updateContractReplayStore(response);
                return;
            }
            proposal = response.proposal_open_contract;
            portfolio_position = this.positions_map[proposal.contract_id];

            if (!portfolio_position) return;
            this.updateContractTradeStore(response);
            this.updateContractReplayStore(response);
        }

        const formatted_position = formatPortfolioPosition(
            proposal,
            this.root_store.active_symbols.active_symbols,
            portfolio_position.indicative
        );
        Object.assign(portfolio_position, formatted_position);

        const prev_indicative = portfolio_position.indicative;
        const new_indicative = +proposal.bid_price;
        const profit_loss = +proposal.profit;

        // fix for missing barrier and entry_spot in proposal_open_contract API response, only re-assign if valid
        Object.entries(proposal).forEach(([key, value]) => {
            if (key === 'barrier' || key === 'high_barrier' || key === 'low_barrier' || key === 'entry_spot') {
                portfolio_position[key] = +value;
            }
        });

        // store contract proposal details that require modifiers
        portfolio_position.indicative = new_indicative;
        portfolio_position.profit_loss = profit_loss;
        portfolio_position.is_valid_to_sell = isValidToSell(proposal);

        // store contract proposal details that do not require modifiers
        portfolio_position.contract_info = proposal;

        // for tick contracts
        if (proposal.tick_count) {
            const current_tick =
                portfolio_position.current_tick > getCurrentTick(proposal)
                    ? portfolio_position.current_tick
                    : getCurrentTick(proposal);
            portfolio_position.current_tick = current_tick;
        }

        if (new_indicative > prev_indicative) {
            portfolio_position.status = 'profit';
        } else if (new_indicative < prev_indicative) {
            portfolio_position.status = 'loss';
        } else {
            portfolio_position.status = null;
        }

        if (this.hovered_position_id === portfolio_position.id) {
            if (portfolio_position.contract_info.is_sold === 1) {
                this.updateTradeStore(false, portfolio_position);
            } else {
                this.updateTradeStore(true, portfolio_position, true);
            }
        }

        if (portfolio_position.contract_info.is_sold === 1 && !this.is_accumulator) {
            this.populateResultDetails(response);
            // maryia: temporary dummy data for accumulators
        } else if (portfolio_position.contract_info.is_sold === 1) this.populateResultDetails(dummy_response);
    }

    @action.bound
    onClickCancel(contract_id) {
        const i = this.getPositionIndexById(contract_id);
        if (this.positions[i].is_sell_requested) return;

        this.positions[i].is_sell_requested = true;
        if (contract_id) {
            WS.cancelContract(contract_id).then(response => {
                if (response.error) {
                    this.root_store.common.setServicesError({
                        type: response.msg_type,
                        ...response.error,
                    });
                } else {
                    this.root_store.notifications.addNotificationMessage(contractCancelled());
                }
            });
        }
    }

    @action.bound
    onClickSell(contract_id) {
        const i = this.getPositionIndexById(contract_id);
        if (this.positions[i].is_sell_requested) return;

        const { bid_price } = this.positions[i].contract_info;
        this.positions[i].is_sell_requested = true;
        if (contract_id && typeof bid_price === 'number') {
            WS.sell(contract_id, bid_price).then(this.handleSell);
        }
    }

    @action.bound
    handleSell(response) {
        if (response.error) {
            // If unable to sell due to error, give error via pop up if not in contract mode
            const i = this.getPositionIndexById(response.echo_req.sell);
            this.positions[i].is_sell_requested = false;

            // invalidToken error will handle in socket-general.js
            if (response.error.code !== 'InvalidToken') {
                this.root_store.common.setServicesError({
                    type: response.msg_type,
                    ...response.error,
                });
            }
        } else if (!response.error && response.sell) {
            // update contract store sell info after sell
            this.root_store.contract_trade.sell_info = {
                sell_price: response.sell.sold_for,
                transaction_id: response.sell.transaction_id,
            };
            this.root_store.notifications.addNotificationMessage(
                contractSold(this.root_store.client.currency, response.sell.sold_for, Money)
            );
        }
    }

    @action.bound
    populateResultDetailsFromTransaction = response => {
        const transaction_response = response.transaction;
        const { contract_id, amount } = transaction_response;
        const i = this.getPositionIndexById(contract_id);
        const position = this.positions[i];

        if (!position) {
            return;
        }
        const contract_info = { ...position.contract_info, is_sold: 1, is_expired: 1, status: 'complete' };

        position.contract_info = contract_info;
        position.is_valid_to_sell = false;
        position.result = amount > contract_info.buy_price ? 'won' : 'lost';
        position.status = 'complete';
        position.is_sold = 1;
        position.is_loading = false;

        contract_info.exit_tick_time = contract_info.date_expiry;
        contract_info.sell_price = String(amount);
        contract_info.profit = amount - contract_info.buy_price;

        this.updatePositions();
    };

    @action.bound
    populateResultDetails = response => {
        // maryia: temporary dummy data for accumulators
        const dummy_response = getDummyPOCResponseForACCU(Date.now());
        let contract_response;
        if (this.is_accumulator) {
            contract_response = dummy_response.proposal_open_contract;
        } else {
            contract_response = response.proposal_open_contract;
        }

        const i = this.getPositionIndexById(contract_response.contract_id);

        if (!this.positions[i]) {
            return;
        }

        this.positions[i].contract_info = contract_response;
        this.positions[i].duration = getDurationTime(contract_response);
        this.positions[i].duration_unit = getDurationUnitText(getDurationPeriod(contract_response));
        this.positions[i].exit_spot = contract_response.exit_tick || contract_response.current_spot; // workaround if no exit_tick in proposal_open_contract, use latest spot
        this.positions[i].is_valid_to_sell = isValidToSell(contract_response);
        this.positions[i].result = getDisplayStatus(contract_response);
        this.positions[i].profit_loss = +contract_response.profit;
        this.positions[i].sell_time = getEndTime(contract_response) || contract_response.current_spot_time; // same as exit_spot, use latest spot time if no exit_tick_time
        this.positions[i].sell_price = contract_response.sell_price;
        this.positions[i].status = 'complete';

        // fix for missing barrier and entry_spot
        if (!this.positions[i].contract_info.barrier || !this.positions[i].contract_info.entry_spot) {
            this.positions[i].contract_info.barrier = this.positions[i].barrier;
            this.positions[i].contract_info.entry_spot = this.positions[i].entry_spot;
        }

        // remove exit_spot for manually sold contracts
        if (isUserSold(contract_response)) this.positions[i].exit_spot = '-';

        this.positions[i].is_loading = false;
    };

    @action.bound
    populateContractUpdate({ contract_update }, contract_id) {
        const position = this.getPositionById(contract_id);
        if (position) {
            Object.assign(position.contract_update || {}, contract_update);
            this.updatePositions();
        }
    }

    @action.bound
    pushNewPosition(new_pos) {
        const position = formatPortfolioPosition(new_pos, this.root_store.active_symbols.active_symbols);
        if (this.positions_map[position.id]) return;

        this.positions.unshift(position);
        this.positions_map[position.id] = position;
        this.updatePositions();
    }

    @action.bound
    removePositionById(contract_id) {
        const contract_idx = this.getPositionIndexById(contract_id);

        this.positions.splice(contract_idx, 1);
        delete this.positions_map[contract_id];
        this.updatePositions();
        this.root_store.contract_trade.removeContract({ contract_id });
    }

    async accountSwitcherListener() {
        await this.initializePortfolio();
        return Promise.resolve();
    }

    @action.bound
    onHoverPosition(is_over, position, underlying) {
        if (
            position.contract_info.underlying !== underlying ||
            isEnded(position.contract_info) ||
            !isMultiplierContract(position.type)
        ) {
            return;
        }

        this.hovered_position_id = is_over ? position.id : null;
        this.updateTradeStore(is_over, position);
    }

    preSwitchAccountListener() {
        this.clearTable();
        return Promise.resolve();
    }

    @action.bound
    logoutListener() {
        this.clearTable();
        return Promise.resolve();
    }

    @action.bound
    networkStatusChangeListener(is_online) {
        this.is_loading = !is_online;
    }

    @action.bound
    onMount() {
        this.onPreSwitchAccount(this.preSwitchAccountListener);
        this.onSwitchAccount(this.accountSwitcherListener);
        this.onNetworkStatusChange(this.networkStatusChangeListener);
        this.onLogout(this.logoutListener);
        if (this.positions.length === 0 && !this.has_subscribed_to_poc_and_transaction) {
            // TODO: Optimise the way is_logged_in changes are detected for "logging in" and "already logged on" states
            if (this.root_store.client.is_logged_in) {
                this.initializePortfolio();
            } else {
                reaction(
                    () => this.root_store.client.is_logged_in,
                    () => {
                        if (this.root_store.client.is_logged_in) {
                            this.initializePortfolio();
                        }
                    }
                );
            }
        }
    }

    @action.bound
    onUnmount() {
        const is_reports_path = /^\/reports/.test(window.location.pathname);
        if (!is_reports_path) {
            this.clearTable();
            this.disposePreSwitchAccount();
            this.disposeSwitchAccount();
            this.disposeLogout();
        }
    }

    getPositionIndexById(contract_id) {
        return this.positions.findIndex(pos => +pos.id === +contract_id);
    }

    @computed
    get totals() {
        let indicative = 0;
        let payout = 0;
        let purchase = 0;

        this.positions.forEach(portfolio_pos => {
            indicative += +portfolio_pos.indicative;
            payout += +portfolio_pos.payout;
            purchase += +portfolio_pos.purchase;
        });
        return {
            indicative,
            payout,
            purchase,
        };
    }

    @action.bound
    setActivePositions() {
        // maryia: temporary dummy data for accumulators
        const dummy_contracts = getDummyAllPositionsForACCU(Date.now());

        if (this.is_accumulator) {
            this.active_positions = dummy_contracts;
            this.all_positions = [...dummy_contracts];
        } else {
            this.active_positions = this.positions.filter(portfolio_pos => !getEndTime(portfolio_pos.contract_info));
            this.all_positions = [...this.positions];
        }
    }

    updatePositions = () => {
        this.responseQueue.forEach(res => this.proposalOpenContractHandler(res));
        this.responseQueue = [];
        this.setActivePositions();
    };

    throttledUpdatePositions = throttle(this.updatePositions, 500);

    @computed
    get is_active_empty() {
        return !this.is_loading && this.active_positions.length === 0;
    }

    @computed
    get active_positions_count() {
        return this.active_positions.length || 0;
    }

    @computed
    get is_empty() {
        return !this.is_loading && this.all_positions.length === 0;
    }

    // from trade store
    @action.bound
    setPurchaseSpotBarrier(is_over, position) {
        const key = 'PURCHASE_SPOT_BARRIER';
        if (!is_over) {
            removeBarrier(this.barriers, key);
            return;
        }

        let purchase_spot_barrier = this.barriers.find(b => b.key === key);
        if (purchase_spot_barrier) {
            if (purchase_spot_barrier.high !== +position.contract_info.entry_spot) {
                purchase_spot_barrier.onChange({
                    high: position.contract_info.entry_spot,
                });
            }
        } else {
            purchase_spot_barrier = new ChartBarrierStore(position.contract_info.entry_spot);
            purchase_spot_barrier.key = key;
            purchase_spot_barrier.draggable = false;
            purchase_spot_barrier.hideOffscreenBarrier = true;
            purchase_spot_barrier.isSingleBarrier = true;
            purchase_spot_barrier.updateBarrierColor(this.root_store.ui.is_dark_mode_on);
            this.barriers.push(purchase_spot_barrier);
        }
    }

    @action.bound
    updateBarrierColor(is_dark_mode) {
        const { main_barrier } = JSON.parse(localStorage.getItem('trade_store')) || {};
        this.main_barrier = main_barrier;
        if (this.main_barrier) {
            this.main_barrier.updateBarrierColor(is_dark_mode);
        }
    }

    @action.bound
    updateLimitOrderBarriers(is_over, position) {
        const contract_info = position.contract_info;
        const { barriers } = this;
        setLimitOrderBarriers({
            barriers,
            contract_info,
            contract_type: contract_info.contract_type,
            is_over,
        });
    }

    @action.bound
    setContractType(contract_type) {
        this.contract_type = contract_type;
    }

    @computed
    get is_accumulator() {
        return this.contract_type === 'accumulator';
    }

    @computed
    get is_multiplier() {
        return this.contract_type === 'multiplier';
    }
}
