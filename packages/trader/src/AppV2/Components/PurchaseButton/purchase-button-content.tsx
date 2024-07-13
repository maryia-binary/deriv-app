import React from 'react';
import clsx from 'clsx';
import { useTraderStore } from 'Stores/useTraderStores';
import { getLocalizedBasis } from '@deriv/shared';
import { Money } from '@deriv/components';

type TPurchaseButtonContent = {
    info: ReturnType<typeof useTraderStore>['proposal_info'][0];
    is_reverse?: boolean;
} & Pick<
    ReturnType<typeof useTraderStore>,
    'contract_type' | 'currency' | 'is_accumulator' | 'is_multiplier' | 'is_vanilla_fx' | 'is_vanilla' | 'is_turbos'
>;

const PurchaseButtonContent = ({
    contract_type,
    currency,
    info,
    is_accumulator,
    is_multiplier,
    is_turbos,
    is_vanilla,
    is_vanilla_fx,
    is_reverse,
}: TPurchaseButtonContent) => {
    const localized_basis = getLocalizedBasis();
    const amount = is_multiplier ? info.stake : info?.obj_contract_basis?.value;

    const getTextBasis = () => {
        if (is_turbos || (is_vanilla && !is_vanilla_fx)) return localized_basis.payout_per_point;
        if (is_vanilla_fx) return localized_basis.payout_per_pip;
        if (is_multiplier) return localized_basis.stake;
        // if (is_accumulator) return '';
        return localized_basis.payout;
    };

    return (
        <p
            className={clsx(
                'purchase-button__information__wrapper',
                is_reverse && 'purchase-button__information__wrapper--reverse'
            )}
        >
            {!is_accumulator && (
                <React.Fragment>
                    <span>{getTextBasis()}</span>
                    <Money
                        amount={amount}
                        currency={currency}
                        should_format={!is_turbos && !is_vanilla}
                        show_currency
                    />
                </React.Fragment>
            )}
        </p>
    );
};

export default PurchaseButtonContent;
