import React from 'react';
import clsx from 'clsx';
import { CaptionText } from '@deriv-com/quill-ui';
import { useTraderStore } from 'Stores/useTraderStores';
import { getLocalizedBasis } from '@deriv/shared';
import { Money } from '@deriv/components';

type TPurchaseButtonContent = {
    current_stake?: number | null;
    info: ReturnType<typeof useTraderStore>['proposal_info'][0];
    is_reverse?: boolean;
} & Pick<
    ReturnType<typeof useTraderStore>,
    | 'currency'
    | 'has_open_accu_contract'
    | 'is_accumulator'
    | 'is_multiplier'
    | 'is_vanilla_fx'
    | 'is_vanilla'
    | 'is_turbos'
>;

const PurchaseButtonContent = ({
    currency,
    current_stake,
    has_open_accu_contract,
    info,
    is_accumulator,
    is_multiplier,
    is_turbos,
    is_vanilla,
    is_vanilla_fx,
    is_reverse,
}: TPurchaseButtonContent) => {
    const localized_basis = getLocalizedBasis();

    const getAmount = () => {
        if (is_multiplier) return info.stake;
        if (is_accumulator) return has_open_accu_contract ? Number(current_stake) : info.maximum_payout;
        return info?.obj_contract_basis?.value;
    };
    const getTextBasis = () => {
        if (is_turbos || (is_vanilla && !is_vanilla_fx)) return localized_basis.payout_per_point;
        if (is_vanilla_fx) return localized_basis.payout_per_pip;
        if (is_multiplier) return localized_basis.stake;
        if (is_accumulator) return has_open_accu_contract ? localized_basis.current_stake : localized_basis.max_payout;
        return localized_basis.payout;
    };

    return (
        <CaptionText
            size='sm'
            className={clsx(
                'purchase-button__information__wrapper',
                is_reverse && 'purchase-button__information__wrapper--reverse'
            )}
        >
            <CaptionText as='span' size='sm' className='purchase-button__information__item'>
                {getTextBasis()}
            </CaptionText>
            <CaptionText as='span' size='sm' className='purchase-button__information__item'>
                <Money
                    amount={getAmount()}
                    currency={currency}
                    should_format={!is_turbos && !is_vanilla}
                    show_currency
                />
            </CaptionText>
        </CaptionText>
    );
};

export default PurchaseButtonContent;
