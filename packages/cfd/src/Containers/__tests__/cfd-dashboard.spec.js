import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CFDDashboard from '../cfd-dashboard';
import { BrowserRouter } from 'react-router-dom';

const mock_connect_props = {
    current_list: {},
};

jest.mock('Stores/connect', () => ({
    __esModule: true,
    default: 'mockedDefaultExport',
    connect: () => Component => props => Component({ ...props, ...mock_connect_props }),
}));
jest.mock('@deriv/account', () => ({
    ...jest.requireActual('@deriv/account'),
    ResetTradingPasswordModal: props => (
        <div style={{ display: props.is_visible ? 'block' : 'none' }}>ResetTradingPasswordModal</div>
    ),
}));
jest.mock('../../Components/cfd-demo-account-display', () => ({
    ...jest.requireActual('../../Components/cfd-demo-account-display'),
    CFDDemoAccountDisplay: () => <div>CFDDemoAccountDisplay</div>,
}));
jest.mock('../../Components/cfd-real-account-display', () => ({
    ...jest.requireActual('../../Components/cfd-demo-account-display'),
    CFDRealAccountDisplay: () => <div>CFDRealAccountDisplay</div>,
}));
jest.mock('../../Components/success-dialog.jsx', () => () => <div>SuccessDialog</div>);
jest.mock('../cfd-password-modal.tsx', () => props => (
    <div style={{ display: props.is_cfd_password_modal_enabled ? 'block' : 'none' }}>CFDPasswordModal</div>
));
jest.mock('../cfd-top-up-demo-modal', () => props => (
    <div style={{ display: props.is_top_up_virtual_open ? 'block' : 'none' }}>CFDTopUpDemoModal</div>
));
jest.mock('../mt5-trade-modal', () => props => (
    <div style={{ display: props.is_open ? 'block' : 'none' }}>MT5TradeModal</div>
));
jest.mock('../jurisdiction-modal', () => props => (
    <div style={{ display: props.is_jurisdiction_modal_visible ? 'block' : 'none' }}>JurisdictionModal</div>
));

