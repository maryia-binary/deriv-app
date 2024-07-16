import React from 'react';
import { observer } from 'mobx-react';
import { TextField } from '@deriv-com/quill-ui';
import { localize } from '@deriv/translations';
import clsx from 'clsx';
import { useTraderStore } from 'Stores/useTraderStores';
import { getCurrencyDisplayCode } from '@deriv/shared';

type TStakeProps = {
    is_minimized?: boolean;
};

const BASIS = {
    PAYOUT: 'payout',
    STAKE: 'stake',
};

const Stake = observer(({ is_minimized }: TStakeProps) => {
    const { amount, basis, currency, onChange } = useTraderStore();

    React.useEffect(() => {
        if (basis === BASIS.PAYOUT) onChange({ target: { name: 'basis', value: BASIS.STAKE } });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [basis]);

    if (basis === BASIS.PAYOUT) return null;
    return (
        <TextField
            variant='fill'
            readOnly
            label={localize('Stake')}
            value={`${amount} ${getCurrencyDisplayCode(currency)}`}
            className={clsx('trade-params__option', is_minimized && 'trade-params__option--minimized')}
        />
    );
});

export default Stake;
