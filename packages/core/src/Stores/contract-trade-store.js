import { action, computed, observable, toJS, makeObservable, override, runInAction } from 'mobx';
import {
    extractInfoFromShortcode,
    isAccumulatorContract,
    isDesktop,
    isEnded,
    isMultiplierContract,
    LocalStore,
    switch_to_tick_chart,
    isCallPut,
    getAccumulatorBarriers,
    getContractTypesConfig,
    isEmptyObject,
} from '@deriv/shared';
import ContractStore from './contract-store';
import BaseStore from './base-store';

export default class ContractTradeStore extends BaseStore {
    // --- Observable properties ---
    contracts = [];
    contracts_map = {};
    has_error = false;
    error_message = '';

    // Chart specific observables
    granularity = +LocalStore.get('contract_trade.granularity') || 0;
    chart_type = LocalStore.get('contract_trade.chart_type') || 'mountain';
    prev_chart_type = '';
    prev_granularity = null;

    // Accumulator barriers data:
    accu_barriers_timeout_id = null;
    accumulator_barriers_data = {};
    cached_barriers_data = {};
    last_barriers_update_ms = null;

    constructor(root_store) {
        super({ root_store });

        makeObservable(this, {
            accu_barriers_timeout_id: observable,
            accumulator_barriers_data: observable.ref,
            cached_barriers_data: observable,
            clearAccumulatorBarriersData: action.bound,
            contracts: observable.shallow,
            has_crossed_accu_barriers: computed,
            has_error: observable,
            error_message: observable,
            granularity: observable,
            chart_type: observable,
            last_barriers_update_ms: observable,
            updateAccumulatorBarriers: action.bound,
            updateAccumulatorBarriersData: action.bound,
            updateChartType: action.bound,
            updateGranularity: action.bound,
            markers_array: computed,
            addContract: action.bound,
            removeContract: action.bound,
            accountSwitchListener: action.bound,
            onUnmount: override,
            prev_chart_type: observable,
            prev_granularity: observable,
            updateProposal: action.bound,
            last_contract: computed,
            clearError: action.bound,
            getContractById: action.bound,
            savePreviousChartMode: action.bound,
        });

        this.root_store = root_store;
        this.onSwitchAccount(this.accountSwitchListener);
    }

    // -------------------
    // ----- Actions -----
    // -------------------

    clearAccumulatorBarriersData() {
        if (this.accu_barriers_timeout_id) clearTimeout(this.accu_barriers_timeout_id);
        if (!isEmptyObject(this.accumulator_barriers_data)) this.accumulator_barriers_data = {};
    }

    updateAccumulatorBarriers({
        barriers_difference,
        from_proposal,
        current_spot,
        current_spot_time,
        new_tick_size_barrier,
        pip_size,
        symbol,
    }) {
        const current_update_time_stamp = Date.now();
        const barriers_data = {
            current_spot,
            current_spot_time,
        };
        const { high_barrier: accumulators_high_barrier, low_barrier: accumulators_low_barrier } =
            getAccumulatorBarriers(new_tick_size_barrier, current_spot, pip_size);
        const delayed_barriers_data = {
            accumulators_high_barrier,
            accumulators_low_barrier,
            barrier_spot_distance: barriers_difference,
            previous_spot_time: current_spot_time,
        };
        this.accumulator_barriers_data = {
            ...this.accumulator_barriers_data,
            [symbol]: {
                ...this.accumulator_barriers_data[symbol],
                ...barriers_data,
            },
        };
        if (
            !from_proposal &&
            this.last_barriers_update_ms &&
            current_update_time_stamp - this.last_barriers_update_ms < 320
        ) {
            if (this.accu_barriers_timeout_id) clearTimeout(this.accu_barriers_timeout_id);
            this.accumulator_barriers_data = {
                ...this.accumulator_barriers_data,
                [symbol]: {
                    ...this.accumulator_barriers_data[symbol],
                    ...this.cached_barriers_data,
                },
            };
        }
        this.accu_barriers_timeout_id = setTimeout(() => {
            runInAction(() => {
                this.accumulator_barriers_data = {
                    ...this.accumulator_barriers_data,
                    [symbol]: {
                        ...this.accumulator_barriers_data[symbol],
                        ...delayed_barriers_data,
                    },
                };
            });
        }, 320);
        if (!from_proposal) this.last_barriers_update_ms = current_update_time_stamp;
        this.cached_barriers_data = delayed_barriers_data;
    }

