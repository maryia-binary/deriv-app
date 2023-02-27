import PropTypes from 'prop-types';
import React from 'react';
import { Localize, localize } from '@deriv/translations';
import { connect } from 'Stores/connect';
import { CSSTransition } from 'react-transition-group';
import { Button, Icon, MobileDialog, Text, ThemedScrollbars, Popover } from '@deriv/components';
import { isMobile } from '@deriv/shared';
import Fieldset from 'App/Components/Form/fieldset.jsx';
import BarriersList from './barriers-list.jsx';

const BarrierSelector = ({ barrier_1, onChange, setHoveredBarrier, turbos_barrier_choices }) => {
    const [selected_barrier, setSelectedBarrier] = React.useState(barrier_1);
    const [is_barriers_table_expanded, setIsBarriersTableExpanded] = React.useState(false);
    const [is_mobile_tooltip_visible, setIsMobileTooltipVisible] = React.useState(false);
    const [is_button_blocked, setIsButtonBlocked] = React.useState(true);

    const toggleMobileTooltip = () => setIsMobileTooltipVisible(!is_mobile_tooltip_visible);

    const toggleBarriersTable = () => {
        setIsButtonBlocked(true);
        setIsMobileTooltipVisible(false);
        setIsBarriersTableExpanded(!is_barriers_table_expanded);
        setSelectedBarrier(barrier_1);
    };

    const onBarrierClick = barrier => {
        setHoveredBarrier(null);
        setSelectedBarrier(barrier);
        setIsButtonBlocked(barrier === barrier_1);
        if (!isMobile()) {
            onChange({
                target: {
                    name: 'barrier_1',
                    value: barrier,
                },
            });
        }
    };

    const onButtonClick = () => {
        setIsButtonBlocked(true);
        onChange({
            target: {
                name: 'barrier_1',
                value: selected_barrier,
            },
        });
    };

    React.useEffect(() => {
        setSelectedBarrier(barrier_1);
    }, [barrier_1]);

    const header_tooltip_text = (
        <React.Fragment>
            <div className='trade-container__barriers-tooltip'>
                <Localize
                    i18n_default_text="<0>For Long: </0>You will earn profit if the market stays above the entry spot and doesn't cross the barrier."
                    components={[<Text key={0} weight='bold' size='xxs' />]}
                />
            </div>
            <Localize
                i18n_default_text="<0>For Short: </0>You will earn profit if the market stays below the entry spot and doesn't cross the barrier."
                components={[<Text key={0} weight='bold' size='xxs' />]}
            />
        </React.Fragment>
    );

    const header_mobile = (
        <div className='trade-container__barriers-table__header-tooltip'>
            <div>{localize('Barriers')}</div>
            <Popover
                alignment='bottom'
                icon='info'
                is_bubble_hover_enabled
                zIndex={9999}
                message={header_tooltip_text}
                is_open={is_mobile_tooltip_visible}
                onClick={toggleMobileTooltip}
            />
        </div>
    );

    const barriers_list = (
        <React.Fragment>
            <div className='trade-container__barriers-table__text'>Distance to spot</div>
            <ThemedScrollbars height={isMobile() ? 'calc(100% - 5.5rem)' : null} autohide={false}>
                <BarriersList
                    base_classname='trade-container__barriers-table__item'
                    active_item_classname='trade-container__barriers-table__item--selected'
                    className='trade-container__barriers-table__list'
                    list={turbos_barrier_choices}
                    selected_item={selected_barrier}
                    onClick={onBarrierClick}
                    onHover={barrier => setHoveredBarrier(barrier)}
                />
            </ThemedScrollbars>
        </React.Fragment>
    );

    const footer_mobile = (
        <div className='trade-container__barriers__footer'>
            <Button
                className='trade-container__barriers__footer__button'
                type='submit'
                data-testid={'submit-button'}
                has_effect
                text={localize('Select barrier')}
                large
                primary
                is_disabled={is_button_blocked}
                onClick={onButtonClick}
            />
        </div>
    );

    return isMobile() ? (
        <React.Fragment>
            <div className='mobile-widget' onClick={toggleBarriersTable}>
                <div className='mobile-widget__spot'>{localize('Spot')}</div>
                <div className='mobile-widget__barriers-value'>{barrier_1}</div>
                <div className='mobile-widget__barrier'>{localize('Barrier')}</div>
            </div>
            <MobileDialog
                title={header_mobile}
                onClose={toggleBarriersTable}
                has_content_scroll={true}
                portal_element_id='modal_root'
                wrapper_classname='contracts-modal-list'
                visible={is_barriers_table_expanded}
                footer={footer_mobile}
                header_classname='trade-container__barriers-table__header'
            >
                {barriers_list}
            </MobileDialog>
        </React.Fragment>
    ) : (
        <React.Fragment>
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
                        {barriers_list}
                    </Fieldset>
                </CSSTransition>
            )}
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
