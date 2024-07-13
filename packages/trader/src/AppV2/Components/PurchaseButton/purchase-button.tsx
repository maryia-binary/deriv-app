import React from 'react';
import clsx from 'clsx';
import { observer } from 'mobx-react';
import { useTraderStore } from 'Stores/useTraderStores';
import { Button } from '@deriv-com/quill-ui';
import { getContractTypeDisplay, isEmptyObject } from '@deriv/shared';
import PurchaseButtonContent from './purchase-button-content';
import { TTradeStore } from 'Types';

const PurchaseButton = observer(() => {
    // const {
    //     portfolio: { all_positions, onClickSell },
    //     ui: { purchase_states: purchased_states_arr, is_mobile, setPurchaseState },
    // } = useStore();
    const {
        contract_type,
        currency,
        // growth_rate,
        // has_cancellation,
        // has_open_accu_contract,
        is_accumulator,
        is_multiplier,
        is_purchase_enabled,
        is_trade_enabled,
        is_turbos,
        is_vanilla_fx,
        is_vanilla,
        // onHoverPurchase,
        // onPurchase: onClickPurchase,
        proposal_info,
        // purchase_info,
        // symbol,
        trade_types,
        validation_errors,
    } = useTraderStore();
    //TODO: add error handling when design will be ready
    const is_high_low = /^high_low$/.test(contract_type.toLowerCase());
    const is_proposal_empty = isEmptyObject(proposal_info);
    const is_disabled = !is_trade_enabled || !is_purchase_enabled || is_proposal_empty;
    const purchase_button_content_props = {
        contract_type,
        currency,
        is_accumulator,
        is_multiplier,
        is_turbos,
        is_vanilla_fx,
        is_vanilla,
    };
    const trade_types_array = Object.keys(trade_types);

    const isLoading = (info: TTradeStore['proposal_info'][string]) => {
        const has_validation_error = Object.values(validation_errors).some(e => e.length);
        return !has_validation_error && !info?.has_error && !info.id;
    };

    if (trade_types_array.length === 1) {
        const info = proposal_info?.[trade_types_array[0]] || {};
        const is_loading = isLoading(info);

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
                    isLoading={is_loading}
                    disabled={(is_disabled || !info.id) && !is_loading}
                >
                    {!is_loading && <PurchaseButtonContent {...purchase_button_content_props} info={info} />}
                </Button>
            </div>
        );
    }

    return (
        <div className='purchase-button__wrapper'>
            {trade_types_array.map((trade_type, index) => {
                const info = proposal_info?.[trade_type] || {};
                const is_loading = isLoading(info);

                return (
                    <Button
                        key={trade_type}
                        color={index ? 'purchase' : 'sell'}
                        size='lg'
                        label={getContractTypeDisplay(trade_type, { isHighLow: is_high_low, showButtonName: true })}
                        fullWidth
                        className={clsx('purchase-button', is_loading && 'purchase-button--loading')}
                        isLoading={is_loading}
                        disabled={(is_disabled || !info.id) && !is_loading}
                    >
                        {!is_loading && (
                            <PurchaseButtonContent
                                {...purchase_button_content_props}
                                info={info}
                                is_reverse={!!index}
                            />
                        )}
                    </Button>
                );
            })}
        </div>
    );
});

export default PurchaseButton;
