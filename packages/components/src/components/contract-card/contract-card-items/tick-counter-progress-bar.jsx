import React from 'react';
import PropTypes from 'prop-types';
import { localize } from '@deriv/translations';
import Text from '../../text';

const TickCounterProgressBar = ({ current_tick, max_ticks_duration }) => (
    <div className='dc-tick-counter-progress-bar__container'>
        <div className='dc-tick-counter-progress-bar__track'>
            <Text size='xxs' weight='bold' className='dc-tick-counter-progress-bar__text'>
                {localize('{{current_tick}}/{{max_ticks_duration}} Ticks', {
                    current_tick,
                    max_ticks_duration,
                })}
            </Text>
        </div>
    </div>
);

TickCounterProgressBar.propTypes = {
    current_tick: PropTypes.number,
    max_ticks_duration: PropTypes.number,
};

export default React.memo(TickCounterProgressBar);
