import PropTypes from 'prop-types';
import React from 'react';
import { Text } from '@deriv/components';
import { FastMarker } from 'Modules/SmartChart';
import classNames from 'classnames';

const ACTIONS = {
    INC: 'increment',
    DEC: 'decrement',
    ADD10: 'add10',
};

const AccumulatorsProfitLossText = ({
    current_spot,
    current_spot_time = 0,
    currency,
    className = 'sc-accumulators-profit-loss-text',
    profit,
}) => {
    const [value, setValue] = React.useState(0);
    const [is_fading_in, setIsFadingIn] = React.useState(false);
    const [is_sliding, setIsSliding] = React.useState(false);
    const prev_profit = React.useRef(profit);
    const intervals_ids = React.useRef([]);
    const sliding_decimal = React.useRef(null);
    const fading_in_timeout = React.useRef();
    const sliding_timeout = React.useRef();
    const won = profit > 0;
    const sign = won ? '+' : '';
    const new_arr = profit.toFixed(2).split('.');
    const prev_arr = prev_profit.current?.toFixed(2).split('.');
    const new_counter = +new_arr[1][0];
    const prev_counter = +prev_arr[1][0];

    const slideDecimalDigit = (action, interval_ms, start, end) => {
        const interval_id = setInterval(() => {
            if (action === ACTIONS.INC && sliding_decimal.current < end) {
                sliding_decimal.current = (sliding_decimal.current + 1) % 10;
            } else if (action === ACTIONS.DEC && sliding_decimal.current > end) {
                sliding_decimal.current = Math.abs(sliding_decimal.current - 1) % 10;
            } else if (action === ACTIONS.ADD10 && sliding_decimal.current < start + 10) {
                sliding_decimal.current += 1;
            } else if (
                action === ACTIONS.ADD10 ? sliding_decimal.current === start + 10 : sliding_decimal.current === end
            ) {
                intervals_ids.current.splice(intervals_ids.current.indexOf(interval_id), 1);
                clearInterval(interval_id);
            }
            setValue(sliding_decimal.current % 10);
        }, interval_ms);
        intervals_ids.current.push(interval_id);
    };

    React.useEffect(() => {
        const sliding_digit_intervals = intervals_ids.current;
        return () => {
            clearTimeout(fading_in_timeout.current);
            clearTimeout(sliding_timeout.current);
            sliding_digit_intervals?.forEach(id => {
                clearInterval(id);
            });
        };
    }, []);

    React.useEffect(() => {
        if (profit) {
            setIsFadingIn(true);
            setIsSliding(true);
            fading_in_timeout.current = setTimeout(() => {
                setIsFadingIn(false);
            }, 600);
            sliding_timeout.current = setTimeout(() => {
                setIsSliding(false);
            }, 300);
        }
        if (profit !== 0) {
            const update = (start, end) => {
                const delta = Math.abs(end - start);
                sliding_decimal.current = start;
                if (start < end) {
                    slideDecimalDigit(ACTIONS.INC, 300 / delta, start, end);
                } else if (start > end) {
                    slideDecimalDigit(ACTIONS.DEC, 300 / delta, start, end);
                } else {
                    slideDecimalDigit(ACTIONS.ADD10, 30, start, end);
                }
            };
            update(prev_counter, new_counter);
        }
    }, [profit, prev_counter, new_counter]);

    const onRef = ref => {
        if (ref) {
            if (!current_spot) {
                // this call will hide the marker:
                ref.setPosition({ epoch: null, price: null });
            }
            ref.setPosition({
                epoch: +current_spot_time,
                price: +current_spot,
            });
        }
    };

    return (
        <FastMarker markerRef={onRef} className={classNames(className, won ? 'won' : 'lost')}>
            <Text
                weight='bold'
                size='m'
                color={won ? 'profit-success' : 'loss-danger'}
                className={classNames(`${className}__profit`, {
                    [`${className}__profit--fading-in`]: is_fading_in,
                })}
                as='div'
            >
                {`${sign}${new_arr[0]}.`}
                <div className={is_sliding ? `${className}__sliding-decimal` : ''}>{value}</div>
                {`${new_arr[1].slice(1)}`}
            </Text>
            <Text size='xxs' as='div' className={`${className}__currency`}>
                {currency}
            </Text>
        </FastMarker>
    );
};

AccumulatorsProfitLossText.propTypes = {
    className: PropTypes.string,
    currency: PropTypes.string,
    current_spot: PropTypes.number,
    current_spot_time: PropTypes.number,
    profit: PropTypes.number,
};

export default React.memo(AccumulatorsProfitLossText);
