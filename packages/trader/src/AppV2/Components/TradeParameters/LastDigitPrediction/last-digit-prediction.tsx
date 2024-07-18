import React from 'react';
import { observer } from 'mobx-react';
import clsx from 'clsx';
import { CaptionText, TextField } from '@deriv-com/quill-ui';
import { Localize, localize } from '@deriv/translations';
import { useTraderStore } from 'Stores/useTraderStores';
import Digit from './digit';

type TLastDigitSelectorProps = {
    is_minimized?: boolean;
    is_stats_mode?: boolean;
};

const display_array = [...Array(10).keys()]; // digits array [0 - 9]

const LastDigitPrediction = observer(({ is_minimized, is_stats_mode }: TLastDigitSelectorProps) => {
    const { digit_stats, last_digit, onChange } = useTraderStore();

    const handleLastDigitChange = (digit: number) => {
        onChange({ target: { name: 'last_digit', value: digit } });
    };

    if (is_minimized)
        return (
            <TextField
                variant='fill'
                readOnly
                label={localize('Last digit prediction')}
                value={last_digit}
                className={clsx('trade-params__option', 'trade-params__option--minimized')}
            />
        );
    return (
        <div className={clsx('last-digit-prediction', is_stats_mode && 'last-digit-prediction--stats-mode')}>
            {!is_stats_mode && (
                <CaptionText size='sm' className='last-digit-prediction__title'>
                    <Localize i18n_default_text='Last digit prediction' />
                </CaptionText>
            )}
            <div className='last-digit-prediction__selector'>
                {[...Array(2).keys()].map(row_key => (
                    <div key={row_key} className='last-digit-prediction__selector-row'>
                        {display_array.slice(row_key * 5, (row_key + 1) * 5).map(digit => (
                            <Digit
                                key={digit}
                                digit={digit}
                                digit_stats={digit_stats}
                                is_active={!is_stats_mode && last_digit === digit}
                                is_disabled={is_stats_mode}
                                onClick={handleLastDigitChange}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
});

export default LastDigitPrediction;
