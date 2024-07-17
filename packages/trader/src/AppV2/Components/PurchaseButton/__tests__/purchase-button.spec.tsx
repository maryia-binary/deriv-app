import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockStore } from '@deriv/stores';
import { ReportsStoreProvider } from '../../../../../../reports/src/Stores/useReportsStores';
import TraderProviders from '../../../../trader-providers';
import ModulesProvider from 'Stores/Providers/modules-providers';
import PurchaseButton from '../purchase-button';

describe('PositionsContent', () => {
    let defaultMockStore: ReturnType<typeof mockStore>;

    beforeEach(() => {
        defaultMockStore = mockStore({
            portfolio: {
                all_positions: [
                    {
                        contract_info: {
                            account_id: 147849428,
                            barrier_count: 1,
                            bid_price: 41.4,
                            buy_price: 10,
                            commission: 0.36,
                            contract_id: 243687440268,
                            contract_type: 'MULTUP',
                            currency: 'USD',
                            current_spot: 807.2,
                            current_spot_display_value: '807.20',
                            current_spot_time: 1716882618,
                            date_expiry: 4870540799,
                            date_settlement: 4870540800,
                            date_start: 1716877413,
                            display_name: 'Volatility 100 (1s) Index',
                            entry_spot: 782.35,
                            entry_spot_display_value: '782.35',
                            entry_tick: 782.35,
                            entry_tick_display_value: '782.35',
                            entry_tick_time: 1716877414,
                            expiry_time: 4870540799,
                            id: '3f168dfb-c3c3-5cb2-e636-e7b6e25a7c56',
                            is_expired: 0,
                            is_forward_starting: 0,
                            is_intraday: 0,
                            is_path_dependent: 1,
                            is_settleable: 0,
                            is_sold: 0,
                            is_valid_to_cancel: 0,
                            is_valid_to_sell: 1,
                            limit_order: {
                                stop_out: {
                                    display_name: 'Stop out',
                                    order_amount: -10,
                                    order_date: 1716877413,
                                    value: '774.81',
                                },
                            },
                            longcode:
                                "If you select 'Up', your total profit/loss will be the percentage increase in Volatility 100 (1s) Index, multiplied by 1000, minus commissions.",
                            multiplier: 100,
                            profit: 31.4,
                            profit_percentage: 314,
                            purchase_time: 1716877413,
                            shortcode: 'MULTUP_1HZ100V_10.00_100_1716877413_4870540799_0_0.00_N1',
                            status: 'open',
                            transaction_ids: {
                                buy: 486015531488,
                            },
                            underlying: '1HZ100V',
                        },
                        details:
                            "If you select 'Up', your total profit/loss will be the percentage increase in Volatility 100 (1s) Index, multiplied by 1000, minus commissions.",
                        display_name: '',
                        id: 243687440268,
                        indicative: 41.4,
                        purchase: 10,
                        reference: 486015531488,
                        type: 'MULTUP',
                        contract_update: {
                            stop_out: {
                                display_name: 'Stop out',
                                order_amount: -10,
                                order_date: 1716877413,
                                value: '774.81',
                            },
                        },
                        entry_spot: 782.35,
                        profit_loss: 31.4,
                        is_valid_to_sell: true,
                        status: 'profit',
                    },
                    {
                        contract_info: {
                            account_id: 147849428,
                            barrier: '821.69',
                            barrier_count: 1,
                            bid_price: 4.4,
                            buy_price: 10,
                            contract_id: 243705193508,
                            contract_type: 'TURBOSLONG',
                            currency: 'USD',
                            current_spot: 823.04,
                            current_spot_display_value: '823.04',
                            current_spot_time: 1716891600,
                            date_expiry: 1716891900,
                            date_settlement: 1716891900,
                            date_start: 1716891504,
                            display_name: 'Volatility 100 (1s) Index',
                            display_number_of_contracts: '3.692058',
                            entry_spot: 824.24,
                            entry_spot_display_value: '824.24',
                            entry_tick: 824.24,
                            entry_tick_display_value: '824.24',
                            entry_tick_time: 1716891504,
                            expiry_time: 1716891900,
                            id: '631c07ee-ff93-a6e0-3e14-7917581b8b1b',
                            is_expired: 0,
                            is_forward_starting: 0,
                            is_intraday: 1,
                            is_path_dependent: 1,
                            is_settleable: 0,
                            is_sold: 0,
                            is_valid_to_cancel: 0,
                            is_valid_to_sell: 1,
                            longcode:
                                'You will receive a payout at expiry if the spot price never breaches the barrier. The payout is equal to the payout per point multiplied by the distance between the final price and the barrier.',
                            profit: -5.6,
                            profit_percentage: -56,
                            purchase_time: 1716891504,
                            shortcode: 'TURBOSLONG_1HZ100V_10.00_1716891504_1716891900_S-255P_3.692058_1716891504',
                            status: 'open',
                            transaction_ids: {
                                buy: 486048790368,
                            },
                            underlying: '1HZ100V',
                        },
                        details:
                            'You will receive a payout at expiry if the spot price never breaches the barrier. The payout is equal to the payout per point multiplied by the distance between the final price and the barrier.',
                        display_name: '',
                        id: 243705193508,
                        indicative: 4.4,
                        purchase: 10,
                        reference: 486048790368,
                        type: 'TURBOSLONG',
                        barrier: 821.69,
                        entry_spot: 824.24,
                        profit_loss: -5.6,
                        is_valid_to_sell: true,
                        status: 'profit',
                    },
                    {
                        contract_info: {
                            account_id: 147849428,
                            barrier_count: 2,
                            barrier_spot_distance: '0.139',
                            bid_price: 18.6,
                            buy_price: 10,
                            contract_id: 249545026128,
                            contract_type: 'ACCU',
                            currency: 'USD',
                            current_spot: 364.04,
                            current_spot_display_value: '364.04',
                            current_spot_high_barrier: '364.179',
                            current_spot_low_barrier: '363.901',
                            current_spot_time: 1721216517,
                            date_expiry: 1752796799,
                            date_settlement: 1752796800,
                            date_start: 1721216495,
                            display_name: 'Volatility 100 (1s) Index',
                            entry_spot: 364.15,
                            entry_spot_display_value: '364.15',
                            entry_tick: 364.15,
                            entry_tick_display_value: '364.15',
                            entry_tick_time: 1721216496,
                            expiry_time: 1752796799,
                            growth_rate: 0.03,
                            high_barrier: '364.149',
                            id: 'a5d87695-cb66-5eae-6ad3-8c55a8bb6e37',
                            is_expired: 0,
                            is_forward_starting: 0,
                            is_intraday: 0,
                            is_path_dependent: 1,
                            is_settleable: 0,
                            is_sold: 0,
                            is_valid_to_cancel: 0,
                            is_valid_to_sell: 1,
                            longcode:
                                'After the entry spot tick, your stake will grow continuously by 3% for every tick that the spot price remains within the ± 0.03797% from the previous spot price.',
                            low_barrier: '363.871',
                            profit: 8.6,
                            profit_percentage: 86,
                            purchase_time: 1721216495,
                            shortcode: 'ACCU_1HZ100V_10.00_0_0.03_1_0.000379665263_1721216495',
                            status: 'open',
                            tick_count: 75,
                            tick_passed: 21,
                            tick_stream: [
                                {
                                    epoch: 1721216508,
                                    tick: 364.15,
                                    tick_display_value: '364.15',
                                },
                                {
                                    epoch: 1721216509,
                                    tick: 364.15,
                                    tick_display_value: '364.15',
                                },
                                {
                                    epoch: 1721216510,
                                    tick: 364.14,
                                    tick_display_value: '364.14',
                                },
                                {
                                    epoch: 1721216511,
                                    tick: 364.11,
                                    tick_display_value: '364.11',
                                },
                                {
                                    epoch: 1721216512,
                                    tick: 364.16,
                                    tick_display_value: '364.16',
                                },
                                {
                                    epoch: 1721216513,
                                    tick: 364.1,
                                    tick_display_value: '364.10',
                                },
                                {
                                    epoch: 1721216514,
                                    tick: 364.13,
                                    tick_display_value: '364.13',
                                },
                                {
                                    epoch: 1721216515,
                                    tick: 364.05,
                                    tick_display_value: '364.05',
                                },
                                {
                                    epoch: 1721216516,
                                    tick: 364.01,
                                    tick_display_value: '364.01',
                                },
                                {
                                    epoch: 1721216517,
                                    tick: 364.04,
                                    tick_display_value: '364.04',
                                },
                            ],
                            transaction_ids: {
                                buy: 497467191088,
                            },
                            underlying: '1HZ100V',
                        },
                        details:
                            'After the entry spot tick, your stake will grow continuously by 3% for every tick that the spot price remains within the ± 0.03797% from the previous spot price.',
                        display_name: 'Volatility 100 (1s) Index',
                        id: 249545026128,
                        indicative: 18.6,
                        purchase: 10,
                        type: 'ACCU',
                        profit_loss: 8.6,
                        is_valid_to_sell: true,
                        current_tick: 21,
                        status: 'profit',
                        entry_spot: 364.15,
                        high_barrier: 364.149,
                        low_barrier: 363.871,
                    },
                ],
            },
            modules: {
                trade: {
                    ...mockStore({}).modules.trade,
                    currency: 'USD',
                    contract_type: 'rise_fall',
                    is_purchase_enabled: true,
                    proposal_info: {
                        PUT: {
                            id: 1234,
                            has_error: false,
                            has_error_details: false,
                            message:
                                'Win payout if Volatility 100 (1s) Index is strictly lower than entry spot at 10 minutes after contract start time.',
                            obj_contract_basis: {
                                text: 'Payout',
                                value: 19.2,
                            },
                            payout: 19.2,
                            profit: '9.20',
                            returns: '92.00%',
                            stake: '10.00',
                            spot: 366.11,
                            barrier: '366.11',
                            growth_rate: 0.03,
                            spot_time: 1721206371,
                        },
                        CALL: {
                            id: 12345,
                            has_error: false,
                            has_error_details: false,
                            message:
                                'Win payout if Volatility 100 (1s) Index is strictly higher than entry spot at 10 minutes after contract start time.',
                            obj_contract_basis: {
                                text: 'Payout',
                                value: 19.26,
                            },
                            payout: 19.26,
                            profit: '9.26',
                            returns: '92.60%',
                            stake: '10.00',
                            spot: 366.11,
                            barrier: '366.11',
                            growth_rate: 0.03,
                            spot_time: 1721206371,
                        },
                    },
                    symbol: '1HZ100V',
                    trade_types: {
                        CALL: 'Rise',
                        PUT: 'Fall',
                    },
                },
            },
        });
    });

    const mockPurchaseButton = () => {
        return (
            <TraderProviders store={defaultMockStore}>
                <ReportsStoreProvider>
                    <ModulesProvider store={defaultMockStore}>
                        <PurchaseButton />
                    </ModulesProvider>
                </ReportsStoreProvider>
            </TraderProviders>
        );
    };

    it('should render two buttons (for Rise and for Fall) with a proper content from proposal_info', () => {
        render(mockPurchaseButton());

        expect(screen.getAllByText('Payout')).toHaveLength(2);
        expect(screen.getByText(/19.26/)).toBeInTheDocument();
        expect(screen.getAllByText(/USD/i)).toHaveLength(2);
        expect(screen.getByText('Rise')).toBeInTheDocument();
        expect(screen.getByText('Fall')).toBeInTheDocument();
    });

    it('should switch to loading state (apply a proper className and show loader instead of button name) and call onPurchase function if user clicks on purchase button', () => {
        render(mockPurchaseButton());

        const purchase_button = screen.getAllByRole('button')[0];
        expect(purchase_button).not.toHaveClass('purchase-button--loading');
        expect(defaultMockStore.modules.trade.onPurchase).not.toBeCalled();
        expect(screen.queryByTestId('button-loader')).not.toBeInTheDocument();

        userEvent.click(purchase_button);

        expect(purchase_button).toHaveClass('purchase-button--loading');
        expect(defaultMockStore.modules.trade.onPurchase).toBeCalled();
        expect(screen.getByTestId('button-loader')).toBeInTheDocument();
    });

    it('should disable the button if one of the prop is false (is_trade_enabled, is_proposal_empty, !info.id, is_purchase_enabled): button should have a specific attribute and if user clicks on it onPurchase will not be called', () => {
        defaultMockStore.modules.trade.is_purchase_enabled = false;
        render(mockPurchaseButton());

        const purchase_button = screen.getAllByRole('button')[0];
        expect(purchase_button).toBeDisabled();
        expect(defaultMockStore.modules.trade.onPurchase).not.toBeCalled();

        userEvent.click(purchase_button);

        expect(defaultMockStore.modules.trade.onPurchase).not.toBeCalled();
    });

    it('should render only one button if trade_types have only one field', () => {
        defaultMockStore.modules.trade.trade_types = {
            CALL: 'Rise',
        };
        render(mockPurchaseButton());

        const purchase_button = screen.getByRole('button');
        expect(purchase_button).toBeInTheDocument();
        expect(purchase_button).toHaveClass('purchase-button--single');
    });

    it('should render sell button for Accumulators contract if there is an open Accumulators contract; if user clicks on it - onClickSell should be called', () => {
        defaultMockStore.modules.trade.has_open_accu_contract = true;
        defaultMockStore.modules.trade.is_accumulator = true;
        render(mockPurchaseButton());

        const sell_button = screen.getByText('Sell');
        expect(sell_button).toBeInTheDocument();
        expect(defaultMockStore.portfolio.onClickSell).not.toBeCalled();

        userEvent.click(sell_button);
        expect(defaultMockStore.portfolio.onClickSell).toBeCalled();
    });
});