    updateAccumulatorBarriersData({
        barrier_spot_distance,
        current_symbol,
        tick_size_barrier,
        ...passthrough_barriers_data
    }) {
        const { shortcode, barrier_spot_distance: contract_barrier_spot_distance } =
            this.root_store.portfolio.active_positions.find(
                ({ type, contract_info: _contract_info }) =>
                    isAccumulatorContract(type) && _contract_info.underlying === current_symbol
            )?.contract_info || {};
        if (shortcode) {
            // has an ongoing ACCU contract
            const result = extractInfoFromShortcode(shortcode);
            const contract_tick_size_barrier = +result.tick_size_barrier;
            if (contract_tick_size_barrier) {
                this.updateAccumulatorBarriers({
                    new_tick_size_barrier: contract_tick_size_barrier,
                    barriers_difference: contract_barrier_spot_distance,
                    ...passthrough_barriers_data,
                });
            }
        } else if (tick_size_barrier) {
            // has no open ACCU contracts
            this.updateAccumulatorBarriers({
                new_tick_size_barrier: tick_size_barrier,
                barriers_difference: barrier_spot_distance,
                ...passthrough_barriers_data,
            });
        }
    }

    updateChartType(type) {
        LocalStore.set('contract_trade.chart_type', type);
        this.chart_type = type;
    }

    updateGranularity(granularity) {
        const tick_chart_types = ['mountain', 'line', 'colored_line', 'spline', 'baseline'];
        if (granularity === 0 && tick_chart_types.indexOf(this.chart_type) === -1) {
            this.chart_type = 'mountain';
        }
        LocalStore.set('contract_trade.granularity', granularity);
        this.granularity = granularity;
        if (this.granularity === 0) {
            this.root_store.notifications.removeNotificationMessage(switch_to_tick_chart);
        }
    }

    savePreviousChartMode(chart_type, granularity) {
        this.prev_chart_type = chart_type;
        this.prev_granularity = granularity;
    }

    applicable_contracts = () => {
        const { symbol: underlying, contract_type: trade_type } = JSON.parse(localStorage.getItem('trade_store')) || {};

        if (!trade_type || !underlying) {
            return [];
        }
        let { trade_types } = getContractTypesConfig()[trade_type];
        const is_call_put = isCallPut(trade_type);
        if (is_call_put) {
            // treat CALLE/PUTE and CALL/PUT the same
            trade_types = ['CALLE', 'PUTE', 'CALL', 'PUT'];
        }
        return this.contracts
            .filter(c => c.contract_info.underlying === underlying)
            .filter(c => {
                const info = c.contract_info;
                const has_multiplier_contract_ended =
                    isMultiplierContract(info.contract_type) && isEnded(c.contract_info);
                // filter multiplier contract which has ended
                return !has_multiplier_contract_ended;
            })
            .filter(c => {
                const info = c.contract_info;

                const trade_type_is_supported = trade_types.indexOf(info.contract_type) !== -1;
                // both high_low & rise_fall have the same contract_types in POC response
                // entry_spot=barrier means it is rise_fall contract (blame the api)
                if (trade_type_is_supported && info.barrier && info.entry_tick && is_call_put) {
                    if (`${+info.entry_tick}` === `${+info.barrier}`) {
                        return trade_type === 'rise_fall' || trade_type === 'rise_fall_equal';
                    }
                    return trade_type === 'high_low';
                }
                return trade_type_is_supported;
            });
    };

