import PropTypes from 'prop-types';
import React from 'react';
import { localize } from '@deriv/translations';
import { Icon, Text } from '@deriv/components';
import Fieldset from 'App/Components/Form/fieldset.jsx';
import { connect } from 'Stores/connect';

const BarriersTable = ({ turbos_barrier_choices }) => {
    //TODO: remove slice after adding scroll
    const barriers_list = turbos_barrier_choices.slice(4).map((barrier, index) => (
        <li key={index} className='trade-container__barriers-table__item'>
            {barrier}
        </li>
    ));
    return (
        <Fieldset className='trade-container__fieldset trade-container__barriers-table'>
            <div className='trade-container__barriers-table__header'>
                <Text color='prominent' weight='bold' size='xs'>
                    {localize('Barriers')}
                </Text>
                <div
                    // id='barriers-table__icon-close'
                    className='trade-container__barriers-table__icon-close'
                    // onClick={toggleBarriersTable}
                >
                    <Icon icon='IcCross' />
                </div>
            </div>
            <div className='trade-container__barriers-table__text'>Distance to spot</div>
            <ul className='trade-container__barriers-table__list'>{barriers_list}</ul>
        </Fieldset>
    );
};

BarriersTable.propTypes = {
    turbos_barrier_choices: PropTypes.arrayOf(PropTypes.string),
};

export default connect(({ modules }) => ({
    turbos_barrier_choices: modules.trade.turbos_barrier_choices,
}))(BarriersTable);
