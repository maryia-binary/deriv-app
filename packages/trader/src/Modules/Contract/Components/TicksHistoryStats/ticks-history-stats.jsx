import React from 'react';
import classNames from 'classnames';
import { Icon, Text } from '@deriv/components';
import { isDesktop } from '@deriv/shared';
import { localize } from '@deriv/translations';
import { connect } from 'Stores/connect';
import 'Sass/app/modules/contract/ticks-history-stats.scss';

const TickHistoryItem = ({ value }) => {
    return <div className='ticks-history-stats__history-item'>{value}</div>;
};

const CONTRACT_TYPES = {
    STAY_IN: 'Stay in',
    BREAK_OUT: 'Break out',
};

export const TicksHistoryStats = connect(({ modules }) => ({
    break_out_history: modules.trade.break_out_history,
    stay_in_history: modules.trade.stay_in_history,
}))(({ break_out_history, is_trade_page, stay_in_history }) => {
    const [is_collapsed, setIsCollapsed] = React.useState(true);
    const [displayed_contract_name, setDisplayedContractName] = React.useState(CONTRACT_TYPES.STAY_IN);
    const ticks_history = displayed_contract_name === CONTRACT_TYPES.STAY_IN ? stay_in_history : break_out_history;

    const rows = ticks_history.reduce((acc, _el, index) => {
        const contract_replay_row_size = is_collapsed ? 20 : 10;
        const trade_page_row_size = is_collapsed ? 15 : 10;
        const desktop_row_size = is_trade_page ? trade_page_row_size : contract_replay_row_size;
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
            <div
                className={classNames('ticks-history-stats__container', {
                    'ticks-history-stats__container--in-contract-replay': !is_trade_page,
                })}
            >
                <div className='ticks-history-stats__title'>
                    <Icon icon='IcInfoOutline' onClick={() => {}} size={16} className='info' />
                    <Text weight='bold' size='xxs'>
                        {localize('{{displayed_contract_name}} history', { displayed_contract_name })}
                    </Text>
                </div>
                <div className='ticks-history-stats__nav-buttons' onClick={handleSwitchBetweenContracts}>
                    {['IcChevronUpNormal', 'IcChevronDown'].map(icon => (
                        <Icon key={icon} icon={icon} />
                    ))}
                </div>
                <Text size='xxs' className='ticks-history-stats__history'>
                    {is_collapsed ? (
                        rows[0]?.map((el, i) => <TickHistoryItem key={i} value={el} />)
                    ) : (
                        <div className='ticks-history-stats__history-heading'>{localize('Number of ticks')}</div>
                    )}
                </Text>
                <Icon icon={is_collapsed ? 'IcArrowUp' : 'IcArrowDown'} onClick={() => setIsCollapsed(!is_collapsed)} />
            </div>
            {!is_collapsed && (
                <Text size='xxs' className='ticks-history-stats__history--expanded'>
                    {rows.map((row, i) => (
                        <div key={i} className='ticks-history-stats__row'>
                            {row.map((el, idx) => (
                                <TickHistoryItem key={idx} value={el} />
                            ))}
                        </div>
                    ))}
                </Text>
            )}
        </div>
    );
});
