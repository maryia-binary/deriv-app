import React from 'react';
import { Icon, Text, Checkbox } from '@deriv/components';
import { PoaStatusCodes } from '@deriv/account';
import { Localize } from '@deriv/translations';
import classNames from 'classnames';
import { jurisdiction_contents } from 'Constants/jurisdiction-contents';
import RootStore from 'Stores/index';
import { connect } from 'Stores/connect';

type TJurisdictionModalContent = {
    account_type: string;
    jurisdiction_selected_card: string | undefined;
    selectTypeOfCard: (card_type: string | undefined) => string | undefined;
    synthetic_available_accounts: any[];
    financial_available_accounts: any[];
    poa_status: string;
    poi_status: string;
    is_eu: boolean;
    is_fully_authenticated: boolean;
    is_pending_authentication: boolean;
    checked: boolean;
    setChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

type TJurisdictionCard = {
    jurisdiction_selected_card: string | undefined;
    synthetic_available_accounts: any[];
    financial_available_accounts: any[];
    account_type: string;
    poa_status: string;
    poi_status: string;
    is_fully_authenticated: boolean;
    is_pending_authentication: boolean;
    selectTypeOfCard: (card_type: string | undefined) => string | undefined;
    type_of_card: string;
};

const JurisdictionCard = ({
    jurisdiction_selected_card,
    synthetic_available_accounts,
    financial_available_accounts,
    account_type,
    poa_status,
    poi_status,
    is_fully_authenticated,
    is_pending_authentication,
    selectTypeOfCard,
    type_of_card,
}: TJurisdictionCard) => {
    const number_of_synthetic_accounts_to_be_shown = synthetic_available_accounts.length;
    const number_of_financial_accounts_to_be_shown = financial_available_accounts.length;

    const [number_of_cards] = React.useState(
        account_type === 'synthetic'
            ? number_of_synthetic_accounts_to_be_shown
            : number_of_financial_accounts_to_be_shown
    );

    const poa_verified = poa_status === 'verified';
    const poa_none = poa_status === 'none';
    const poi_verified = poi_status === 'verified';
    const poi_none = poi_status === 'none';

    const cardSelection = (cardType: string) => {
        if (jurisdiction_selected_card === cardType) {
            selectTypeOfCard(undefined);
        } else {
            selectTypeOfCard(cardType);
        }
    };

    const Checkmark = () => (
        <Icon icon='IcCheckmark' className='cfd-jurisdiction-card__bullet-wrapper--checkmark' color='green' size={18} />
    );

    const OneOrTwoCards = number_of_cards === 1 || number_of_cards === 2;

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
                {is_pending_authentication && (
                    <div className='cfd-jurisdiction-card__verification-status'>
                        <p className='cfd-jurisdiction-card__verification-status--pending'>
                            <Localize i18n_default_text='Pending verification' />
                        </p>
                    </div>
                )}
                {is_fully_authenticated && (
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
            <div
                className={classNames('cfd-jurisdiction-card', {
                    'cfd-jurisdiction-card--selected': jurisdiction_selected_card === type_of_card,
                })}
                onClick={() => cardSelection(`${type_of_card}`)}
                style={OneOrTwoCards ? { width: '32em' } : { width: '27.6em' }}
            >
                {jurisdiction_contents[type_of_card as keyof typeof jurisdiction_contents].is_over_header_available && (
                    <div className='cfd-jurisdiction-card__over-header'>
                        <p>
                            <Localize
                                i18n_default_text={
                                    jurisdiction_contents[type_of_card as keyof typeof jurisdiction_contents]
                                        .over_header
                                }
                            />
                        </p>
                    </div>
                )}
                <h2>
                    <Localize
                        i18n_default_text={
                            jurisdiction_contents[type_of_card as keyof typeof jurisdiction_contents].header
                        }
                    />
                </h2>

                {jurisdiction_contents[type_of_card as keyof typeof jurisdiction_contents].contents.map(item => (
                    <div className='cfd-jurisdiction-card__bullet-wrapper'>
                        <div>
                            <Checkmark />
                        </div>
                        <Text as='p' size='xs' line_height='xs'>
                            <Localize i18n_default_text={item} />
                        </Text>
                    </div>
                ))}

                {Verification_statuses()}
            </div>
        </>
    );
};

const JurisdictionModalContent = ({
    jurisdiction_selected_card,
    account_type,
    selectTypeOfCard,
    synthetic_available_accounts,
    financial_available_accounts,
    poa_status,
    poi_status,
    is_eu,
    is_fully_authenticated,
    is_pending_authentication,
    checked,
    setChecked,
}: TJurisdictionModalContent) => {
    const poa_none = poa_status === 'none';
    const poi_none = poi_status === 'none';

    const cardsToBeShown = (type_of_card: string) => {
        const is_available =
            account_type === 'synthetic'
                ? synthetic_available_accounts.some(account => account.shortcode === type_of_card)
                : financial_available_accounts.some(account => account.shortcode === type_of_card);
        return is_available;
    };

    const ModalFootNote = () => {
        return (
            <>
                {poa_none && poi_none && jurisdiction_selected_card === 'BVI' && (
                    <Text as='p' align='center' size='xs' line_height='xs' className='cfd-jurisdiction-card__footnote'>
                        <Localize i18n_default_text='To create this account first we need your proof of identity and address.' />
                    </Text>
                )}
                {poa_none && poi_none && jurisdiction_selected_card === 'SVG' && (
                    <Text as='p' align='center' size='xs' line_height='xs' className='cfd-jurisdiction-card__footnote'>
                        <Localize i18n_default_text='Add your DMT5 Synthetics account under Deriv (SVG) LLC (company no. 273 LLC 2020).' />
                    </Text>
                )}
                {is_pending_authentication && (
                    <Text
                        as='p'
                        align='center'
                        size='xs'
                        line_height='xs'
                        className='cfd-jurisdiction-card__footnote--pending'
                    >
                        <Localize i18n_default_text='Your documents are being reviewed, we will notify you once this account is ready for you to create.' />
                    </Text>
                )}
            </>
        );
    };

    return (
        <>
            <div className='cfd-jurisdiction-card__wrapper'>
                {cardsToBeShown('bvi') && (
                    <JurisdictionCard
                        type_of_card='bvi'
                        jurisdiction_selected_card={jurisdiction_selected_card}
                        synthetic_available_accounts={synthetic_available_accounts}
                        financial_available_accounts={financial_available_accounts}
                        account_type={account_type}
                        is_fully_authenticated={is_fully_authenticated}
                        is_pending_authentication={is_pending_authentication}
                        poa_status={poa_status}
                        poi_status={poi_status}
                        selectTypeOfCard={selectTypeOfCard}
                    />
                )}

                {cardsToBeShown('mf') && is_eu && (
                    <JurisdictionCard
                        type_of_card='mf'
                        jurisdiction_selected_card={jurisdiction_selected_card}
                        synthetic_available_accounts={synthetic_available_accounts}
                        financial_available_accounts={financial_available_accounts}
                        is_fully_authenticated={is_fully_authenticated}
                        is_pending_authentication={is_pending_authentication}
                        account_type={account_type}
                        poa_status={poa_status}
                        poi_status={poi_status}
                        selectTypeOfCard={selectTypeOfCard}
                    />
                )}

                {cardsToBeShown('vanuatu') && (
                    <JurisdictionCard
                        type_of_card='vanuatu'
                        jurisdiction_selected_card={jurisdiction_selected_card}
                        synthetic_available_accounts={synthetic_available_accounts}
                        financial_available_accounts={financial_available_accounts}
                        is_fully_authenticated={is_fully_authenticated}
                        is_pending_authentication={is_pending_authentication}
                        account_type={account_type}
                        poa_status={poa_status}
                        poi_status={poi_status}
                        selectTypeOfCard={selectTypeOfCard}
                    />
                )}
                {cardsToBeShown('labuan') && (
                    <JurisdictionCard
                        type_of_card='labuan'
                        jurisdiction_selected_card={jurisdiction_selected_card}
                        synthetic_available_accounts={synthetic_available_accounts}
                        financial_available_accounts={financial_available_accounts}
                        is_fully_authenticated={is_fully_authenticated}
                        is_pending_authentication={is_pending_authentication}
                        account_type={account_type}
                        poa_status={poa_status}
                        poi_status={poi_status}
                        selectTypeOfCard={selectTypeOfCard}
                    />
                )}

                {cardsToBeShown('svg') && (
                    <JurisdictionCard
                        type_of_card='svg'
                        jurisdiction_selected_card={jurisdiction_selected_card}
                        synthetic_available_accounts={synthetic_available_accounts}
                        financial_available_accounts={financial_available_accounts}
                        is_fully_authenticated={is_fully_authenticated}
                        is_pending_authentication={is_pending_authentication}
                        account_type={account_type}
                        poa_status={poa_status}
                        poi_status={poi_status}
                        selectTypeOfCard={selectTypeOfCard}
                    />
                )}
            </div>
            <ModalFootNote />
            {is_eu && is_fully_authenticated && jurisdiction_selected_card === 'malta' && (
                <div className='cfd-jurisdiction-card__jurisdiction-checkbox'>
                    <Checkbox onChange={() => setChecked(!checked)} />
                    <Text
                        as='p'
                        align='center'
                        size='xs'
                        line_height='xs'
                        className='cfd-jurisdiction-card____jurisdiction-checkbox--description'
                    >
                        I confirm and accept Deriv Investments (Europe) Limited's Terms and Conditions
                    </Text>
                </div>
            )}
        </>
    );
};

export default connect(({ modules: { cfd }, client }: RootStore) => ({
    account_status: client.account_status,
    selectTypeOfCard: cfd.selectTypeOfCard,
    jurisdiction_selected_card: cfd.jurisdiction_selected_card,
}))(JurisdictionModalContent);
