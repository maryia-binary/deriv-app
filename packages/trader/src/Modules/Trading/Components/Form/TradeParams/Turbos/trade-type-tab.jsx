import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToggle } from '@deriv/components';
import { localize } from '@deriv/translations';
import { connect } from 'Stores/connect';

const TradeTypeTab = ({ className, onChange }) => {
    const [selectedValue, setSelectedValue] = React.useState('');
    const tab_list = [
        { text: localize('Long'), value: 'turboslong' },
        { text: localize('Short'), value: 'turbosshort' },
    ];

    const onTabChange = e => {
        if (e.target.value !== selectedValue.value) {
            const name = 'contract_type';
            const result = tab_list.find(res => res.value === e.target.value);
            setSelectedValue(prevState => ({
                ...prevState,
                name: result ? result.text : e.target.name,
                value: e.target.value,
            }));
            onChange({ target: { name, value: e.target.value } });
        }
    };

    return (
        <div className={classNames('trade-container__trade-type-tab', className)}>
            <ButtonToggle
                id='dt_advanced_duration_toggle'
                buttons_arr={tab_list}
                name={'contract_type'}
                is_animated={true}
                onChange={e => onTabChange(e)}
                value={selectedValue.value}
            />
        </div>
    );
};

TradeTypeTab.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
};

export default connect(({ modules }) => ({
    onChange: modules.trade.onChange,
}))(TradeTypeTab);
