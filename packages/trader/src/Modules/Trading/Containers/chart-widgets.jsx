import React from 'react';
import { isDesktop, isMobile } from '@deriv/shared';
import Digits from 'Modules/Contract/Components/Digits';
import { connect } from 'Stores/connect';
import BottomWidgets from '../../SmartChart/Components/bottom-widgets.jsx';
import ControlWidgets from '../../SmartChart/Components/control-widgets.jsx';
import TopWidgets from '../../SmartChart/Components/top-widgets.jsx';
import { symbolChange } from '../../SmartChart/Helpers/symbol';
import { Text } from '@deriv/components';
import { localize } from '@deriv/translations';

const DIRECTIONS = {
    UP: 'up',
    DOWN: 'down',
};

// draft widget:
export const TicksHistoryStatsWidget = connect(({ modules }) => ({
    ticks_history_stats: modules.trade.ticks_history_stats,
}))(({ ticks_history_stats, is_trade_page }) => {
    const [is_collapsed, setIsCollapsed] = React.useState(true);
    const [displayed_row_index, setDisplayedRowIndex] = React.useState(0);

    const rows = ticks_history_stats.reduce((acc, _el, index) => {
        const contract_replay_row_size = is_collapsed ? 20 : 10;
        const trade_page_row_size = is_collapsed ? 15 : 10;
        const desktop_row_size = is_trade_page ? trade_page_row_size : contract_replay_row_size;
        const mobile_row_size = is_collapsed ? 6 : 5;
        const row_size = isDesktop() ? desktop_row_size : mobile_row_size;
        if (index % row_size === 0) {
            acc.push(ticks_history_stats.slice(index, index + row_size));
        }
        return acc;
    }, []);

    const onScrollHistory = direction => {
        const next_index = direction === DIRECTIONS.UP ? displayed_row_index - 1 : displayed_row_index + 1;
        if (next_index >= 0 && rows[next_index]) setDisplayedRowIndex(next_index);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex' }}>
                <Text size='xxs'>(i) Stay in history</Text>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {[
                        { name: DIRECTIONS.UP, icon: '^' },
                        { name: DIRECTIONS.DOWN, icon: '˅' },
                    ].map(({ name, icon }) => (
                        <button key={name} onClick={is_collapsed && (() => onScrollHistory(name))}>
                            {icon}
                        </button>
                    ))}
                </div>
                <div style={{ width: '50%' }}>
                    {is_collapsed
                        ? rows[displayed_row_index]?.map((el, i) => (
                              <Text key={i} size='xxs'>
                                  {el}{' '}
                              </Text>
                          ))
                        : localize('Number of ticks')}
                </div>
                <button onClick={() => setIsCollapsed(!is_collapsed)}>{is_collapsed ? '↑' : '↓'}</button>
            </div>
            {!is_collapsed && (
                <div>
                    {rows.map((row, i) => (
                        <div key={i}>
                            {row.map((el, idx) => (
                                <Text key={idx} size='xxs'>
                                    {el}{' '}
                                </Text>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
});

export const DigitsWidget = connect(({ modules, contract_trade }) => ({
    contract_info: contract_trade.last_contract.contract_info || {},
    digits_info: contract_trade.last_contract.digits_info || {},
    display_status: contract_trade.last_contract.display_status,
    is_digit_contract: contract_trade.last_contract.is_digit_contract,
    is_ended: contract_trade.last_contract.is_ended,
    selected_digit: modules.trade.last_digit,
    onDigitChange: modules.trade.onChange,
    underlying: modules.trade.symbol,
    trade_type: modules.trade.contract_type,
}))(
    ({
        contract_info,
        digits,
        digits_info,
        display_status,
        is_digit_contract,
        is_ended,
        onDigitChange,
        selected_digit,
        tick,
        trade_type,
        underlying,
    }) => (
        <Digits
            contract_info={contract_info}
            digits_array={digits}
            digits_info={digits_info}
            display_status={display_status}
            is_digit_contract={is_digit_contract}
            is_ended={is_ended}
            onDigitChange={onDigitChange}
            is_trade_page
            tick={tick}
            trade_type={trade_type}
            selected_digit={selected_digit}
            underlying={underlying}
        />
    )
);

// Chart widgets passed into SmartCharts
export const ChartTopWidgets = connect(({ modules, ui }) => ({
    onSymbolChange: modules.trade.onChange,
    theme: ui.is_dark_mode_on ? 'dark' : 'light',
}))(({ onSymbolChange, charts_ref, theme, is_digits_widget_active, open_market, open }) => {
    let yAxiswidth;
    if (charts_ref && charts_ref.chart) {
        yAxiswidth = charts_ref.chart.yAxiswidth;
    }
    return (
        <TopWidgets
            open_market={open_market}
            open={open}
            is_mobile={isMobile()}
            is_digits_widget_active={is_digits_widget_active}
            onSymbolChange={symbolChange(onSymbolChange)}
            theme={theme}
            y_axis_width={yAxiswidth}
        />
    );
});

export const ChartBottomWidgets = ({ digits, tick, show_accumulators_stats, is_trade_page }) =>
    show_accumulators_stats ? (
        <BottomWidgets Widget={<TicksHistoryStatsWidget is_trade_page={is_trade_page} />} />
    ) : (
        <BottomWidgets Widget={<DigitsWidget digits={digits} tick={tick} />} />
    );

export const ChartControlWidgets = connect(({ contract_trade }) => ({
    updateChartType: contract_trade.updateChartType,
    updateGranularity: contract_trade.updateGranularity,
}))(({ updateChartType, updateGranularity }) => (
    <ControlWidgets updateChartType={updateChartType} updateGranularity={updateGranularity} />
));
