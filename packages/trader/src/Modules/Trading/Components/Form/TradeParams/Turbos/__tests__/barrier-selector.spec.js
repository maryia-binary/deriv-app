import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import BarrierSelector from '../barrier-selector';
import TradeParams from '../../../../../Containers/trade-params';

const mock_props = {
    barrier_1: '16',
    onChange: () => {
        mock_props.barrier_1 = '33';
    },
    setHoveredBarrier: jest.fn(),
    turbos_barrier_choices: ['16', '33', '40'],
};

jest.mock('Stores/connect.js', () => ({
    __esModule: true,
    default: 'mockedDefaultExport',
    connect: () => Component => props => Component({ ...props, ...mock_props }),
}));

jest.mock('@deriv/shared', () => ({
    ...jest.requireActual('@deriv/shared'),
}));

describe('Trade Params component', () => {
    it('BarriersSelector component should be rendered if form_components array include it', () => {
        const { rerender } = render(<TradeParams form_components={['barrier_selector']} is_minimized />);
        expect(screen.getByText('Spot')).toBeInTheDocument();

        rerender(<TradeParams form_components={['barrier']} is_minimized />);
        expect(screen.queryByText('Spot')).not.toBeInTheDocument();
    });
});

describe('Barriers Selector', () => {
    beforeEach(() => {
        render(<BarrierSelector {...mock_props} />);
    });

    it('The value of barrier_1 is chosen by default after first render', () => {
        const current_barrier = screen.getByTestId('current_barrier');
        expect(current_barrier.innerHTML).toBe(mock_props.barrier_1);
    });

    it('The barrier list is hidden/collapsed by default', () => {
        expect(screen.queryByText('Distance to spot')).not.toBeInTheDocument();
    });

    it('The barrier list is shown after cliking on current barrier', () => {
        const current_barrier = screen.getByTestId('current_barrier');
        userEvent.click(current_barrier);

        expect(screen.getByText('Distance to spot')).toBeInTheDocument();
    });

    it('All the available barriers from turbos_barrier_choices should be rendered in barrier list (when it can be shown)', () => {
        const current_barrier = screen.getByTestId('current_barrier');
        userEvent.click(current_barrier);

        mock_props.turbos_barrier_choices.forEach(barrier =>
            expect(screen.getByTestId(`${barrier}`)).toBeInTheDocument()
        );
    });

    it('After user clicked on the one of barriers option, it should be shown as current barrier value for desktop', () => {
        const current_barrier = screen.getByTestId('current_barrier');
        userEvent.click(current_barrier);
        const cliked_barrier = screen.getByTestId(`${mock_props.turbos_barrier_choices[1]}`);
        userEvent.click(cliked_barrier);

        expect(current_barrier.innerHTML).toBe(`${mock_props.turbos_barrier_choices[1]}`);
    });

    it('After clicking on cross icon barrier list should be closed/collapsed', () => {
        const current_barrier = screen.getByTestId('current_barrier');
        userEvent.click(current_barrier);
        const icon_cross = screen
            .getByText('Barriers')
            .parentNode.querySelector('.trade-container__barriers-table__icon-close');
        userEvent.click(icon_cross);

        expect(screen.queryByText('Distance to spot')).not.toBeInTheDocument();
    });
});
