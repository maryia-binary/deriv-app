import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
// import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
// import TradeTypeTabs from '../../Turbos/trade-type-tabs.jsx';

// describe('Trade Type Tabs', () => {
//   const onChangeMock = jest.fn();
//   const defaultProps = {
//     className: 'test-classname',
//     onChange: onChangeMock,
//     contract_type: 'turboslong',
//   };

//   it('renders component correctly', () => {
//     const { getByTestId } = render(<TradeTypeTabs {...defaultProps} />);
//     expect(getByTestId('trade-type-tabs')).toBeTruthy();
//   });

//   it('returns null if contract_type is not turbosshort or turboslong', () => {
//     const { queryByTestId } = render(<TradeTypeTabs {...defaultProps} contract_type="invalid" />);
//     expect(queryByTestId('trade-type-tabs')).toBeNull();
//   });

//   it('calls onChange when a button is clicked', () => {
//     const { getByText } = render(<TradeTypeTabs {...defaultProps} />);
//     const shortButton = getByText('Short');
//     fireEvent.click(shortButton);
//     expect(onChangeMock).toHaveBeenCalledTimes(1);
//   });

//   it('sets the button value correctly based on contract_type prop', () => {
//     const { getByText } = render(<TradeTypeTabs {...defaultProps} contract_type="turbosshort" />);
//     const shortButton = getByText('Short');
//     expect(shortButton).toHaveAttribute('aria-pressed', 'true');
//   });
// });

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
// import TradeTypeTabs from '../trade-type-tabs';
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
        render(<TradeTypeTabs {...mockProps} />);
        const { container } = render(<TradeTypeTabs {...mockProps} />);
        expect(container.firstChild).toBeInTheDocument();
    });

    it('should not render if contract_type is other than turbosshort or turboslong', () => {
        render(<TradeTypeTabs {...mockProps} />);
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
