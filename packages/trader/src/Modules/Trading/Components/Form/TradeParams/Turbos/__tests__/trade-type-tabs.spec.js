import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import TradeTypeTabs from '../trade-type-tabs';

jest.mock('Stores/connect.js', () => ({
    __esModule: true,
    default: 'mockedDefaultExport',
    connect: () => Component => Component,
}));

describe('Trade Type Tabs', () => {
    const mockProps = {
        contract_type: 'turboslong',
        onChange: jest.fn(),
    };

    it('should render only if contract_type is turbosshort or turboslong', () => {
        const { container } = render(<TradeTypeTabs {...mockProps} />);
        expect(container.firstChild).toBeInTheDocument();
    });

    it('should not render if contract_type is other than turbosshort or turboslong', () => {
        const { container } = render(<TradeTypeTabs {...mockProps} contract_type='invalid_type' />);
        expect(container.firstChild).not.toBeInTheDocument();
    });

    it('should render two tabs with correct texts', () => {
        render(<TradeTypeTabs {...mockProps} />);
        expect(screen.getByText('Long')).toBeInTheDocument();
        expect(screen.getByText('Short')).toBeInTheDocument();
    });

    it('should call onChange when a tab is clicked', () => {
        const mockOnChange = jest.fn();
        render(<TradeTypeTabs contract_type='turboslong' onChange={mockOnChange} />);

        const shortTab = screen.getByText('Short');
        userEvent.click(shortTab);

        expect(mockOnChange).toHaveBeenCalled();
    });
});
