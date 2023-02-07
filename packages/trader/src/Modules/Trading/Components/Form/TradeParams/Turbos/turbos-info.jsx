import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Money, Text } from '@deriv/components';
import { Localize } from '@deriv/translations';
import { connect } from 'Stores/connect';

const TurbosInfo = ({ className, currency, has_stop_loss, max_stake = 100, min_stake = 1 }) => {
    const getTextForStake = (text, amount_of_stake) => (
        <Text
            as='p'
            line_height='s'
            size='xxxs'
            className={classNames({
                [`${className}-tooltip-text`]: className,
            })}
        >
            <Localize
                i18n_default_text={text}
                components={[<Money key={0} amount={amount_of_stake} currency={currency} show_currency />]}
            />
        </Text>
    );

    return (
        <div className={classNames('turbos-trade-info', className)}>
            {getTextForStake('Min. stake <0/>', min_stake)}
            {!has_stop_loss && getTextForStake('Max. stake <0/>', max_stake)}
        </div>
    );
};

TurbosInfo.propTypes = {
    amount: PropTypes.number,
    className: PropTypes.string,
    currency: PropTypes.string,
    has_stop_loss: PropTypes.bool,
    max_stake: PropTypes.number,
    min_stake: PropTypes.number,
};

export default connect(({ modules }, props) => ({
    amount: props.amount ?? modules.trade.amount,
    currency: modules.trade.currency,
    has_stop_loss: modules.trade.has_stop_loss,
    max_stake: props.max_stake ?? modules.trade.max_stake,
    min_stake: props.min_stake ?? modules.trade.min_stake,
}))(TurbosInfo);
