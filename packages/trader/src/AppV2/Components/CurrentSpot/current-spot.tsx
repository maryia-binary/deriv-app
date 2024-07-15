import React from 'react';
import clsx from 'clsx';
import { Text } from '@deriv-com/quill-ui';
import { useTraderStore } from 'Stores/useTraderStores';
import { observer } from 'mobx-react';

type TCurrentSpotProps = {
    className?: string;
};

const CurrentSpot = observer(({ className }: TCurrentSpotProps) => {
    const { tick_data } = useTraderStore();
    return (
        <div className={clsx('trade__current-spot', className)}>
            <Text size='xl' bold>
                {tick_data?.current_spot}
            </Text>
        </div>
    );
});

export default CurrentSpot;
