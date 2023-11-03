// @ts-nocheck
import React from 'react';
import { isDesktop } from '@deriv/shared';
import { ChartBottomWidgets } from './contract-replay-widget.jsx';
import { observer, useStore } from '@deriv/stores';
import { useTraderStore } from 'Stores/useTraderStores';
import SmartChartSwitcher from './smart-chart-switcher.jsx';
import AccumulatorsChartElements from '../../SmartChart/Components/Markers/accumulators-chart-elements';
import ToolbarWidgets from '../../SmartChart/Components/toolbar-widgets.jsx';
import ToolbarWidgetsBeta from '../../SmartChartBeta/Components/toolbar-widgets.jsx';

const SmartChartWithRef = React.forwardRef((props, ref) => <SmartChartSwitcher innerRef={ref} {...props} />);
SmartChartWithRef.displayName = 'SmartChartWithRef';

const ChartMarkers = observer(config => {
    const { ui, client, contract_trade } = useStore();
    const { markers_array, granularity } = contract_trade;
    const { is_dark_mode_on: is_dark_theme } = ui;
    const { currency } = client;
    return markers_array.map(marker => {
        const Marker = AllMarkers[marker.type];
        return (
            <Marker
                key={marker.key}
                is_dark_theme={is_dark_theme}
                granularity={granularity}
                currency={currency}
                config={config}
                {...marker}
            />
        );
    });
});

const TradeChart = observer((props: any) => {
    const { is_accumulator, end_epoch, topWidgets, charts_ref } = props;
    const { client, ui, common, contract_trade, portfolio } = useStore();
    const {
        accumulator_barriers_data,
        accumulator_contract_barriers_data,
        chart_type,
        granularity,
        markers_array,
        has_crossed_accu_barriers,
        updateGranularity,
        updateChartType,
    } = contract_trade;
    const { all_positions } = portfolio;
    const { is_chart_layout_default, is_chart_countdown_visible, is_dark_mode_on, is_positions_drawer_on } = ui;
    const { is_socket_opened, current_language } = common;
    const { currency, is_beta_chart, should_show_eu_content } = client;
    const {
        chartStateChange,
        is_trade_enabled,
        main_barrier_flattened: main_barrier,
        barriers_flattened: extra_barriers,
        show_digits_stats,
        symbol,
        exportLayout,
        setChartStatus,
        chart_layout,
        wsForget,
        wsForgetStream,
        wsSendRequest,
        wsSubscribe,
        active_symbols,
        has_alternative_source,
    } = useTraderStore();

    const settings = {
        assetInformation: false, // ui.is_chart_asset_info_visible,
        countdown: is_chart_countdown_visible,
        isHighestLowestMarkerEnabled: false, // TODO: Pending UI,
        language: current_language.toLowerCase(),
        position: is_chart_layout_default ? 'bottom' : 'left',
        theme: is_dark_mode_on ? 'dark' : 'light',
        ...(is_accumulator ? { whitespace: 190, minimumLeftBars: isMobile() ? 3 : undefined } : {}),
    };

    const { current_spot, current_spot_time } = accumulator_barriers_data || {};

    const bottomWidgets = React.useCallback(
        ({ digits, tick }) => (
            <ChartBottomWidgets digits={digits} tick={tick} show_accumulators_stats={is_accumulator} is_trade_page />
        ),
        [is_accumulator]
    );

    const getMarketsOrder = active_symbols => {
        const synthetic_index = 'synthetic_index';

        const has_synthetic_index = !!active_symbols.find(s => s.market === synthetic_index);
        return active_symbols
            .slice()
            .sort((a, b) => (a.display_name < b.display_name ? -1 : 1))
            .map(s => s.market)
            .reduce(
                (arr, market) => {
                    if (arr.indexOf(market) === -1) arr.push(market);
                    return arr;
                },
                has_synthetic_index ? [synthetic_index] : []
            );
    };

    const barriers = main_barrier ? [main_barrier, ...extra_barriers] : extra_barriers;

    // max ticks to display for mobile view for tick chart
    const max_ticks = granularity === 0 ? 8 : 24;

    if (!symbol || active_symbols.length === 0) return null;

    return (
        <SmartChartWithRef
            ref={charts_ref}
            barriers={barriers}
            contracts_array={markers_array}
            bottomWidgets={(is_accumulator || show_digits_stats) && isDesktop() ? bottomWidgets : props.bottomWidgets}
            crosshair={isMobile() ? 0 : undefined}
            crosshairTooltipLeftAllow={560}
            showLastDigitStats={isDesktop() ? show_digits_stats : false}
            chartControlsWidgets={null}
            chartStatusListener={v => setChartStatus(!v)}
            chartType={chart_type}
            initialData={{
                activeSymbols: JSON.parse(JSON.stringify(active_symbols)),
            }}
            chartData={{
                activeSymbols: JSON.parse(JSON.stringify(active_symbols)),
            }}
            feedCall={{
                activeSymbols: false,
            }}
            enabledNavigationWidget={isDesktop()}
            enabledChartFooter={false}
            id='trade'
            isMobile={isMobile()}
            maxTick={isMobile() ? max_ticks : undefined}
            granularity={show_digits_stats || is_accumulator ? 0 : granularity}
            requestAPI={wsSendRequest}
            requestForget={wsForget}
            requestForgetStream={wsForgetStream}
            requestSubscribe={wsSubscribe}
            settings={settings}
            should_show_eu_content={should_show_eu_content}
            allowTickChartTypeOnly={show_digits_stats || is_accumulator}
            stateChangeListener={chartStateChange}
            symbol={symbol}
            topWidgets={is_trade_enabled ? topWidgets : null}
            isConnectionOpened={is_socket_opened}
            clearChart={false}
            toolbarWidget={() => {
                if (is_beta_chart) {
                    return (
                        <ToolbarWidgetsBeta updateChartType={updateChartType} updateGranularity={updateGranularity} />
                    );
                } else
                    return <ToolbarWidgets updateChartType={updateChartType} updateGranularity={updateGranularity} />;
            }}
            importedLayout={chart_layout}
            onExportLayout={exportLayout}
            shouldFetchTradingTimes={!end_epoch}
            hasAlternativeSource={has_alternative_source}
            getMarketsOrder={getMarketsOrder}
            should_zoom_out_on_yaxis={is_accumulator}
            yAxisMargin={{
                top: isMobile() ? 76 : 106,
            }}
            isLive={true}
            leftMargin={isDesktop() && is_positions_drawer_on ? 328 : 80}
            is_beta={is_beta_chart}
        >
            {!is_beta_chart && <ChartMarkers />}
            {is_accumulator && (
                <AccumulatorsChartElements
                    all_positions={all_positions}
                    current_spot={current_spot}
                    current_spot_time={current_spot_time}
                    has_crossed_accu_barriers={has_crossed_accu_barriers}
                    should_show_profit_text={
                        !!accumulator_contract_barriers_data.accumulators_high_barrier &&
                        getDecimalPlaces(currency) <= 2
                    }
                    symbol={symbol}
                    is_beta_chart={is_beta_chart}
                />
            )}
        </SmartChartWithRef>
    );
});
export default TradeChart;
