import PropTypes from 'prop-types';
import React from 'react';
import { MobileWrapper } from '@deriv/components';
import { Input } from '../amount.jsx';
import Fieldset from 'App/Components/Form/fieldset.jsx';
import { connect } from 'Stores/connect';
import { localize } from '@deriv/translations';

const AccumulatorsAmountMobile = ({
    amount,
    currency,
    current_focus,
    is_nativepicker,
    is_single_currency,
    onChange,
    setCurrentFocus,
    validation_errors,
}) => {
    const error_messages = validation_errors.amount;
    return (
        <React.Fragment>
            <MobileWrapper>
                <div className='barrier__widget'>
                    <Fieldset className='barrier__fields'>
                        <Input
                            amount={amount}
                            currency={currency}
                            current_focus={current_focus}
                            error_messages={error_messages}
                            is_single_currency={is_single_currency}
                            is_nativepicker={is_nativepicker}
                            onChange={onChange}
                            setCurrentFocus={setCurrentFocus}
                        />
                    </Fieldset>
                    <h2 className='barrier__widget-title'>{localize('Stake')}</h2>
                </div>
            </MobileWrapper>
        </React.Fragment>
    );
};

AccumulatorsAmountMobile.propTypes = {
    amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    currency: PropTypes.string,
    current_focus: PropTypes.string,
    is_nativepicker: PropTypes.bool,
    is_single_currency: PropTypes.bool,
    onChange: PropTypes.func,
    setCurrentFocus: PropTypes.func,
    validation_errors: PropTypes.object,
};

export default connect(({ modules, client, ui }) => ({
    amount: modules.trade.amount,
    currency: modules.trade.currency,
    current_focus: ui.current_focus,
    is_single_currency: client.is_single_currency,
    onChange: modules.trade.onChange,
    setCurrentFocus: ui.setCurrentFocus,
    validation_errors: modules.trade.validation_errors,
}))(AccumulatorsAmountMobile);
