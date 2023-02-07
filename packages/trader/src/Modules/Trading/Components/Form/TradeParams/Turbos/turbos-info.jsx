import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Money, Text } from '@deriv/components';
import { Localize } from '@deriv/translations';
import { connect } from 'Stores/connect';

const TurbosInfo = ({ min_stack = 1, className, currency, has_stop_loss, max_stack = 100 }) => {
    const min_stake_text = (
        <Text
            as='p'
            line_height='s'
            size='xxxs'
            className={classNames({
                [`${className}-tooltip-text`]: className,
            })}
        >
            <Localize
                i18n_default_text='Min. stake <0/>'
                components={[<Money key={0} amount={min_stack} currency={currency} show_currency />]}
            />
        </Text>
    );

    const max_stake_text = (
        <Text
            as='p'
            line_height='s'
            size='xxxs'
            className={classNames({
                [`${className}-tooltip-text`]: className,
            })}
        >
            <Localize
                i18n_default_text='Max. stake <0/>'
                components={[<Money key={0} amount={max_stack} currency={currency} show_currency />]}
            />
        </Text>
    );

    return (
        <div className={classNames('turbos-trade-info', className)}>
            {min_stake_text}
            {!has_stop_loss && max_stake_text}
        </div>
    );
};

TurbosInfo.propTypes = {
    amount: PropTypes.number,
    className: PropTypes.string,
    currency: PropTypes.string,
    has_stop_loss: PropTypes.bool,
    max_stack: PropTypes.number,
    min_stack: PropTypes.number,
};

export default connect(({ modules }, props) => ({
    amount: props.amount ?? modules.trade.amount,
    currency: modules.trade.currency,
    has_stop_loss: modules.trade.has_stop_loss,
    max_stack: props.max_stack ?? modules.trade.max_stack,
    min_stack: props.min_stack ?? modules.trade.min_stack,
}))(TurbosInfo);
