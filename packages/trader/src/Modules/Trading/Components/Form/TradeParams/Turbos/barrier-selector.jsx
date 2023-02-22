import PropTypes from 'prop-types';
import React from 'react';
import { localize } from '@deriv/translations';
import { connect } from 'Stores/connect';
import { CSSTransition } from 'react-transition-group';
import { Icon, Text, ThemedScrollbars } from '@deriv/components';
import Fieldset from 'App/Components/Form/fieldset.jsx';
import BarriersList from './barriers-list.jsx';

const BarrierSelector = ({ barrier_1, onChange, setHoveredBarrier, turbos_barrier_choices }) => {
    const [selected_barrier, setSelectedBarrier] = React.useState(barrier_1);
    const [is_barriers_table_expanded, setIsBarriersTableExpanded] = React.useState(false);

    const header_tooltip_text = (
        <React.Fragment>
            <Text size='xxs' as='p' className='trade-container__barriers-tooltip'>
                <Text size='xxs' weight='bold'>
                    {localize('For Long: ')}
                </Text>
                {localize(
                    "You will earn profit if the market stays above the entry spot and doesn't cross the barrier."
                )}
            </Text>
            <Text size='xxs' as='p'>
                <Text size='xxs' weight='bold'>
                    {localize('For Short: ')}
                </Text>
                {localize(
                    "You will earn profit if the market stays below the entry spot and doesn't cross the barrier."
                )}
            </Text>
        </React.Fragment>
    );

    const toggleBarriersTable = () => setIsBarriersTableExpanded(!is_barriers_table_expanded);

    const changeBarrier = id => {
        setHoveredBarrier(null);
        setSelectedBarrier(id);
        onChange({
            target: {
                name: 'barrier_1',
                value: id,
            },
        });
    };

    const onMouseEnter = id => setHoveredBarrier(id);

    const onMouseLeave = () => setHoveredBarrier(null);

    React.useEffect(() => setSelectedBarrier(barrier_1), [barrier_1]);

    return (
        <React.Fragment>
            {is_barriers_table_expanded && (
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
                                base_classname='trade-container__barriers-table__item'
                                active_item_classname='trade-container__barriers-table__item--selected'
                                className='trade-container__barriers-table__list'
                                list={turbos_barrier_choices}
                                selected_item={selected_barrier}
                                onClickCb={changeBarrier}
                                onMouseLeaveCb={onMouseLeave}
                                onMouseEnterCb={onMouseEnter}
                                hover_item_classname='trade-container__barriers-table__item--highlight'
                            />
                        </ThemedScrollbars>
                    </Fieldset>
                </CSSTransition>
            )}
            <Fieldset
                className='trade-container__fieldset trade-container__barriers'
                header={localize('Barrier')}
                is_center
                header_tooltip={header_tooltip_text}
            >
                <div onClick={toggleBarriersTable} className='trade-container__barriers__wrapper'>
                    <div className='trade-container__barriers-spot'>{localize('Spot')}</div>
                    <div className='trade-container__barriers-value'>{barrier_1}</div>
                </div>
            </Fieldset>
        </React.Fragment>
    );
};
BarrierSelector.propTypes = {
    barrier_1: PropTypes.string,
    onChange: PropTypes.func,
    setHoveredBarrier: PropTypes.func,
    turbos_barrier_choices: PropTypes.arrayOf(PropTypes.string),
};

export default connect(({ modules }) => ({
    barrier_1: modules.trade.barrier_1,
    onChange: modules.trade.onChange,
    setHoveredBarrier: modules.trade.setHoveredBarrier,
    turbos_barrier_choices: modules.trade.turbos_barrier_choices,
}))(BarrierSelector);
