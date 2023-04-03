import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import TradeTypeTabs from '../trade-type-tabs';
import { StoreProvider, mockStore } from '@deriv/stores';

describe('Trade Type Tabs', () => {
    const mockRootStore = mockStore({
        modules: {
            trade: {
                contract_type: 'turboslong',
                onChange: jest.fn(() => {
                    if (mockRootStore.modules) {
                        mockRootStore.modules.trade.contract_type = 'turbosshort';
                    }
                }),
                vanilla_trade_type: 'VANILLALONGCALL',
            },
        },
    });

    it('should render Long & Short tabs when contract_type = turboslong', () => {
        render(
            <StoreProvider store={mockRootStore}>
                <TradeTypeTabs />
            </StoreProvider>
        );
        const long_tab = screen.getByText('Long');
        const short_tab = screen.getByText('Short');
        [long_tab, short_tab].forEach(tab => {
            expect(tab).toBeInTheDocument();
        });
    });

    it('should render Call & Put tabs when contract_type = vanilla, and vanilla_trade_type = VANILLALONGCALL', () => {
        if (mockRootStore.modules) {
            mockRootStore.modules.trade.contract_type = 'vanilla';
        }
        render(
            <StoreProvider store={mockRootStore}>
                <TradeTypeTabs />
            </StoreProvider>
        );
        const call_tab = screen.getByText('Call');
        const put_tab = screen.getByText('Put');
        [call_tab, put_tab].forEach(tab => {
            expect(tab).toBeInTheDocument();
        });
    });

    it('should not render if contract_type is other than turbos or vanillas', () => {
        if (mockRootStore.modules) {
            mockRootStore.modules.trade.contract_type = 'invalid_type';
        }
        render(
            <StoreProvider store={mockRootStore}>
                <TradeTypeTabs />
            </StoreProvider>
        );
        const long_tab = screen.queryByText('Long');
        const short_tab = screen.queryByText('Short');
        [long_tab, short_tab].forEach(tab => {
            expect(tab).not.toBeInTheDocument();
        });
    });

    it('should call onChange when a tab is clicked', () => {
        if (mockRootStore.modules) {
            mockRootStore.modules.trade.contract_type = 'turboslong';
        }
        render(
            <StoreProvider store={mockRootStore}>
                <TradeTypeTabs />
            </StoreProvider>
        );

        const short_tab = screen.getByText('Short');
        userEvent.click(short_tab);

        expect(mockRootStore.modules?.trade.contract_type).toBe('turbosshort');
    });
});
