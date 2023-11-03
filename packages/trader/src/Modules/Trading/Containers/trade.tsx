// @ts-nocheck
import React from 'react';
import classNames from 'classnames';
import { DesktopWrapper, Div100vhContainer, MobileWrapper, SwipeableWrapper } from '@deriv/components';
import { isDesktop } from '@deriv/shared';
import { observer, useStore } from '@deriv/stores';
import { useTraderStore } from 'Stores/useTraderStores';
import ChartLoader from 'App/Components/Elements/chart-loader';
import PositionsDrawer from 'App/Components/Elements/PositionsDrawer';
import MarketIsClosedOverlay from 'App/Components/Elements/market-is-closed-overlay';
import Test from './test.jsx';
import { ChartTopWidgets, DigitsWidget } from './chart-widgets.jsx';
import FormLayout from '../Components/Form/form-layout.js';
import TradeChart from './trade-chart';

const BottomWidgetsMobile = ({ tick, digits, setTick, setDigits }: any) => {
    React.useEffect(() => {
        setTick(tick);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tick]);

    React.useEffect(() => {
        setDigits(digits);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [digits]);

    // render nothing for bottom widgets on chart in mobile
    return null;
};

const Trade = observer(() => {
    const { client, common, ui } = useStore();
    const {
        form_components,
        getFirstOpenMarket,
        should_show_active_symbols_loading,
        is_chart_loading,
        is_market_closed,
        is_trade_enabled,
        onChange,
        onMount,
        onUnmount,
        prepareTradeStore,
        setContractTypes,
        setMobileDigitView,
        setIsDigitsWidgetActive,
        show_digits_stats,
        is_accumulator,
        symbol,
        is_synthetics_available,
        is_synthetics_trading_market_available,
        is_turbos,
        is_vanilla,
    } = useTraderStore();
    const {
        notification_messages_ui: NotificationMessages,
        has_only_forward_starting_contracts: is_market_unavailable_visible,
        should_show_multipliers_onboarding,
        is_dark_mode_on: is_dark_theme,
        is_mobile,
    } = ui;
    const { is_eu } = client;
    const { network_status } = common;

    const [digits, setDigits] = React.useState([]);
    const [tick, setTick] = React.useState({});
    const [try_synthetic_indices, setTrySyntheticIndices] = React.useState(false);
    const [try_open_markets, setTryOpenMarkets] = React.useState(false);
    const [category, setCategory] = React.useState<string>();
    const [subcategory, setSubcategory] = React.useState<string>();
    const [swipe_index, setSwipeIndex] = React.useState(0);
    const charts_ref = React.useRef();

    const open_market = React.useMemo(() => {
        if (try_synthetic_indices) {
            return { category: 'synthetics' };
        } else if (try_open_markets && category) {
            return { category, subcategory };
        }
        return null;
    }, [try_synthetic_indices, try_open_markets, category, subcategory]);
    // console.log(is_eu bool, category str, subcategory str, open_market null)

    React.useEffect(() => {
        onMount();
        if (!is_synthetics_available) {
            const setMarket = async () => {
                const markets_to_search = ['forex', 'indices', 'commodities']; // none-synthetic
                const { category: market_cat, subcategory: market_subcat } =
                    (await getFirstOpenMarket(markets_to_search)) ?? {};
                if (market_cat) {
                    setCategory(market_cat);
                    setSubcategory(market_subcat);
                }
            };

            setMarket();
        }
        return () => onUnmount();
    }, [onMount, onUnmount, getFirstOpenMarket, is_synthetics_available]);

    React.useEffect(() => {
        if (is_mobile) {
            setDigits([]);
        }
        setTrySyntheticIndices(false);
        setTryOpenMarkets(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [symbol, setDigits, setTrySyntheticIndices, is_synthetics_available]);

    React.useEffect(() => {
        const selectMultipliers = async () => {
            await setContractTypes();

            onChange({ target: { name: 'contract_type', value: 'multiplier' } });
        };
        if (should_show_multipliers_onboarding && !is_chart_loading && (is_synthetics_available || !is_market_closed)) {
            selectMultipliers();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [should_show_multipliers_onboarding, is_chart_loading]);

    const bottomWidgets = React.useCallback(({ digits: d, tick: t }: any) => {
        return <BottomWidgetsMobile digits={d} tick={t} setTick={setTick} setDigits={setDigits} />;
    }, []);

    const onChangeSwipeableIndex = (index: number) => {
        setMobileDigitView(index === 0);
        setIsDigitsWidgetActive(index === 0);
        setSwipeIndex(index);
    };

    const onTryOtherMarkets = async () => {
        if (!is_synthetics_available) {
            setTryOpenMarkets(true);
            setTimeout(() => setTryOpenMarkets(false));
        } else {
            setTrySyntheticIndices(true);
            setTimeout(() => setTrySyntheticIndices(false));
        }
    };

    const topWidgets = React.useCallback(
        ({ ...params }) => (
            <ChartTopWidgets
                // @ts-expect-error TODO: check if TS error is gone after ChartTopWidgets is migrated to ts
                open_market={open_market}
                open={try_synthetic_indices || try_open_markets}
                charts_ref={charts_ref}
                {...params}
            />
        ),
        [open_market, try_synthetic_indices, try_open_markets]
    );

    const form_wrapper_class = is_mobile ? 'mobile-wrapper' : 'sidebar__container desktop-only';
    const chart_height_offset = React.useMemo(() => {
        if (is_accumulator) return '295px';
        if (is_turbos) return '300px';
        return '259px';
    }, [is_turbos, is_accumulator]);

    return (
        <div
            id='trade_container'
            className={classNames('trade-container', {
                [`trade-container--${is_accumulator ? 'accumulators' : 'turbos'}`]: is_accumulator || is_turbos,
            })}
        >
            <DesktopWrapper>
                <PositionsDrawer />
            </DesktopWrapper>
            {/* Div100vhContainer is workaround for browsers on devices
                    with toolbars covering screen height,
                    using css vh is not returning correct screen height */}
            <Div100vhContainer
                id='chart_container'
                className='chart-container'
                is_disabled={isDesktop()}
                height_offset={chart_height_offset}
            >
                <NotificationMessages />
                <React.Suspense
                    fallback={<ChartLoader is_dark={is_dark_theme} is_visible={!symbol || !!is_chart_loading} />}
                >
                    <DesktopWrapper>
                        <div className={classNames('chart-container__wrapper', { 'vanilla-trade-chart': is_vanilla })}>
                            <ChartLoader is_visible={is_chart_loading || should_show_active_symbols_loading} />
                            <TradeChart
                                topWidgets={topWidgets}
                                charts_ref={charts_ref}
                                is_accumulator={is_accumulator}
                            />
                        </div>
                    </DesktopWrapper>
                    <MobileWrapper>
                        <ChartLoader is_visible={is_chart_loading || should_show_active_symbols_loading} />
                        <SwipeableWrapper
                            onChange={onChangeSwipeableIndex}
                            is_disabled={
                                !show_digits_stats ||
                                !is_trade_enabled ||
                                form_components.length === 0 ||
                                is_chart_loading ||
                                should_show_active_symbols_loading
                            }
                            is_swipe_disabled={swipe_index === 1}
                            className={classNames({ 'vanilla-trade-chart': is_vanilla })}
                        >
                            {/* @ts-expect-error TODO: check if TS error is gone after DigitsWidget is migrated to ts */}
                            {show_digits_stats && <DigitsWidget digits={digits} tick={tick} />}
                            <TradeChart
                                topWidgets={topWidgets}
                                charts_ref={charts_ref}
                                bottomWidgets={show_digits_stats ? bottomWidgets : undefined}
                                is_accumulator={is_accumulator}
                            />
                        </SwipeableWrapper>
                    </MobileWrapper>
                </React.Suspense>

                {/* Remove Test component for debugging below for production release */}
                <Test />
            </Div100vhContainer>
            <div className={form_wrapper_class}>
                {is_market_closed && !is_market_unavailable_visible && (
                    <MarketIsClosedOverlay
                        is_eu={is_eu}
                        is_synthetics_trading_market_available={is_synthetics_trading_market_available}
                        onClick={onTryOtherMarkets}
                        onMarketOpen={prepareTradeStore}
                        symbol={symbol}
                    />
                )}
                <FormLayout
                    is_market_closed={is_market_closed}
                    is_trade_enabled={
                        is_trade_enabled && form_components.length > 0 && network_status.class === 'online'
                    }
                />
            </div>
        </div>
    );
});

export default Trade;
