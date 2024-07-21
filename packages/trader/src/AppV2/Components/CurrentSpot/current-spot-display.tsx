import React from 'react';
import { Heading, Text } from '@deriv-com/quill-ui';
import { Localize } from '@deriv/translations';

type TCurrentSpotDisplayProps = {
    has_tick_count?: boolean;
    spot: string | null;
    tick: number | null;
};

const CurrentSpotDisplay = ({ has_tick_count, spot, tick }: TCurrentSpotDisplayProps) => {
    return (
        <div className='current-spot__display'>
            {has_tick_count && (
                <Text size='xl'>
                    <Localize i18n_default_text='Tick {{current_tick}}' values={{ current_tick: tick }} />
                </Text>
            )}
            <div className='current-spot'>
                <Text size='xl' bold>
                    {spot?.slice(0, -1)}
                </Text>
                <Heading.H2 className='current-spot__last-digit'>{spot?.slice(-1)}</Heading.H2>
            </div>
        </div>
    );
};

export default CurrentSpotDisplay;