describe('<CFDDashboard />', () => {
    let props;
    beforeEach(() => {
        props = {
            account_status: {},
            beginRealSignupForMt5: jest.fn(),
            checkShouldOpenAccount: jest.fn(),
            country: 'id',
            createCFDAccount: jest.fn(),
            enableApp: jest.fn(),
            disableApp: jest.fn(),
            disableCFDPasswordModal: jest.fn(),
            dxtrade_accounts_list_error: null,
            dxtrade_disabled_signup_types: {
                demo: false,
                real: false,
            },
            dxtrade_tokens: {
                demo: '',
                real: '',
            },
            dxtrade_verification_code: {},
            getRealSyntheticAccountsExistingData: jest.fn(),
            getRealFinancialAccountsExistingData: jest.fn(),
            has_maltainvest_account: false,
            has_mt5_real_account_error: false,
            has_mt5_demo_account_error: false,
            has_dxtrade_real_account_error: false,
            has_dxtrade_demo_account_error: false,
            has_real_account: true,
            is_accounts_switcher_on: false,
            is_dark_mode_on: false,
            is_eu: false,
            is_eu_country: false,
            is_loading: false,
            is_logged_in: false,
            is_logging_in: false,
            is_mt5_allowed: true,
            is_mt5_trade_modal_visible: false,
            is_dxtrade_allowed: true,
            is_reset_trading_password_modal_visible: false,
            is_virtual: false,
            isAccountOfTypeDisabled: jest.fn(() => false),
            landing_companies: {
                config: {
                    tax_details_required: 1,
                    tin_format: ['^\\d{15}$'],
                    tin_format_description: '999999999999999',
                },
                dxtrade_financial_company: {},
                dxtrade_gaming_company: {},
                financial_company: {},
                gaming_company: {},
                id: 'id',
                minimum_age: 18,
                mt_financial_company: {},
                mt_gaming_company: {},
                name: 'Indonesia',
                virtual_company: 'virtual',
            },
            location: {
                pathname: '/mt5',
                hash: '',
            },
            mt5_disabled_signup_types: {
                demo: false,
                real: false,
            },
            mt5_verification_code: {},
            mt5_status_server: {
                demo: [],
                real: [],
            },
            NotificationMessages: () => <div>NotificationMessages</div>,
            onMount: jest.fn(),
            onUnmount: jest.fn(),
            openAccountNeededModal: jest.fn(),
            openDerivRealAccountNeededModal: jest.fn(),
            openPasswordModal: jest.fn(),
            openTopUpModal: jest.fn(),
            platform: 'mt5',
            residence: 'id',
            residence_list: [
                {
                    identity: {
                        services: {
                            idv: {
                                documents_supported: {},
                                has_visual_sample: 0,
                                is_country_supported: 0,
                            },
                            onfido: {
                                documents_supported: {
                                    driving_licence: {
                                        display_name: 'Driving Licence',
                                    },
                                    national_identity_card: {
                                        display_name: 'National Identity Card',
                                    },
                                    passport: {
                                        display_name: 'Passport',
                                    },
                                },
                                is_country_supported: 1,
                            },
                        },
                    },
                    phone_idd: '62',
                    text: 'Indonesia',
                    tin_format: ['^\\d{15}$'],
                    value: 'id',
                },
            ],
            setAccountType: jest.fn(),
            setCFDPasswordResetModal: jest.fn(),
            setCurrentAccount: jest.fn(),
            standpoint: {
                financial_company: 'svg',
                gaming_company: 'svg',
                iom: false,
                malta: false,
                maltainvest: false,
                svg: true,
            },
            toggleAccountsDialog: jest.fn(),
            toggleMT5TradeModal: jest.fn(),
            toggleShouldShowRealAccountsList: jest.fn(),
            toggleCFDPersonalDetailsModal: jest.fn(),
            toggleResetTradingPasswordModal: jest.fn(),
            upgradeable_landing_companies: ['svg'],
        };
    });
    const portalRoot = global.document.createElement('div');
    portalRoot.setAttribute('id', 'deriv_app');
    const body = global.document.querySelector('body');
    body.appendChild(portalRoot);

    const renderwithRouter = (component, rerender_callback) => {
        if (rerender_callback) return rerender_callback(<BrowserRouter>{component}</BrowserRouter>);
        return render(<BrowserRouter>{component}</BrowserRouter>);
    };
    it('CFDDashboard should be rendered correctly for DMT5 & for Deriv X', () => {
        const { rerender } = renderwithRouter(<CFDDashboard {...props} />);

        expect(
            screen.getByRole('heading', {
                name: /welcome to deriv mt5 \(dmt5\) dashboard/i,
            })
        ).toBeInTheDocument();
        expect(screen.getByText('NotificationMessages')).toBeInTheDocument();
        expect(screen.getByText(/real account/i)).toBeInTheDocument();
        expect(screen.getByText(/demo account/i)).toBeInTheDocument();
        expect(screen.getByText('CFDRealAccountDisplay')).toBeInTheDocument();
        expect(
            screen.getByRole('button', {
                name: /compare accounts/i,
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('heading', {
                name: /run mt5 from your browser or download the mt5 app for your devices/i,
            })
        ).toBeInTheDocument();
        expect(screen.getByText('CFDPasswordModal')).not.toBeVisible();
        expect(screen.getByText('CFDTopUpDemoModal')).not.toBeVisible();
        expect(screen.getByText('JurisdictionModal')).not.toBeVisible();
        expect(screen.getByText('MT5TradeModal')).not.toBeVisible();
        expect(screen.getByText('ResetTradingPasswordModal')).not.toBeVisible();

        renderwithRouter(<CFDDashboard {...props} platform='dxtrade' location={{ pathname: '/derivx' }} />, rerender);

        expect(
            screen.getByRole('heading', {
                name: /welcome to deriv x/i,
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('heading', {
                name: /run deriv x on your browser or download the mobile app/i,
            })
        ).toBeInTheDocument();
    });
    it('Real account tab is active initially, and Demo account tab gets active when clicked', () => {
        renderwithRouter(<CFDDashboard {...props} />);

        const real_account_tab = screen.getByText(/real account/i);
        const demo_account_tab = screen.getByText(/demo account/i);

        expect(real_account_tab).toHaveClass('dc-tabs__active');
        expect(demo_account_tab).not.toHaveClass('dc-tabs__active');
        expect(screen.getByText('CFDRealAccountDisplay')).toBeInTheDocument();
        expect(screen.queryByText('CFDDemoAccountDisplay')).not.toBeInTheDocument();

        fireEvent.click(demo_account_tab);
        expect(demo_account_tab).toHaveClass('dc-tabs__active');
        expect(real_account_tab).not.toHaveClass('dc-tabs__active');
        expect(screen.getByText('CFDDemoAccountDisplay')).toBeInTheDocument();
        expect(screen.queryByText('CFDRealAccountDisplay')).not.toBeInTheDocument();
    });
    it('Compare accounts button disappears when switched to Demo tab in DMT5', () => {
        renderwithRouter(<CFDDashboard {...props} />);

        const real_account_tab = screen.getByText(/real account/i);
        const demo_account_tab = screen.getByText(/demo account/i);

        fireEvent.click(real_account_tab);

        expect(real_account_tab).toHaveClass('dc-tabs__active');
        expect(demo_account_tab).not.toHaveClass('dc-tabs__active');
        expect(
            screen.getByRole('button', {
                name: /compare accounts/i,
            })
        ).toBeInTheDocument();

        fireEvent.click(demo_account_tab);

        expect(
            screen.queryByRole('button', {
                name: /compare accounts/i,
            })
        ).not.toBeInTheDocument();
    });
});
