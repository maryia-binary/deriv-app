import React from 'react';
import { Localize, localize } from '@deriv/translations';
import { Money } from '@deriv/components';
import { Text } from '@deriv-com/quill-ui';
import { useTraderStore } from 'Stores/useTraderStores';

type TAccumulatorsInformationProps = {
    is_minimized?: boolean;
} & Pick<ReturnType<typeof useTraderStore>, 'currency' | 'maximum_payout' | 'maximum_ticks'>;

const AccumulatorsInformation = ({
    currency,
    is_minimized,
    maximum_payout,
    maximum_ticks,
}: TAccumulatorsInformationProps) => {
    const content = [
        {
            label: <Localize i18n_default_text='Max. payout' />,
            value: <Money amount={maximum_payout} show_currency currency={currency} />,
        },
        {
            label: <Localize i18n_default_text='Max. ticks' />,
            value: `${maximum_ticks || 0} ${maximum_ticks === 1 ? localize('tick') : localize('ticks')}`,
        },
    ];

    if (is_minimized) return null;

    return (
        <div className='accumulators__wrapper'>
            {content.map(({ label, value }) => (
                <div key={label.props.i18n_default_text} className='accumulators__row'>
                    <Text size='sm' className='accumulators__title'>
                        {label}
                    </Text>
                    <Text size='sm' bold>
                        {value}
                    </Text>
                </div>
            ))}
        </div>
    );
};

export default AccumulatorsInformation;
