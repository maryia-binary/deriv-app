import PropTypes from 'prop-types';
import React from 'react';
import { isAccumulatorContract, isEmptyObject } from '@deriv/shared';
import { localize } from '@deriv/translations';
import PurchaseButtonsOverlay from 'Modules/Trading/Components/Elements/purchase-buttons-overlay.jsx';
import PurchaseFieldset from 'Modules/Trading/Components/Elements/purchase-fieldset.jsx';
import { getContractTypePosition } from 'Constants/contract';
import { connect } from 'Stores/connect';

const Purchase = ({
    active_positions,
    basis,
    contract_type,
    currency,
    has_cancellation,
    is_accumulator,
    is_market_closed,
    is_mobile,
    is_multiplier,
    is_purchase_enabled,
    is_trade_enabled,
    is_turbos,
    is_vanilla,
    onClickPurchase,
    onHoverPurchase,
    proposal_info,
    purchase_info,
    purchased_states_arr,
    setPurchaseState,
    symbol,
    trade_types,
    validation_errors,
    vanilla_trade_type,
}) => {
    const is_high_low = /^high_low$/.test(contract_type.toLowerCase());
    const isLoading = info => {
        const has_validation_error = Object.values(validation_errors).some(e => e.length);
        return !has_validation_error && !info.has_error && !info.id;
    };
    const is_proposal_empty = isEmptyObject(proposal_info);
    const components = [];
    Object.keys(trade_types).map((type, index) => {
        const getSortedIndex = () => {
            if (getContractTypePosition(type) === 'top') return 0;
            if (getContractTypePosition(type) === 'bottom') return 1;
            return index;
        };
        const info = proposal_info[type] || {};
        const is_disabled = !is_trade_enabled || !info.id || !is_purchase_enabled;
        const is_proposal_error =
            is_multiplier || (is_accumulator && !is_mobile) ? info.has_error && !!info.message : info.has_error;
        const purchase_fieldset = (
            <PurchaseFieldset
                basis={basis}
                buy_info={purchase_info}
                currency={currency}
                info={info}
                key={index}
                index={getSortedIndex(index, type)}
                has_cancellation={has_cancellation}
                is_accumulator={is_accumulator}
                is_disabled={is_disabled}
                is_high_low={is_high_low}
                is_loading={isLoading(info)}
                is_market_closed={is_market_closed}
                is_mobile={is_mobile}
                is_multiplier={is_multiplier}
                is_turbos={is_turbos}
                is_vanilla={is_vanilla}
                is_proposal_empty={is_proposal_empty}
                is_proposal_error={is_proposal_error}
                purchased_states_arr={purchased_states_arr}
                onHoverPurchase={onHoverPurchase}
                onClickPurchase={onClickPurchase}
                setPurchaseState={setPurchaseState}
                type={type}
            />
        );

        if (!is_vanilla) {
            switch (getContractTypePosition(type)) {
                case 'top':
                    components.unshift(purchase_fieldset);
                    break;
                case 'bottom':
                    components.push(purchase_fieldset);
                    break;
                default:
                    components.push(purchase_fieldset);
                    break;
            }
        } else if (vanilla_trade_type === type) {
            components.push(purchase_fieldset);
        }
    });

    const should_disable_accu_purchase =
        is_accumulator &&
        !!active_positions.find(
            ({ contract_info, type }) => isAccumulatorContract(type) && contract_info.underlying === symbol
        );

    if (should_disable_accu_purchase) {
        components.unshift(
            <PurchaseButtonsOverlay
                is_to_cover_one_button={components.length === 1}
                key='overlay'
                message={localize('You can only purchase one contract at a time')}
            />
        );
    }
    return components;
};

Purchase.propTypes = {
    active_positions: PropTypes.array,
    basis: PropTypes.string,
    currency: PropTypes.string,
    has_cancellation: PropTypes.bool,
    is_accumulator: PropTypes.bool,
    is_multiplier: PropTypes.bool,
    is_mobile: PropTypes.bool,
    is_purchase_locked: PropTypes.bool,
    is_trade_enabled: PropTypes.bool,
    is_turbos: PropTypes.bool,
    onClickPurchase: PropTypes.func,
    onHoverPurchase: PropTypes.func,
    proposal_info: PropTypes.object,
    purchase_info: PropTypes.object,
    purchased_states_arr: PropTypes.array,
    setPurchaseState: PropTypes.func,
    symbol: PropTypes.string,
    trade_types: PropTypes.object,
    validation_errors: PropTypes.object,
};

export default connect(({ modules, portfolio, ui }) => ({
    active_positions: portfolio.active_positions,
    basis: modules.trade.basis,
    contract_type: modules.trade.contract_type,
    currency: modules.trade.currency,
    has_cancellation: modules.trade.has_cancellation,
    is_accumulator: modules.trade.is_accumulator,
    is_multiplier: modules.trade.is_multiplier,
    is_purchase_enabled: modules.trade.is_purchase_enabled,
    is_trade_enabled: modules.trade.is_trade_enabled,
    is_turbos: modules.trade.is_turbos,
    is_vanilla: modules.trade.is_vanilla,
    onClickPurchase: modules.trade.onPurchase,
    onHoverPurchase: modules.trade.onHoverPurchase,
    proposal_info: modules.trade.proposal_info,
    purchase_info: modules.trade.purchase_info,
    symbol: modules.trade.symbol,
    trade_types: modules.trade.trade_types,
    validation_errors: modules.trade.validation_errors,
    vanilla_trade_type: modules.trade.vanilla_trade_type,
    is_mobile: ui.is_mobile,
    purchased_states_arr: ui.purchase_states,
    setPurchaseState: ui.setPurchaseState,
}))(Purchase);
