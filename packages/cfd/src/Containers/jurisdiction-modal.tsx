import React from 'react';
import {
    Button,
    Checkbox,
    Modal,
    DesktopWrapper,
    MobileDialog,
    MobileWrapper,
    StaticUrl,
    UILoader,
} from '@deriv/components';
import { localize } from '@deriv/translations';
import { connect } from 'Stores/connect';
import RootStore from 'Stores/index';
import { CFD_PLATFORMS } from '@deriv/shared';
import { LandingCompany } from '@deriv/api-types';
import JurisdictionModalContent from './jurisdiction-modal-content';

export type TTradingPlatformAvailableAccount = {
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

type TJurisdictionModalProps = TCompareAccountsReusedProps & {
    account_type: {
        category: string;
        type: string;
    };
    authentication_status: {
        document_status: string;
        identity_status: string;
    };
    enableCFDPasswordModal: () => void;
    disableApp: () => void;
    enableApp: () => void;
    beginRealSignupForMt5: () => void;
    is_jurisdiction_modal_visible: boolean;
    is_eu: boolean;
    is_eu_country: boolean;
    is_loading: boolean;
    residence: string;
    jurisdiction_selected_card: string;
    toggleJurisdictionModal: () => void;
    trading_platform_available_accounts: TTradingPlatformAvailableAccount[];
};

const JurisdictionModal = ({
    account_type,
    authentication_status,
    enableCFDPasswordModal,
    beginRealSignupForMt5,
    disableApp,
    enableApp,
    is_jurisdiction_modal_visible,
    platform,
    is_eu,
    jurisdiction_selected_card,
    toggleJurisdictionModal,
    trading_platform_available_accounts,
}: TJurisdictionModalProps) => {
    const [is_tnc_consent_checked, setIsTncConsentChecked] = React.useState(false);
    const { type } = account_type;
    let available_accounts;
    if (type === 'synthetic') {
        available_accounts = trading_platform_available_accounts.filter(
            available_account => available_account.market_type === 'gaming'
        );
    } else if (type === 'financial') {
        available_accounts = trading_platform_available_accounts.filter(
            available_account => available_account.market_type === 'financial'
        );
    }

    const modal_title = is_eu
        ? localize('Jurisdiction for your DMT5 CFDs account')
        : localize('Choose a jurisdiction for your DMT5 {{account_type}} account', {
              account_type: type === 'synthetic' ? 'Synthetic' : 'Financial',
          });

    const poa_status = authentication_status?.document_status;
    const poi_status = authentication_status?.identity_status;

    const handleNextButtonClick = () => {
        if (is_eu) {
            toggleJurisdictionModal();
            if (poi_status === 'verified' && poa_status === 'verified' && is_tnc_consent_checked) {
                enableCFDPasswordModal();
            } else {
                beginRealSignupForMt5();
            }
        }
    };

    return (
        <>
            <div
                className='cfd-compare-accounts-modal__wrapper'
                style={{ marginTop: platform === CFD_PLATFORMS.DXTRADE ? '5rem' : '2.4rem' }}
            >
                <React.Suspense fallback={<UILoader />}>
                    <DesktopWrapper>
                        <Modal
                            className='cfd-dashboard__compare-accounts'
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
                                available_accounts={available_accounts}
                                account_type={type}
                                authentication_status={authentication_status}
                                poa_status={poa_status}
                                poi_status={poi_status}
                                is_tnc_consent_checked={is_tnc_consent_checked}
                                setIsTncConsentChecked={setIsTncConsentChecked}
                            />
                            <Modal.Footer>
                                <Button
                                    disabled={jurisdiction_selected_card === undefined}
                                    primary
                                    onClick={handleNextButtonClick}
                                    text={localize('Next')}
                                />
                            </Modal.Footer>
                        </Modal>
                    </DesktopWrapper>
                    <MobileWrapper>
                        <MobileDialog
                            portal_element_id='deriv_app'
                            title={localize('Compare accounts')}
                            wrapper_classname='cfd-dashboard__compare-accounts'
                            visible={is_jurisdiction_modal_visible}
                            onClose={toggleJurisdictionModal}
                        >
                            <JurisdictionModalContent
                                available_accounts={available_accounts}
                                account_type={type}
                                authentication_status={authentication_status}
                                poa_status={poa_status}
                                poi_status={poi_status}
                                is_tnc_consent_checked={is_tnc_consent_checked}
                                setIsTncConsentChecked={setIsTncConsentChecked}
                            />
                        </MobileDialog>
                    </MobileWrapper>
                </React.Suspense>
            </div>
        </>
    );
};

export default connect(({ modules, ui, client }: RootStore) => ({
    account_type: modules.cfd.account_type,
    authentication_status: client.authentication_status,
    enableCFDPasswordModal: modules.cfd.enableCFDPasswordModal,
    beginRealSignupForMt5: modules.cfd.beginRealSignupForMt5,
    disableApp: ui.disableApp,
    enableApp: ui.enableApp,
    is_jurisdiction_modal_visible: modules.cfd.is_jurisdiction_modal_visible,
    trading_platform_available_accounts: client.trading_platform_available_accounts,
    is_loading: client.is_populating_mt5_account_list,
    is_eu: client.is_eu,
    is_uk: client.is_uk,
    is_eu_country: client.is_eu_country,
    is_logged_in: client.is_logged_in,
    landing_companies: client.landing_companies,
    residence: client.residence,
    jurisdiction_selected_card: modules.cfd.jurisdiction_selected_card,
    toggleJurisdictionModal: modules.cfd.toggleJurisdictionModal,
}))(JurisdictionModal);
