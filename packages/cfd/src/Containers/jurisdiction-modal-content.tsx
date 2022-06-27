import React from 'react';
import { Checkbox, Icon, Text, StaticUrl } from '@deriv/components';
import { Localize } from '@deriv/translations';
import classNames from 'classnames';
import RootStore from 'Stores/index';
import { connect } from 'Stores/connect';
import { TTradingPlatformAvailableAccount } from './jurisdiction-modal';

type TJurisdictionModalContent = {
    account_type: string;
    is_tnc_consent_checked: boolean;
    jurisdiction_selected_card: string | undefined;
    selectTypeOfCard: (card_type: string | undefined) => string | undefined;
    available_accounts: TTradingPlatformAvailableAccount[];
    poa_status: string;
    poi_status: string;
    setIsTncConsentChecked: (is_tnc_consent_checked: boolean) => void;
};

const JurisdictionModalContent = ({
    is_tnc_consent_checked,
    jurisdiction_selected_card,
    selectTypeOfCard,
    available_accounts,
    poa_status,
    poi_status,
    setIsTncConsentChecked,
}: TJurisdictionModalContent) => {
    const number_of_cards_to_be_shown = available_accounts.length;
    const [unselect_card, setUnselectCard] = React.useState<boolean>(false);

    const poa_pending = poa_status === 'pending';
    const poa_verified = poa_status === 'verified';
    const poa_none = poa_status === 'none';
    const poi_pending = poi_status === 'pending';
    const poi_verified = poi_status === 'verified';
    const poi_none = poi_status === 'none';

    const cardSelection = (cardType: string) => {
        setUnselectCard(!unselect_card);
        return !unselect_card ? selectTypeOfCard(cardType) : selectTypeOfCard(undefined);
    };

    const Checkmark = () => (
        <Icon icon='IcCheckmark' className='cfd-jurisdiction-card__bullet-wrapper--checkmark' color='green' size={16} />
    );

    const OneOrTwoCards = number_of_cards_to_be_shown === 1 || number_of_cards_to_be_shown === 2;

    const Verification_statuses = () => {
        return (
            <>
                {poa_none && poi_none && (
                    <div className='cfd-jurisdiction-card__footer'>
                        <p>
                            <Localize i18n_default_text='You will need to submit proof of identity and address' />
                        </p>
                    </div>
                )}
                {(poa_pending || poi_pending) && (
                    <div className='cfd-jurisdiction-card__verification-status'>
                        <p className='cfd-jurisdiction-card__verification-status--pending'>
                            <Localize i18n_default_text='Pending verification' />
                        </p>
                    </div>
                )}
                {poa_verified && poi_verified && (
                    <div className='cfd-jurisdiction-card__verification-status'>
                        <p className='cfd-jurisdiction-card__verification-status--verified'>
                            <Localize i18n_default_text='Verified' />
                        </p>
                    </div>
                )}
                {poi_none && poa_verified && (
                    <div className='cfd-jurisdiction-card__verification-status'>
                        <p className='cfd-jurisdiction-card__verification-status--POA_POI'>
                            <Localize i18n_default_text='Check your proof of identity' />
                        </p>
                    </div>
                )}
                {poa_none && poi_verified && (
                    <div className='cfd-jurisdiction-card__verification-status'>
                        <p className='cfd-jurisdiction-card__verification-status--POA_POI'>
                            <Localize i18n_default_text='Check your proof of address' />
                        </p>
                    </div>
                )}
            </>
        );
    };

    return (
        <>
            <div className='cfd-jurisdiction-card__wrapper'>
                {number_of_cards_to_be_shown >= 1 && (
                    <div
                        className={classNames('cfd-jurisdiction-card', {
                            'cfd-jurisdiction-card--selected': jurisdiction_selected_card === 'BVI',
                        })}
                        onClick={() => cardSelection('BVI')}
                        style={OneOrTwoCards ? { width: '32em' } : { width: '27.6em' }}
                    >
                        <div className='cfd-jurisdiction-card__over-header'>
                            <p>
                                <Localize i18n_default_text='Better leverage and spreads' />
                            </p>
                        </div>
                        <h1>
                            <Localize i18n_default_text='British Virgin Islands' />
                        </h1>
                        <div className='cfd-jurisdiction-card__bullet-wrapper'>
                            <Checkmark />
                            <Localize i18n_default_text='Selecting this will onboard you through Deriv (SVG) LLC (company no. 273 LLC 2020)' />
                        </div>

                        <div className='cfd-jurisdiction-card__bullet-wrapper'>
                            <Checkmark />
                            <Localize i18n_default_text='Registered with the Financial Commission' />
                        </div>

                        <div className='cfd-jurisdiction-card__bullet-wrapper'>
                            <Checkmark />
                            <Localize i18n_default_text='170+ assets: forex (standard/micro), stocks, stock indices, commodities, basket indices, and cryptocurrencies' />
                        </div>

                        <div className='cfd-jurisdiction-card__bullet-wrapper'>
                            <Checkmark />
                            <Localize i18n_default_text='Leverage up to 1:1000' />
                        </div>
                        <Verification_statuses />
                    </div>
                )}

                {number_of_cards_to_be_shown >= 2 && (
                    <div
                        className={classNames('cfd-jurisdiction-card', {
                            'cfd-jurisdiction-card--selected': jurisdiction_selected_card === 'Vanuatu',
                        })}
                        onClick={() => cardSelection('Vanuatu')}
                        style={OneOrTwoCards ? { width: '32em' } : { width: '27.6em' }}
                    >
                        <div className='cfd-jurisdiction-card__over-header'>
                            <p>
                                <Localize i18n_default_text='Better leverage and spreads' />
                            </p>
                        </div>
                        <h1>
                            <Localize i18n_default_text='Vanuatu' />
                        </h1>
                        <div className='cfd-jurisdiction-card__bullet-wrapper'>
                            <Checkmark />
                            <Localize i18n_default_text='Regulated by the Vanuatu Financial Services Commission' />
                        </div>
                        <div className='cfd-jurisdiction-card__bullet-wrapper'>
                            <Checkmark />
                            <Localize i18n_default_text='Registered with the Financial Commission' />
                        </div>

                        <div className='cfd-jurisdiction-card__bullet-wrapper'>
                            <Checkmark />
                            <Localize i18n_default_text='30+ assets: forex and commodities' />
                        </div>

                        <div className='cfd-jurisdiction-card__bullet-wrapper'>
                            <Checkmark />
                            <Localize i18n_default_text='Leverage up to 1:1000' />
                        </div>
                        {Verification_statuses()}
                    </div>
                )}
                {number_of_cards_to_be_shown >= 3 && (
                    <div
                        className={classNames('cfd-jurisdiction-card', {
                            'cfd-jurisdiction-card--selected': jurisdiction_selected_card === 'Labuan',
                        })}
                        onClick={() => cardSelection('Labuan')}
                    >
                        <div className='cfd-jurisdiction-card__over-header'>
                            <p>
                                <Localize i18n_default_text='Straight through processing' />
                            </p>
                        </div>
                        <h1>Labuan</h1>
                        <div className='cfd-jurisdiction-card__bullet-wrapper'>
                            <Checkmark />
                            <Localize i18n_default_text='Regulated by the Labuan Financial Services Authority (licence no. MB/18/0024)' />
                        </div>

                        <div className='cfd-jurisdiction-card__bullet-wrapper'>
                            <Checkmark />
                            <Localize i18n_default_text='Registered with the Financial Commission' />
                        </div>

                        <div className='cfd-jurisdiction-card__bullet-wrapper'>
                            <Checkmark />
                            <Localize i18n_default_text='80+ assets: forex and cryptocurrencies' />
                        </div>

                        <div className='cfd-jurisdiction-card__bullet-wrapper'>
                            <Checkmark />
                            <Localize i18n_default_text='Leverage up to 1:100' />
                        </div>

                        <div className='cfd-jurisdiction-card__bullet-wrapper'>
                            <Checkmark />
                            <Localize i18n_default_text='Straight through processing' />
                        </div>
                        {Verification_statuses()}
                    </div>
                )}

                {number_of_cards_to_be_shown >= 4 && (
                    <div
                        className={classNames('cfd-jurisdiction-card', {
                            'cfd-jurisdiction-card--selected': jurisdiction_selected_card === 'SVG',
                        })}
                        onClick={() => cardSelection('SVG')}
                    >
                        <h1>
                            <Localize i18n_default_text='St. Vincent & Grenadines' />
                        </h1>
                        <div className='cfd-jurisdiction-card__bullet-wrapper'>
                            <Checkmark />
                            <Localize i18n_default_text='Regulated by the Labuan Financial Services Authority (licence no. MB/18/0024)' />
                        </div>

                        <div className='cfd-jurisdiction-card__bullet-wrapper'>
                            <Checkmark />
                            <Localize i18n_default_text='Registered with the Financial Commission' />
                        </div>

                        <div className='cfd-jurisdiction-card__bullet-wrapper'>
                            <Checkmark />
                            <Localize i18n_default_text='80+ assets: forex and cryptocurrencies' />
                        </div>

                        <div className='cfd-jurisdiction-card__bullet-wrapper'>
                            <Checkmark />
                            <Localize i18n_default_text='Leverage up to 1:100' />
                        </div>

                        <div className='cfd-jurisdiction-card__bullet-wrapper'>
                            <Checkmark />
                            <Localize i18n_default_text='Straight through processing' />
                        </div>
                        {Verification_statuses()}
                    </div>
                )}
            </div>
            <Text as='p' bold align='center' size='xs' line_height='xs' className='cfd-jurisdiction-card__footnote'>
                <Localize i18n_default_text='To create this account first we need your proof of identity and address.' />
            </Text>
            {poi_status === 'verified' && poa_status === 'verified' && (
                <Checkbox
                    value={is_tnc_consent_checked}
                    className='cfd-jurisdiction-card__tnc-checkbox'
                    onChange={() => setIsTncConsentChecked(!is_tnc_consent_checked)}
                    label={
                        <Localize
                            i18n_default_text="I confirm and accept {{legal_entity}} 's <0>Terms and Conditions</0>"
                            values={{
                                legal_entity: available_accounts.find(
                                    account => account.shortcode === jurisdiction_selected_card
                                )?.name,
                            }}
                            components={[<StaticUrl key={0} className='link' href='/terms-and-conditions' />]}
                        />
                    }
                />
            )}
        </>
    );
};

export default connect(({ modules: { cfd }, client }: RootStore) => ({
    selectTypeOfCard: cfd.selectTypeOfCard,
    jurisdiction_selected_card: cfd.jurisdiction_selected_card,
    account_status: client.account_status,
}))(JurisdictionModalContent);
