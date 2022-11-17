import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { Icon, Text } from '@deriv/components';
import { localize } from '@deriv/translations';
import { FastMarker } from 'Modules/SmartChart';

const AccumulatorsProfitLossTooltip = ({
    alignment = 'right',
    className = 'sc-accumulators-profit-loss-tooltip',
    currency,
    exit_tick = 0,
    exit_tick_time = 0,
    profit,
}) => {
    const [is_tooltip_open, setIsTooltipOpen] = React.useState(true);
    const [has_close_icon, setHasCloseIcon] = React.useState(true);
    const won = profit > 0;
    const sign = won ? '+' : '';

    // const [value, setValue] = React.useState(0);
    // const timeout_ids = React.useRef([]);
    // const counter = React.useRef(null);
    // const prev_profit = React.useRef(profit);
    // const animated_ref = React.useRef();

    // React.useEffect(() => {
    //     if (animated_ref?.current) {
    //         animated_ref.current.animate([{ transform: 'translateY(-10px)' }, { transform: 'translateY(0)' }], {
    //             duration: 700,
    //             fill: 'both',
    //             easing: 'ease-in-out',
    //         });
    //     }
    // }, [profit]);

    // const update = (start, end) => {
    //     timeout_ids.current.forEach(id => {
    //         clearTimeout(id);
    //     });

    //     const delta = Math.abs(end - start) || 1;
    //     const i = counter.current ?? start;

    //     if (start < end) {
    //         const runLoop = () => {
    //             //  create a loop function
    //             const timeout_id = setTimeout(() => {
    //                 //  call a 3s setTimeout when the loop is called
    //                 if (i <= end) {
    //                     setValue(i % 10);
    //                     if (i !== end) {
    //                         counter.current = (i + 1) % 10;
    //                         //  if the counter < 10, call the loop function
    //                         runLoop(); //  ..  again which will trigger another
    //                     }
    //                 } else {
    //                     counter.current = null;
    //                 } //  ..  setTimeout()
    //                 // i++; //  increment the counter
    //             }, 300 / delta);
    //             timeout_ids.current.push(timeout_id);
    //         };

    //         runLoop();
    //     } else if (start > end) {
    //         const runLoop = () => {
    //             //  create a loop function
    //             const timeout_id = setTimeout(() => {
    //                 //  call a 3s setTimeout when the loop is called

    //                 if (i >= end) {
    //                     setValue(i % 10); //  your code here

    //                     if (i !== end) {
    //                         counter.current = Math.abs(i - 1) % 10;
    //                         //  if the counter < 10, call the loop function
    //                         runLoop(); //  ..  again which will trigger another
    //                     }
    //                 } else {
    //                     counter.current = null;
    //                 } //  ..  setTimeout()
    //             }, 300 / delta);
    //             timeout_ids.current.push(timeout_id);
    //         };

    //         runLoop();
    //     } else {
    //         const runLoop = () => {
    //             //  create a loop function
    //             const timeout_id = setTimeout(() => {
    //                 //  call a 3s setTimeout when the loop is called

    //                 if (i <= start + 10) {
    //                     setValue(i % 10); //  your code here

    //                     if (i !== end) {
    //                         counter.current = i + 1;
    //                         //  if the counter < 10, call the loop function
    //                         runLoop(); //  ..  again which will trigger another
    //                     }
    //                 } else {
    //                     counter.current = null;
    //                 } //  ..  setTimeout()
    //             }, 300 / delta);
    //             timeout_ids.current.push(timeout_id);
    //         };

    //         runLoop();
    //     }
    // };

    // const getAnimatedProfit = () => {
    //     const new_arr = profit.toFixed(2).split('.');
    //     const prev_arr = prev_profit.current?.toFixed(2).split('.');
    //     const new_counter = +new_arr[1][0];
    //     const prev_counter = +prev_arr[1][0];

    //     const getCounter = () => {
    //         update(prev_counter, new_counter);
    //         return value;
    //     };
    //     return (
    //         <>
    //             {`${new_arr[0]}.`}
    //             <span ref={animated_ref} style={{ display: 'inline-block' }}>
    //                 {getCounter()}
    //             </span>
    //             {new_arr[1].slice(1)}
    //         </>
    //     );
    // };

    const opposite_arrow_position = React.useMemo(() => {
        const horizontal = ['left', 'right'];
        return horizontal.includes(alignment)
            ? horizontal.find(el => el !== alignment)
            : ['top', 'bottom'].find(el => el !== alignment);
    }, [alignment]);

    const onRef = ref => {
        if (ref) {
            if (!exit_tick) {
                // this call will hide the marker:
                ref.setPosition({ epoch: null, price: null });
            }
            ref.setPosition({
                epoch: +exit_tick_time,
                price: +exit_tick,
            });
        }
    };

    return (
        <FastMarker markerRef={onRef} className={classNames(className, won ? 'won' : 'lost')}>
            <span
                className={`${className}__spot-circle`}
                onMouseEnter={() => !is_tooltip_open && setIsTooltipOpen(true)}
                onMouseLeave={() => is_tooltip_open && !has_close_icon && setIsTooltipOpen(false)}
            />
            {is_tooltip_open && (
                <div className={classNames(`${className}__content`, `arrow-${opposite_arrow_position}`)}>
                    <Text size='xxs' className={`${className}__text`}>
                        {localize('Total profit/loss:')}
                    </Text>
                    <Text
                        size='xs'
                        className={`${className}__text`}
                        weight='bold'
                    >{`${sign}${profit} ${currency}`}</Text>
                    {has_close_icon && (
                        <Icon
                            className={`${className}__close-icon`}
                            icon='IcCloseLight'
                            onClick={() => {
                                setHasCloseIcon(false);
                                setIsTooltipOpen(false);
                            }}
                        />
                    )}
                </div>
            )}
            {/* <>{getAnimatedProfit()}</> */}
        </FastMarker>
    );
};

AccumulatorsProfitLossTooltip.propTypes = {
    alignment: PropTypes.string,
    className: PropTypes.string,
    currency: PropTypes.string,
    exit_tick: PropTypes.number,
    exit_tick_time: PropTypes.number,
    profit: PropTypes.number,
};

export default React.memo(AccumulatorsProfitLossTooltip);
