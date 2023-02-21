import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToggle } from '@deriv/components';
import { localize } from '@deriv/translations';
// import { connect } from 'Stores/connect';

const TurbosTab = ({ className }) => {
    const [selectedValue, setSelectedValue] = React.useState({
        name: localize('Long'),
        value: 'long',
    });
    const expiry_list = [
        {
            text: localize('Long'),
            value: 'long',
        },
        {
            text: localize('Short'),
            value: 'short',
        },
    ];
    const onChange = e => {
        if (e.target.value !== selectedValue.value) {
            const result = expiry_list.find(exp => exp.value === e.target.value);
            setSelectedValue(prevState => ({
                ...prevState,
                name: result ? result.text : e.target.name,
                value: e.target.value,
            }));
        }
    };

    return (
        <div className={classNames('trade-container__tabs', className)}>
            <ButtonToggle
                id='dt_advanced_duration_toggle'
                buttons_arr={expiry_list}
                name={selectedValue.name}
                is_animated={true}
                onChange={e => onChange(e)}
                value={selectedValue.value}
            />
        </div>
    );
};

TurbosTab.propTypes = {
    className: PropTypes.string,
};

// export default connect(({ modules }) => ({
//     currency: modules.trade.currency,
// }))(TurbosTab);

export default TurbosTab;
