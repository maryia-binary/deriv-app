import PropTypes from 'prop-types';
import React from 'react';
import { localize } from '@deriv/translations';
import { Icon, Text } from '@deriv/components';
import Fieldset from 'App/Components/Form/fieldset.jsx';
import { connect } from 'Stores/connect';
import { CSSTransition } from 'react-transition-group';

const BarriersTable = ({ is_barriers_table_expanded, turbos_barrier_choices, toggleBarriersTable }) => {
    //TODO: remove slice after adding scroll
    const barriers_list = turbos_barrier_choices.slice(4).map((barrier, index) => (
        <li key={index} className='trade-container__barriers-table__item'>
            {barrier}
        </li>
    ));
    return (
        <CSSTransition
            appear
            in={is_barriers_table_expanded}
            timeout={250}
            classNames={{
                appear: 'trade-container__barriers-table--enter',
                enter: 'trade-container__barriers-table--enter',
                enterDone: 'trade-container__barriers-table--enter-done',
                exit: 'trade-container__barriers-table--exit',
            }}
            unmountOnExit
        >
            <Fieldset className='trade-container__fieldset trade-container__barriers-table'>
                <div className='trade-container__barriers-table__header'>
                    <Text color='prominent' weight='bold' size='xs'>
                        {localize('Barriers')}
                    </Text>
                    <div className='trade-container__barriers-table__icon-close' onClick={toggleBarriersTable}>
                        <Icon icon='IcCross' />
                    </div>
                </div>
                <div className='trade-container__barriers-table__text'>Distance to spot</div>
                <ul className='trade-container__barriers-table__list'>{barriers_list}</ul>
            </Fieldset>
        </CSSTransition>
    );
};

BarriersTable.propTypes = {
    is_barriers_table_expanded: PropTypes.bool,
    turbos_barrier_choices: PropTypes.arrayOf(PropTypes.string),
    toggleBarriersTable: PropTypes.func,
};

export default connect(({ modules }) => ({
    turbos_barrier_choices: modules.trade.turbos_barrier_choices,
}))(BarriersTable);
