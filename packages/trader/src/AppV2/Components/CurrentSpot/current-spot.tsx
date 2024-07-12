import React from 'react';
import clsx from 'clsx';
import { Text } from '@deriv-com/quill-ui';

type TCurrentSpotProps = {
    className?: string;
    current_spot?: number;
};

const CurrentSpot = ({ className, current_spot }: TCurrentSpotProps) => {
    return (
        <div className={clsx('trade__current-spot', className)}>
            <Text size='xl' bold>
                {current_spot}
            </Text>
        </div>
    );
};

export default CurrentSpot;