    get has_crossed_accu_barriers() {
        const { symbol } = JSON.parse(localStorage.getItem('trade_store')) || {};
        const { accumulators_high_barrier, accumulators_low_barrier, current_spot } =
            this.accumulator_barriers_data[symbol] || {};
        return !!(
            current_spot &&
            accumulators_high_barrier &&
            accumulators_low_barrier &&
            (current_spot >= accumulators_high_barrier || current_spot <= accumulators_low_barrier)
        );
    }

    get markers_array() {
        let markers = [];
        const { contract_type: trade_type, symbol } = JSON.parse(localStorage.getItem('trade_store')) || {};
        markers = this.applicable_contracts()
            .map(c => c.marker)
            .filter(m => m)
            .map(m => toJS(m));
        if (markers.length) {
            markers[markers.length - 1].is_last_contract = true;
        }
        const {
            accumulators_high_barrier: high_barrier,
            accumulators_low_barrier: low_barrier,
            barrier_spot_distance: barriers_difference,
            previous_spot_time: prev_spot_time,
        } = this.accumulator_barriers_data[symbol] || {};
        const { status } = this.last_contract.contract_info || {};
        if (trade_type === 'accumulator' && prev_spot_time && high_barrier) {
            markers.push({
                type: 'TickContract',
                contract_info: {
                    accu_barriers_difference: barriers_difference && {
                        top: `+${barriers_difference}`,
                        bottom: `-${barriers_difference}`,
                    },
                    has_crossed_accu_barriers: this.has_crossed_accu_barriers,
                    is_accumulator_trade_without_contract: status !== 'open',
                },
                key: 'dtrader_accumulator_barriers',
                price_array: [high_barrier, low_barrier],
                epoch_array: [prev_spot_time],
            });
        }
        return markers;
    }

    addContract({
        barrier,
        contract_id,
        contract_type,
        start_time,
        longcode,
        underlying,
        is_tick_contract,
        limit_order = {},
    }) {
        const contract_exists = this.contracts_map[contract_id];
        if (contract_exists) {
            return;
        }

        const contract = new ContractStore(this.root_store, { contract_id });
        contract.populateConfig({
            date_start: start_time,
            barrier,
            contract_type,
            longcode,
            underlying,
            limit_order,
        });

        this.contracts.push(contract);
        this.contracts_map[contract_id] = contract;

        if (is_tick_contract && !this.root_store.portfolio.is_multiplier && this.granularity !== 0 && isDesktop()) {
            this.root_store.notifications.addNotificationMessage(switch_to_tick_chart);
        }
    }

    removeContract({ contract_id }) {
        this.contracts = this.contracts.filter(c => c.contract_id !== contract_id);
        delete this.contracts_map[contract_id];
    }

    accountSwitchListener() {
        if (this.has_error) {
            this.clearError();
        }

        return Promise.resolve();
    }

    onUnmount() {
        this.disposeSwitchAccount();
        // TODO: don't forget the tick history when switching to contract-replay-store
    }

    // Called from portfolio
    updateProposal(response) {
        if ('error' in response) {
            this.has_error = true;
            this.error_message = response.error.message;
            return;
        }
        // Update the contract-store corresponding to this POC
        if (response.proposal_open_contract) {
            const contract_id = +response.proposal_open_contract.contract_id;
            const contract = this.contracts_map[contract_id];
            contract.populateConfig(response.proposal_open_contract);
            if (response.proposal_open_contract.is_sold) {
                this.root_store.notifications.removeNotificationMessage(switch_to_tick_chart);
                contract.cacheProposalOpenContractResponse(response);
            }
        }
    }

    get last_contract() {
        const applicable_contracts = this.applicable_contracts();
        const length = applicable_contracts.length;
        return length > 0 ? applicable_contracts[length - 1] : {};
    }

    clearError() {
        this.error_message = '';
        this.has_error = false;
    }

    getContractById(contract_id) {
        return (
            this.contracts_map[contract_id] ||
            // or get contract from contract_replay store when user is on the contract details page
            this.root_store.contract_replay.contract_store
        );
    }
}
