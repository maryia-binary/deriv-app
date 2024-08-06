import React from 'react';
import debounce from 'lodash.debounce';
import { ActionSheet, Text, WheelPickerContainer } from '@deriv-com/quill-ui';
import { localize, Localize } from '@deriv/translations';
import { getGrowthRatePercentage } from '@deriv/shared';
import { Skeleton } from '@deriv/components';

type TGrowthRatePickerProps = {
    accumulator_range_list?: number[];
    growth_rate: number;
    maximum_ticks: number;
    onSave: () => void;
    setGrowthRate: (growth_rate: number) => void;
    should_show_details?: boolean;
    tick_size_barrier_percentage: string;
};

const debouncedSetGrowthRate = debounce((setGrowthRate, growth_rate) => {
    setGrowthRate(growth_rate);
}, 200);

const GrowthRatePicker = ({
    accumulator_range_list = [],
    growth_rate,
    maximum_ticks,
    onSave,
    setGrowthRate,
    should_show_details,
    tick_size_barrier_percentage,
}: TGrowthRatePickerProps) => {
    const initial_growth_rate = React.useRef<number>();
    const selected_growth_rate = React.useRef<number>(growth_rate);
    const data = accumulator_range_list.map(rate => ({ value: `${getGrowthRatePercentage(rate)}%` }));
    const details_content = [
        {
            label: <Localize i18n_default_text='Barrier' />,
            value: `±${tick_size_barrier_percentage}`,
        },
        {
            label: <Localize i18n_default_text='Max duration' />,
            value: `${maximum_ticks || 0} ${maximum_ticks === 1 ? localize('tick') : localize('ticks')}`,
        },
    ];

    React.useEffect(() => {
        if (!initial_growth_rate.current && growth_rate) {
            initial_growth_rate.current = growth_rate;
        }
        return () => {
            debouncedSetGrowthRate.cancel();
            if (initial_growth_rate.current && initial_growth_rate.current !== selected_growth_rate.current) {
                setGrowthRate(initial_growth_rate.current);
            }
        };
    }, []);

    const handleSave = () => {
        initial_growth_rate.current = selected_growth_rate.current;
        onSave();
    };

    const handlePickerValuesChange = (_idx: number, value: string | number) => {
        const new_value = Number((value as string).slice(0, -1)) / 100;
        if (new_value === selected_growth_rate.current) return;
        debouncedSetGrowthRate(setGrowthRate, new_value);
        selected_growth_rate.current = new_value;
    };

    if (!accumulator_range_list.length) return null;
    return (
        <React.Fragment>
            <ActionSheet.Content className='growth-rate__picker'>
                <div className='growth-rate__wheel-picker'>
                    <WheelPickerContainer
                        data={[data]}
                        inputValues={[`${getGrowthRatePercentage(growth_rate)}%`]}
                        setInputValues={handlePickerValuesChange}
                    />
                </div>
                <div className='growth-rate__details'>
                    {details_content.map(({ label, value }) => (
                        <span key={value} className='growth-rate__details-item'>
                            <Text size='sm'>{label}</Text>
                            {should_show_details ? <Text size='sm'>{value}</Text> : <Skeleton height={22} width={75} />}
                        </span>
                    ))}
                </div>
            </ActionSheet.Content>
            <ActionSheet.Footer
                alignment='vertical'
                primaryAction={{
                    content: <Localize i18n_default_text='Save' />,
                    onAction: handleSave,
                }}
                shouldCloseOnPrimaryButtonClick={false}
            />
        </React.Fragment>
    );
};

export default GrowthRatePicker;
