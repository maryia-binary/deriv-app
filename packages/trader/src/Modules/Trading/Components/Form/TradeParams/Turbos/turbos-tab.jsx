import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToggle } from '@deriv/components';
import { localize } from '@deriv/translations';
import { connect } from 'Stores/connect';

const TurbosTab = ({ className, onChange }) => {
    const [selectedValue, setSelectedValue] = React.useState(
        // {
        // name: localize('Long'),
        // value: 'turboslong',
        // }
        ''
    );
    const expiry_list = [
        {
            text: localize('Long'),
            value: 'turboslong',
        },
        {
            text: localize('Short'),
            value: 'turbosshort',
        },
    ];
    const onChanges = e => {
        if (e.target.value !== selectedValue.value) {
            const name = 'contract_type';
            const result = expiry_list.find(exp => exp.value === e.target.value);
            setSelectedValue(prevState => ({
                ...prevState,
                name: result ? result.text : e.target.name,
                value: e.target.value,
            }));
            onChange({ target: { name, value: selectedValue.value || e.target.value } });
        }
    };

    return (
        <div className={classNames('trade-container__tabs', className)}>
            <ButtonToggle
                id='dt_advanced_duration_toggle'
                buttons_arr={expiry_list}
                name={'contract_type'}
                is_animated={true}
                onChange={e => onChanges(e)}
                value={selectedValue.value}
            />
        </div>
    );
};

TurbosTab.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
};

export default connect(({ modules }) => ({
    onChange: modules.trade.onChange,
}))(TurbosTab);
