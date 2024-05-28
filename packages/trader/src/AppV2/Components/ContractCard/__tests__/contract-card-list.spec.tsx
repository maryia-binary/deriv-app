import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockContractInfo } from '@deriv/shared';
import ContractCardList from '../contract-card-list';
import { TPortfolioPosition } from '@deriv/stores/types';

const ContractCard = 'Contract Card';

jest.mock('../contract-card', () => jest.fn(() => <div>{ContractCard}</div>));

const mockProps: React.ComponentProps<typeof ContractCardList> = {
    positions: [
        {
            contract_info: mockContractInfo({
                contract_id: 243585717228,
            }),
        },
        {
            contract_info: mockContractInfo({
                contract_id: 243578583348,
            }),
        },
    ] as TPortfolioPosition[],
};

describe('ContractCardList', () => {
    it('should not render component if positions are empty/not passed', () => {
        const { container } = render(<ContractCardList />);

        expect(container).toBeEmptyDOMElement();
    });
    it('should render component if positions are not empty', () => {
        render(<ContractCardList {...mockProps} />);

        expect(screen.getAllByText(ContractCard)).toHaveLength(2);
    });
    it('should call setHasButtonsDemo with false after 720ms if hasButtonsDemo === true', () => {
        const mockedSetHasButtonsDemo = jest.fn();
        jest.useFakeTimers();
        render(<ContractCardList {...mockProps} hasButtonsDemo setHasButtonsDemo={mockedSetHasButtonsDemo} />);

        jest.advanceTimersByTime(720);
        expect(mockedSetHasButtonsDemo).toHaveBeenCalledWith(false);
    });
});
