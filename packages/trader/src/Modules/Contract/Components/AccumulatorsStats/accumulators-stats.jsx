import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Icon, Text } from '@deriv/components';
import { isDesktop } from '@deriv/shared';
import { localize } from '@deriv/translations';
import { connect } from 'Stores/connect';
import TicksHistoryCounter from './ticks-history-counter';
import { AccumulatorsStatsManualModal } from './accumulators-stats-manual-modal';
import 'Sass/app/modules/contract/accumulators-stats.scss';

const CONTRACT_TYPES = {
    STAY_IN: 'Stay in',
    BREAK_OUT: 'Break out',
};

const AccumulatorsStats = ({ break_out_history, is_expandable = false, stay_in_history }) => {
    const [is_collapsed, setIsCollapsed] = React.useState(true);
    const [is_manual_open, setIsManualOpen] = React.useState(false);
    const [displayed_contract_name, setDisplayedContractName] = React.useState(CONTRACT_TYPES.STAY_IN);
    const widget_title = localize('{{displayed_contract_name}} history', { displayed_contract_name });
    const ticks_history = displayed_contract_name === CONTRACT_TYPES.STAY_IN ? stay_in_history : break_out_history;

    const rows = ticks_history.reduce((acc, _el, index) => {
        const desktop_row_size = is_collapsed ? 15 : 10;
        const mobile_row_size = is_collapsed ? 6 : 5;
        const row_size = isDesktop() ? desktop_row_size : mobile_row_size;
        if (index % row_size === 0) {
            acc.push(ticks_history.slice(index, index + row_size));
        }
        return acc;
    }, []);

    const handleSwitchBetweenContracts = () => {
        setDisplayedContractName(Object.values(CONTRACT_TYPES).find(name => name !== displayed_contract_name));
    };

    return (
        <div className='ticks-history-stats'>
            <div className={classNames('ticks-history-stats__container--collapsed')}>
                <div className='ticks-history-stats__title'>
                    <AccumulatorsStatsManualModal
                        title={widget_title}
                        icon_classname='info'
                        is_manual_open={is_manual_open}
                        toggleManual={() => setIsManualOpen(!is_manual_open)}
                    />
                    <Text weight='bold' size='xxs'>
                        {widget_title}
                    </Text>
                </div>
                <div className='ticks-history-stats__nav-buttons' onClick={handleSwitchBetweenContracts}>
                    {['IcChevronUpNormal', 'IcChevronDown'].map(icon => (
                        <Icon key={icon} icon={icon} />
                    ))}
                </div>
                <Text size='xxs' className='ticks-history-stats__history'>
                    {is_collapsed ? (
                        rows[0]?.map((el, i) => <TicksHistoryCounter key={i} value={el} has_progress_dots={i === 0} />)
                    ) : (
                        <div className='ticks-history-stats__history-heading'>{localize('Number of ticks')}</div>
                    )}
                </Text>
                {is_expandable && (
                    <Icon
                        icon={is_collapsed ? 'IcArrowUp' : 'IcArrowDown'}
                        onClick={() => setIsCollapsed(!is_collapsed)}
                        className='ticks-history-stats__accordion-toggle-arrow'
                    />
                )}
            </div>
            {is_expandable && !is_collapsed && (
                <Text size='xxs' className='ticks-history-stats__history--expanded'>
                    {rows.map((row, i) => (
                        <div key={i} className='ticks-history-stats__row'>
                            {row.map((el, idx) => (
                                <TicksHistoryCounter key={idx} value={el} has_progress_dots={i === 0 && idx === 0} />
                            ))}
                        </div>
                    ))}
                </Text>
            )}
        </div>
    );
};

AccumulatorsStats.propTypes = {
    break_out_history: PropTypes.array,
    is_expandable: PropTypes.bool,
    stay_in_history: PropTypes.array,
};

export default connect(({ modules }) => ({
    break_out_history: modules.trade.break_out_history,
    stay_in_history: modules.trade.stay_in_history,
}))(AccumulatorsStats);
