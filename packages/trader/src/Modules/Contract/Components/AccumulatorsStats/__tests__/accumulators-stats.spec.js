import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { isDesktop, isMobile } from '@deriv/shared';
import AccumulatorsStats, { CONTRACT_TYPES, ROW_SIZES } from '../accumulators-stats';

const mock_connect_props = {
    ticks_history_stats: {
        ACCU: {
            ticks_stayed_in: [1, 65, 1234, 675, 234, 10, 658, 134, 5, 2394, 100, 6, 90, 9, 344, 81, 695, 14, 345, 2222],
            last_tick_epoch: 1005,
        },
        DECCU: {
            ticks_stayed_in: [
                131, 2853, 423, 33, 1573, 1312, 23, 4213, 323, 573, 1313, 223, 4238, 373, 193, 1317, 2883, 403, 303,
                7777,
            ],
            last_tick_epoch: 1010,
        },
    },
};

jest.mock('Stores/connect.js', () => ({
    __esModule: true,
    default: 'mockedDefaultExport',
    connect: () => Component => props => Component({ ...props, ...mock_connect_props }),
}));
jest.mock('@deriv/shared', () => ({
    ...jest.requireActual('@deriv/shared'),
    isDesktop: jest.fn(),
    isMobile: jest.fn(),
    getUrlBase: jest.fn(() => 'image_src.svg'),
}));

describe('AccumulatorsStats', () => {
    const modal_root_el = document.createElement('div');
    modal_root_el.setAttribute('id', 'modal_root');
    document.body.appendChild(modal_root_el);
    const stay_in_history = mock_connect_props.ticks_history_stats.ACCU.ticks_stayed_in;
    const break_out_history = mock_connect_props.ticks_history_stats.DECCU.ticks_stayed_in;

    beforeEach(() => {
        isMobile.mockReturnValue(false);
        isDesktop.mockReturnValue(true);
    });

    it('should render as expandable', () => {
        const { container } = render(<AccumulatorsStats />);
        expect(container.querySelector('.accordion-toggle-arrow')).toBeInTheDocument();
    });
    it('should render as non-expandable', () => {
        const { container } = render(<AccumulatorsStats is_expandable={false} />);
        expect(container.querySelector('.accordion-toggle-arrow')).not.toBeInTheDocument();
    });
    it('should switch to Break out history when switcher are clicked and back to Stay in history when clicked again', () => {
        render(<AccumulatorsStats />);
        expect(screen.getByText(`${CONTRACT_TYPES.STAY_IN} history`)).toBeInTheDocument();
        expect(screen.getByText(stay_in_history[0])).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('dt_accu_stats_switcher'));
        expect(screen.getByText(`${CONTRACT_TYPES.BREAK_OUT} history`)).toBeInTheDocument();
        expect(screen.getByText(break_out_history[0])).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('dt_accu_stats_switcher'));
        expect(screen.getByText(`${CONTRACT_TYPES.STAY_IN} history`)).toBeInTheDocument();
        expect(screen.getByText(stay_in_history[0])).toBeInTheDocument();
    });
    it('should not switch to Break out history when DECCU history is missing', () => {
        mock_connect_props.ticks_history_stats.DECCU = {};
        render(<AccumulatorsStats />);
        expect(screen.getByText(`${CONTRACT_TYPES.STAY_IN} history`)).toBeInTheDocument();
        expect(screen.getByText(stay_in_history[0])).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('dt_accu_stats_switcher'));
        expect(screen.queryByText(`${CONTRACT_TYPES.BREAK_OUT} history`)).not.toBeInTheDocument();
        expect(screen.getByText(`${CONTRACT_TYPES.STAY_IN} history`)).toBeInTheDocument();
    });
    it('should show manual after info icon is clicked', () => {
        const { container } = render(<AccumulatorsStats />);
        fireEvent.click(container.querySelector('.info'));
        expect(screen.getByAltText('accumulators_stats_manual')).toBeInTheDocument();
    });
    it('should render partial history values (tick counters) when initially collapsed in desktop', () => {
        render(<AccumulatorsStats />);
        expect(screen.getAllByTestId('dt_accu_stats_history_counter').length).toEqual(ROW_SIZES.DESKTOP_COLLAPSED);
    });
    it('should render partial history values (tick counters) when initially collapsed in mobile', () => {
        isMobile.mockReturnValue(true);
        isDesktop.mockReturnValue(false);
        render(<AccumulatorsStats />);
        expect(screen.getAllByTestId('dt_accu_stats_history_counter').length).toEqual(ROW_SIZES.MOBILE_COLLAPSED);
    });
    it('should expand in desktop when accordion_toggle_arrow is clicked', () => {
        const { container } = render(<AccumulatorsStats />);
        expect(screen.getAllByTestId('dt_accu_stats_history_counter').length).toEqual(ROW_SIZES.DESKTOP_COLLAPSED);

        fireEvent.click(container.querySelector('.accordion-toggle-arrow'));
        const row = screen.getAllByTestId('dt_accu_stats_history_row')[0];
        expect(within(row).getAllByTestId('dt_accu_stats_history_counter').length).toEqual(ROW_SIZES.DESKTOP_EXPANDED);
        expect(screen.getAllByTestId('dt_accu_stats_history_counter').length).toEqual(20);
    });
    it('should show MobileDialog with full "Stay in history" in mobile when accordion_toggle_arrow is clicked', () => {
        isMobile.mockReturnValue(true);
        isDesktop.mockReturnValue(false);
        const { container } = render(<AccumulatorsStats />);
        expect(screen.getAllByTestId('dt_accu_stats_history_counter').length).toEqual(ROW_SIZES.MOBILE_COLLAPSED);

        fireEvent.click(container.querySelector('.accordion-toggle-arrow'));
        const mobile_dialog = document.body.querySelector('.dc-mobile-dialog__accumulators-stats');
        const row = within(mobile_dialog).getAllByTestId('dt_accu_stats_history_row')[0];
        expect(within(row).getAllByTestId('dt_accu_stats_history_counter').length).toEqual(ROW_SIZES.MOBILE_EXPANDED);
        expect(within(mobile_dialog).getAllByTestId('dt_accu_stats_history_counter').length).toEqual(20);
    });
});
