import React from 'react';
import { observer } from 'mobx-react';
import { TextField } from '@deriv-com/quill-ui';
import { localize } from '@deriv/translations';
import clsx from 'clsx';
import { useTraderStore } from 'Stores/useTraderStores';

type TDurationProps = {
    is_minimized?: boolean;
};

const Barrier = observer(({ is_minimized }: TDurationProps) => {
    const { barrier_1 } = useTraderStore();
    return (
        <TextField
            variant='fill'
            readOnly
            label={localize('Barrier')}
            value={barrier_1}
            className={clsx('trade-params__option', is_minimized && 'trade-params__option--minimized')}
        />
    );
});

export default Barrier;
