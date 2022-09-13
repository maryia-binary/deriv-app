import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { getTimePercentage } from '@deriv/shared';
import ProgressTicks from './progress-ticks.jsx';
import RemainingTime from '../remaining-time';
import Text from '../text';
import { localize } from '@deriv/translations';

const ProgressSlider = ({
    className,
    current_tick,
    expiry_time,
    getCardLabels,
    is_loading,
    max_ticks_number,
    server_time,
    start_time,
    ticks_count,
}) => {
    let progress_component;
    const percentage = getTimePercentage(server_time, start_time, expiry_time);
    if (ticks_count && !max_ticks_number) {
        progress_component = (
            <ProgressTicks current_tick={current_tick} getCardLabels={getCardLabels} ticks_count={ticks_count} />
        );
    } else if (max_ticks_number) {
        progress_component = (
            <React.Fragment>
                <div className='dc-progress-slider-accumulator__track'>
                    <Text size='xxs' weight='bold' className='dc-progress-slider-accumulator__text'>
                        {localize('{{current_tick}}/{{max_ticks_number}} Ticks', {
                            current_tick,
                            max_ticks_number,
                        })}
                    </Text>
                </div>
            </React.Fragment>
        );
    } else {
        progress_component = (
            <React.Fragment>
                <Text size='xxxs' className='dc-progress-slider__remaining-time'>
                    <RemainingTime end_time={expiry_time} getCardLabels={getCardLabels} start_time={server_time} />
                </Text>
                {is_loading || percentage < 1 ? (
                    <div className='dc-progress-slider__infinite-loader'>
                        <div className='dc-progress-slider__infinite-loader--indeterminate' />
                    </div>
                ) : (
                    /* Calculate line width based on percentage of time left */
                    <div className='dc-progress-slider__track'>
                        <div
                            className={classNames('dc-progress-slider__line', {
                                'dc-progress-slider__line--green': percentage >= 50,
                                'dc-progress-slider__line--yellow': percentage < 50 && percentage >= 20,
                                'dc-progress-slider__line--red': percentage < 20,
                            })}
                            style={{ width: `${percentage}%` }}
                        />
                    </div>
                )}
            </React.Fragment>
        );
    }
    return <div className={classNames('dc-progress-slider', className)}>{progress_component}</div>;
};
// Keypress events do not trigger on Safari due to the way it handles input type='range' elements, using focus on the input element also doesn't work for Safari.

ProgressSlider.propTypes = {
    className: PropTypes.string,
    current_tick: PropTypes.number,
    expiry_time: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    is_loading: PropTypes.bool,
    max_ticks_number: PropTypes.number,
    server_time: PropTypes.object,
    start_time: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ticks_count: PropTypes.number,
    getCardLabels: PropTypes.func,
};

export default ProgressSlider;
