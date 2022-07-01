import React from 'react';
import { Modal, MobileDialog, DesktopWrapper, MobileWrapper, Div100vhContainer, Text } from '@deriv/components';
import { localize } from '@deriv/translations';
import { connect } from 'Stores/connect';
import RootStore from 'Stores/index';
import { TCFDPersonalDetailsModalProps } from './props.types';
import CFDPersonalDetailsForm from '../Components/cfd-personal-details-form';
import { getPropertyValue, isDesktop, WS } from '@deriv/shared';

type TFormValues = { [key: string]: string };
type TSetSubmiting = (isSubmitting: boolean) => void;

const CFDPersonalDetailsModal = ({
    disableApp,
    client_email,
    is_open,
    enableApp,
    openPasswordModal,
    toggleCFDPersonalDetailsModal,
    toggleJurisdictionModal,
    residence_list,
    is_fully_authenticated,
    landing_company,
}: TCFDPersonalDetailsModalProps) => {
    const [form_error, setFormError] = React.useState<string>('');
    const [is_loading, setIsLoading] = React.useState<boolean>(false);
    const [form_values, setFormValues] = React.useState<TFormValues>({
        citizen: '',
        place_of_birth: '',
        tax_residence: '',
        tax_identification_number: '',
        account_opening_reason: '',
    });

    const initiatePersonalDetails = async (setSubmitting?: TSetSubmiting) => {
        // force request to update settings cache since settings have been updated
        const response = await WS.authorized.storage.getSettings();

        if (response.error) {
            setFormError(response.error.message);
            if (typeof setSubmitting === 'function') {
                setSubmitting(false);
            }
            return;
        }

        const cloned = { ...form_values };
        if (response.get_settings.citizen) {
            cloned.citizen = transform(response.get_settings.citizen);
        }
        if (response.get_settings.place_of_birth) {
            cloned.place_of_birth = transform(response.get_settings.place_of_birth);
        }
        if (response.get_settings.tax_residence) {
            cloned.tax_residence = transform(response.get_settings.tax_residence);
        }
        if (response.get_settings.tax_identification_number) {
            cloned.tax_identification_number = response.get_settings.tax_identification_number;
        }
        if (response.get_settings.account_opening_reason) {
            cloned.account_opening_reason = response.get_settings.account_opening_reason;
        }
        setFormValues(cloned);
    };

    React.useEffect(() => {
        setIsLoading(true);
        initiatePersonalDetails().then(() => {
            setIsLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const transform = (value: string | undefined) => {
        const [result] = residence_list.filter(item => item.value === value);
        return getPropertyValue(result, ['text']) || value;
    };

    const saveFormData = (_index: number, value: TFormValues) => {
        setFormValues({
            ...value,
            citizen: transform(value.citizen),
            place_of_birth: transform(value.place_of_birth),
            tax_residence: transform(value.tax_residence),
        });
    };

    const prevStep = () => {
        setFormError('');
        toggleCFDPersonalDetailsModal();
        toggleJurisdictionModal();
    };

    const updateValue = async (index: number, value: TFormValues, setSubmitting: TSetSubmiting, is_dirty = true) => {
        if (is_dirty) {
            // Set account settings
            const data = await WS.setSettings(value);
            if (data.error) {
                setFormError(data.error.message);
                setSubmitting(false);
                return;
            }
            initiatePersonalDetails(setSubmitting);
        }
        if (index === 0) await WS.triggerMt5DryRun({ email: client_email });
        saveFormData(index, value);
        toggleCFDPersonalDetailsModal();
        openPasswordModal();
    };

    const getPersonalDetailsForm = () => (
        <Div100vhContainer
            className='cfd-personal-details-modal'
            id='cfd-personal-details-modal'
            is_disabled={isDesktop()}
            height_offset='40px'
        >
            <div className='cfd-personal-details-modal__heading-container'>
                <Text as='p' weight='bold' align='center' size='s'>
                    {localize('Complete your personal details')}
                </Text>
            </div>

            <div className='cfd-personal-details-modal__body'>
                <CFDPersonalDetailsForm
                    className='cfd-personal-details-modal__form'
                    has_place_of_birth
                    has_previous_button
                    has_subheaders={false}
                    value={form_values}
                    index={0}
                    onSubmit={updateValue}
                    is_loading={is_loading}
                    onCancel={prevStep}
                    onSave={saveFormData}
                    form_error={form_error}
                    residence_list={residence_list}
                    is_fully_authenticated={is_fully_authenticated}
                    landing_company={landing_company}
                />
            </div>
        </Div100vhContainer>
    );

    return (
        <React.Fragment>
            <DesktopWrapper>
                <Modal
                    id='cfd-personal-details-modal'
                    className='real-account-signup-modal'
                    disableApp={disableApp}
                    width='904px'
                    title={localize('Add a real MT5 account')}
                    enableApp={enableApp}
                    is_open={is_open}
                    has_close_icon={true}
                    height='688px'
                    toggleModal={toggleCFDPersonalDetailsModal}
                >
                    {getPersonalDetailsForm()}
                </Modal>
            </DesktopWrapper>
            <MobileWrapper>
                <MobileDialog
                    portal_element_id='modal_root'
                    wrapper_classname='account-signup-mobile-dialog'
                    title={localize('Add a real MT5 account')}
                    visible={is_open}
                    onClose={toggleCFDPersonalDetailsModal}
                >
                    {getPersonalDetailsForm()}
                </MobileDialog>
            </MobileWrapper>
        </React.Fragment>
    );
};

export default connect(({ ui, modules, client }: RootStore) => ({
    disableApp: ui.disableApp,
    client_email: client.email,
    openPasswordModal: modules.cfd.enableCFDPasswordModal,
    is_open: modules.cfd.is_cfd_personal_details_modal_visible,
    toggleCFDPersonalDetailsModal: modules.cfd.toggleCFDPersonalDetailsModal,
    toggleJurisdictionModal: modules.cfd.toggleJurisdictionModal,
    enableApp: ui.enableApp,
    is_fully_authenticated: client.is_fully_authenticated,
    landing_company: client.landing_company,
    residence_list: client.residence_list,
}))(CFDPersonalDetailsModal);
