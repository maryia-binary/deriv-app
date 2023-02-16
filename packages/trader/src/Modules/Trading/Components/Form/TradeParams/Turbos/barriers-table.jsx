import PropTypes from 'prop-types';
import React from 'react';
import { localize } from '@deriv/translations';
import { connect } from 'Stores/connect';
import { CSSTransition } from 'react-transition-group';
import { Icon, Text, ThemedScrollbars } from '@deriv/components';
import Fieldset from 'App/Components/Form/fieldset.jsx';
import BarriersList from './barriers-list.jsx';

const BarriersTable = ({
    barrier_1,
    onChange,
    setHoveredBarrier,
    is_barriers_table_expanded,
    turbos_barrier_choices,
    toggleBarriersTable,
}) => {
    const [chosen_barrier, setChosenBarrier] = React.useState(barrier_1);

    const changeBarrier = e => {
        if (e.target.id) {
            e.stopPropagation();
            setHoveredBarrier(null);
            setChosenBarrier(e.target.id);
            onChange({
                target: {
                    name: 'barrier_1',
                    value: e.target.id,
                },
            });
        }
    };

    const onMouseOver = e => {
        e.stopPropagation();
        if (e.target.id && chosen_barrier !== e.target.id) {
            setHoveredBarrier(e.target.id);
        }
    };

    const onMouseOut = e => {
        e.stopPropagation();
        setHoveredBarrier(null);
    };

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
                <ThemedScrollbars>
                    <BarriersList
                        base_class_name='trade-container__barriers-table__item'
                        active_item_class_name='trade-container__barriers-table__item--selected'
                        className='trade-container__barriers-table__list'
                        list={turbos_barrier_choices}
                        chosen_item={chosen_barrier}
                        onClick={changeBarrier}
                        onMouseOut={onMouseOut}
                        onMouseOver={onMouseOver}
                        hover_item_class_name='trade-container__barriers-table__item--highlight'
                    />
                </ThemedScrollbars>
            </Fieldset>
        </CSSTransition>
    );
};

BarriersTable.propTypes = {
    barrier_1: PropTypes.string,
    onChange: PropTypes.func,
    setHoveredBarrier: PropTypes.func,
    is_barriers_table_expanded: PropTypes.bool,
    turbos_barrier_choices: PropTypes.arrayOf(PropTypes.string),
    toggleBarriersTable: PropTypes.func,
};

export default connect(({ modules }) => ({
    barrier_1: modules.trade.barrier_1,
    onChange: modules.trade.onChange,
    setHoveredBarrier: modules.trade.setHoveredBarrier,
    turbos_barrier_choices: modules.trade.turbos_barrier_choices,
}))(BarriersTable);
