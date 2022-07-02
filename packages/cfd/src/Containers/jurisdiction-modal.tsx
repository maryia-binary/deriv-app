import React from 'react';
import { Button, Modal, DesktopWrapper, MobileDialog, MobileWrapper, UILoader } from '@deriv/components';
import { localize, Localize } from '@deriv/translations';
import { connect } from 'Stores/connect';
import RootStore from 'Stores/index';
import { CFD_PLATFORMS } from '@deriv/shared';
import { LandingCompany } from '@deriv/api-types';
import JurisdictionModalContent from './jurisdiction-modal-content';

type TTradingPlatformAvailableAccount = {
    market_type: 'financial' | 'gaming';
    name: string;
    requirements: {
        after_first_deposit: {
            financial_assessment: string[];
        };
        compliance: {
            mt5: string[];
            tax_information: string[];
        };
        signup: string[];
    };
    shortcode: 'bvi' | 'labuan' | 'svg' | 'vanuatu';
    sub_account_type: string;
};

type TCompareAccountsReusedProps = {
    landing_companies: LandingCompany;
    platform: string;
    is_logged_in: boolean;
    is_uk: boolean;
};

type TOpenAccountTransferMeta = {
    category: string;
    type?: string;
};

type TJurisdictionModalProps = TCompareAccountsReusedProps & {
    account_type: string;
    authentication_status: {
        document_status: string;
        identity_status: string;
    };
    disableApp: () => void;
    enableApp: () => void;
    is_jurisdiction_modal_visible: boolean;
    is_loading: boolean;
    is_eu: boolean;
    is_eu_country: boolean;
    residence: string;
    jurisdiction_selected_card: string;
    toggleJurisdictionModal: () => void;
    trading_platform_available_accounts: TTradingPlatformAvailableAccount[];
    is_fully_authenticated: boolean;
    is_pending_authentication: boolean;
    openPasswordModal: (account_type: TOpenAccountTransferMeta) => void;
};

const JurisdictionModal = ({
    account_type,
    authentication_status,
    disableApp,
    enableApp,
    is_jurisdiction_modal_visible,
    platform,
    is_eu,
    jurisdiction_selected_card,
    toggleJurisdictionModal,
    trading_platform_available_accounts,
    is_fully_authenticated,
    is_pending_authentication,
    openPasswordModal,
}: TJurisdictionModalProps) => {
    const [checked, setChecked] = React.useState<boolean>(false);

    const financial_available_accounts = trading_platform_available_accounts.filter(
        available_account => available_account.market_type === 'financial'
    );

    const synthetic_available_accounts = trading_platform_available_accounts.filter(
        available_account => available_account.market_type === 'gaming'
    );

    const modal_title = is_eu
        ? localize('Jurisdiction for your DMT5 CFDs account')
        : localize('Choose a jurisdiction for your DMT5 {{account_type}} account', {
              account_type: account_type === 'synthetic' ? 'Synthetic' : 'Financial',
          });

    const poa_status = authentication_status?.document_status;
    const poi_status = authentication_status?.identity_status;

    const onSelectRealAccount = () => {
        toggleJurisdictionModal();
        const type_of_account = {
            category: 'real',
            type: `${account_type}`,
        };
        openPasswordModal(type_of_account);
    };

    return (
        <>
            <div>
                <React.Suspense fallback={<UILoader />}>
                    <DesktopWrapper>
                        <Modal
                            disableApp={disableApp}
                            enableApp={enableApp}
                            is_open={is_jurisdiction_modal_visible}
                            title={modal_title}
                            toggleModal={toggleJurisdictionModal}
                            type='button'
                            height='696px'
                            width='1200px'
                        >
                            <JurisdictionModalContent
                                financial_available_accounts={financial_available_accounts}
                                synthetic_available_accounts={synthetic_available_accounts}
                                account_type={account_type}
                                authentication_status={authentication_status}
                                poa_status={poa_status}
                                poi_status={poi_status}
                                is_eu={is_eu}
                                is_fully_authenticated={is_fully_authenticated}
                                is_pending_authentication={is_pending_authentication}
                                checked={checked}
                                setChecked={setChecked}
                            />
                            <Modal.Footer>
                                <Button
                                    disabled={
                                        jurisdiction_selected_card === undefined ||
                                        (is_eu && is_fully_authenticated && !checked)
                                    }
                                    primary
                                    onClick={() => {
                                        if (jurisdiction_selected_card === 'SVG') {
                                            onSelectRealAccount();
                                        }
                                    }}
                                >
                                    <Localize i18n_default_text='Next' />
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </DesktopWrapper>
                    <MobileWrapper>
                        <MobileDialog
                            portal_element_id='deriv_app'
                            title={modal_title}
                            visible={is_jurisdiction_modal_visible}
                            onClose={toggleJurisdictionModal}
                            footer={
                                <Button
                                    style={{ width: '100%' }}
                                    disabled={
                                        jurisdiction_selected_card === undefined ||
                                        (is_eu && is_fully_authenticated && !checked)
                                    }
                                    primary
                                    onClick={() => {
                                        if (jurisdiction_selected_card === 'SVG') {
                                            onSelectRealAccount();
                                        }
                                    }}
                                >
                                    <Localize i18n_default_text='Next' />
                                </Button>
                            }
                        >
                            <JurisdictionModalContent
                                financial_available_accounts={financial_available_accounts}
                                synthetic_available_accounts={synthetic_available_accounts}
                                account_type={account_type}
                                authentication_status={authentication_status}
                                poa_status={poa_status}
                                poi_status={poi_status}
                                is_eu={is_eu}
                                is_fully_authenticated={is_fully_authenticated}
                                is_pending_authentication={is_pending_authentication}
                                checked={checked}
                                setChecked={setChecked}
                            />
                        </MobileDialog>
                    </MobileWrapper>
                </React.Suspense>
            </div>
        </>
    );
};

export default connect(({ modules, ui, client }: RootStore) => ({
    is_eu: client.is_eu,
    enableApp: ui.enableApp,
    disableApp: ui.disableApp,
    residence: client.residence,
    is_logged_in: client.is_logged_in,
    is_eu_country: client.is_eu_country,
    landing_companies: client.landing_companies,
    account_type: modules.cfd.account_type.type,
    is_loading: client.is_populating_mt5_account_list,
    authentication_status: client.authentication_status,
    is_fully_authenticated: client.is_fully_authenticated,
    is_pending_authentication: client.is_pending_authentication,
    toggleJurisdictionModal: modules.cfd.toggleJurisdictionModal,
    jurisdiction_selected_card: modules.cfd.jurisdiction_selected_card,
    is_jurisdiction_modal_visible: modules.cfd.is_jurisdiction_modal_visible,
    trading_platform_available_accounts: client.trading_platform_available_accounts,
}))(JurisdictionModal);
