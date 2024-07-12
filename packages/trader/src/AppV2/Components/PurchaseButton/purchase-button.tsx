import React from 'react';
import clsx from 'clsx';
import { Button } from '@deriv-com/quill-ui';
import { localize } from '@deriv/translations';
import { observer } from 'mobx-react';
// import { useStore } from '@deriv/stores';
import { useTraderStore } from 'Stores/useTraderStores';
import { getContractTypeDisplay } from '@deriv/shared';

const PurchaseButton = observer(() => {
    // const {
    //     portfolio: { all_positions, onClickSell },
    //     ui: { purchase_states: purchased_states_arr, is_mobile, setPurchaseState },
    // } = useStore();
    const {
        // basis,
        contract_type,
        // currency,
        // growth_rate,
        // has_cancellation,
        // has_open_accu_contract,
        // is_accumulator,
        // is_multiplier,
        // is_purchase_enabled,
        // is_trade_enabled,
        // is_turbos,
        // is_vanilla_fx,
        // is_vanilla,
        // onHoverPurchase,
        // onPurchase: onClickPurchase,
        // proposal_info,
        // purchase_info,
        // symbol,
        trade_types,
        // validation_errors,
    } = useTraderStore();

    const is_high_low = /^high_low$/.test(contract_type.toLowerCase());
    const trade_types_array = Object.keys(trade_types);

    if (trade_types_array.length === 1) {
        return (
            <div className='purchase-button__wrapper'>
                <Button
                    color='purchase'
                    size='lg'
                    label={getContractTypeDisplay(trade_types_array[0], {
                        isHighLow: is_high_low,
                        showButtonName: true,
                    })}
                    fullWidth
                    className='purchase-button purchase-button--single'
                >
                    <p className='purchase-button__information__wrapper purchase-button__information__wrapper--single'>
                        <span>{localize('Payout')}</span>
                        <span>19.55 USD</span>
                    </p>
                </Button>
            </div>
        );
    }

    return (
        <div className='purchase-button__wrapper'>
            {trade_types_array.map((trade_type, index) => (
                <Button
                    key={trade_type}
                    color={index ? 'purchase' : 'sell'}
                    size='lg'
                    label={getContractTypeDisplay(trade_type, { isHighLow: is_high_low, showButtonName: true })}
                    fullWidth
                    className='purchase-button'
                >
                    <p
                        className={clsx(
                            'purchase-button__information__wrapper',
                            index && 'purchase-button__information__wrapper--reverse'
                        )}
                    >
                        <span>{localize('Payout')}</span>
                        <span>19.55 USD</span>
                    </p>
                </Button>
            ))}
        </div>
    );
});

export default PurchaseButton;
