import React from 'react';
import { render, screen } from '@testing-library/react';
import TurbosCardBody from '../turbos-card-body';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { isMobile, getLimitOrderAmount, getTotalProfit } from '@deriv/shared';

const contract_info = {
    contract_id: 1,
    buy_price: '1044.00',
    profit: 50,
    limit_order: null,
    barrier: '10904.80',
    current_spot_display_value: '1046.80',
    sell_spot: '1046.80',
    entry_spot: 1054,
};

const mockCardLabels = () => ({
    BARRIER_LEVEL: 'Barrier level',
    CURRENT_PRICE: 'Current price',
    STAKE: 'Stake',
    BUY_PRICE: 'Buy price',
    TAKE_PROFIT: 'Take profit',
    TOTAL_PROFIT_LOSS: 'Total profit/loss',
    PAYOUT: 'Payout',
    PROFIT_LOSS: 'Profit/Loss',
    POTENTIAL_PROFIT_LOSS: 'Potential profit/loss',
});

jest.mock('@deriv/shared', () => ({
    ...jest.requireActual('@deriv/shared'),
    isMobile: jest.fn(() => true),
}));

describe('TurbosCardBody', () => {
    const mockProps = {
        addToast: jest.fn(),
        connectWithContractUpdate: jest.fn(),
        contract_info: contract_info,
        contract_update: contract_info,
        currency: 'USD',
        current_focus: null,
        error_message_alignment: 'left',
        getCardLabels: mockCardLabels,
        getContractById: jest.fn(),
        is_sold: false,
        is_turbos: true,
        is_open_positions: false,
        onMouseLeave: jest.fn(),
        removeToast: jest.fn(),
        setCurrentFocus: jest.fn(),
        status: 'profit',
        progress_slider_mobile_el: false,
    };

    const total_profit = getTotalProfit(contract_info);

    // is_open_positions = false && is_sold = false
    test('renders stake amount correctly', () => {
        render(<TurbosCardBody {...mockProps} contract_info={contract_info} currency='USD' />);
        const stakeHeader = screen.getByText('Stake');
        expect(stakeHeader).toBeInTheDocument();
        const stakeAmount = screen.getByText('1,044.00');
        expect(stakeAmount).toBeInTheDocument();

        const currentPriceHeader = screen.getByText('Current price');
        expect(currentPriceHeader).toBeInTheDocument();
        const currentPriceAmount = screen.getByText('1,046.80');
        expect(currentPriceAmount).toBeInTheDocument();
        screen.debug();

        const barrierHeader = screen.getByText('Barrier level');
        expect(barrierHeader).toBeInTheDocument();
        const barrierLevel = screen.getByText('10,904.80');
        expect(barrierLevel).toBeInTheDocument();

        const takeProfitHeader = screen.getByText('Take profit');
        expect(takeProfitHeader).toBeInTheDocument();
        const takeProfitAmount = screen.getByText('0.00');
        expect(takeProfitAmount).toBeInTheDocument();
    });

    // is_open_positions = false && is_sold = true
    test('renders current price correctly', () => {
        render(<TurbosCardBody {...mockProps} contract_info={contract_info} currency='USD' />);

        const stakeHeader = screen.getByText('Stake');
        expect(stakeHeader).toBeInTheDocument();
        const stakeAmount = screen.getByText('1,044.00');
        expect(stakeAmount).toBeInTheDocument();

        const currentPriceHeader = screen.getByText('Current price');
        expect(currentPriceHeader).toBeInTheDocument();
        const currentPriceAmount = screen.getByText('1,046.80');
        expect(currentPriceAmount).toBeInTheDocument();

        const barrierHeader = screen.getByText('Barrier level');
        expect(barrierHeader).toBeInTheDocument();
        const barrierLevel = screen.getByText('10,904.80');
        expect(barrierLevel).toBeInTheDocument();

        const takeProfitHeader = screen.getByText('Take profit');
        expect(takeProfitHeader).toBeInTheDocument();
        const takeProfitAmount = screen.getByText('-');
        expect(takeProfitAmount).toBeInTheDocument();

        const TotalProfitLossHeader = screen.getByText('Total profit/loss');
        expect(TotalProfitLossHeader).toBeInTheDocument();
        const TotalProfitLossAmount = screen.getByText('0.00');
        expect(TotalProfitLossAmount).toBeInTheDocument();
    });

    // is_open_positions = true && is_sold = false

    test('renders potential profit/loss correctly for open positions', () => {
        render(
            <TurbosCardBody
                {...mockProps}
                contract_info={contract_info}
                currency='USD'
                is_open_positions
                is_sold={false}
            />
        );
        const stakeHeader = screen.getByText('Stake');
        expect(stakeHeader).toBeInTheDocument();
        const stakeAmount = screen.getByText('1,044.00');
        expect(stakeAmount).toBeInTheDocument();

        const currentPriceHeader = screen.getByText('Current price');
        expect(currentPriceHeader).toBeInTheDocument();
        const currentPriceAmount = screen.getByText('1,046.80');
        expect(currentPriceAmount).toBeInTheDocument();

        const barrierHeader = screen.getByText('Barrier level');
        expect(barrierHeader).toBeInTheDocument();
        const barrierLevel = screen.getByText('10,904.80');
        expect(barrierLevel).toBeInTheDocument();

        const PotentialProfitLossHeader = screen.getByText('Potential profit/loss');
        expect(PotentialProfitLossHeader).toBeInTheDocument();
        const PotentialProfitLossAmount = screen.getByText('0.00');
        expect(PotentialProfitLossAmount).toBeInTheDocument();

        const takeProfitHeader = screen.getByText('Take profit');
        expect(takeProfitHeader).toBeInTheDocument();
        const takeProfitAmount = screen.getByText('-');
        expect(takeProfitAmount).toBeInTheDocument();

        screen.debug();
    });

    // is_open_positions = true && is_sold = true
    test('renders headers when contract is sold', () => {
        render(
            <TurbosCardBody
                {...mockProps}
                contract_info={contract_info}
                currency='USD'
                is_open_positions
                is_sold={true}
            />
        );

        const profitLossHeader = screen.getByText('Profit/Loss');
        expect(profitLossHeader).toBeInTheDocument();
        const profitLossAmount = screen.getByText('1,044.00');
        expect(profitLossAmount).toBeInTheDocument();

        const payoutHeader = screen.getByText('Payout');
        expect(payoutHeader).toBeInTheDocument();
        const payoutAmount = screen.getByText('1,046.80');
        expect(payoutAmount).toBeInTheDocument();

        const buyPriceHeader = screen.getByText('Buy price');
        expect(buyPriceHeader).toBeInTheDocument();
        const buyPriceAmount = screen.getByText('1,054.00');
        expect(buyPriceAmount).toBeInTheDocument();

        const takeProfitHeader = screen.getByText('Take profit');
        expect(takeProfitHeader).toBeInTheDocument();
        const takeProfitAmount = screen.getByText('-');
        expect(takeProfitAmount).toBeInTheDocument();

        expect(screen.queryByText('Barrier level')).not.toBeInTheDocument();
        expect(screen.queryByText('Current price')).not.toBeInTheDocument();
    });
});
