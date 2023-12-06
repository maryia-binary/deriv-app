import React from 'react';
import Icon from '../icon/icon';

type TArrowIndicatorProps = {
    classname?: string;
    value?: number | string;
};

type TData = {
    previous_icon: string;
    icon: string;
    previous_value?: string | number;
    value?: string | number;
};

const ArrowIndicator = ({ classname, value }: TArrowIndicatorProps) => {
    const [is_hidden, setIsHidden] = React.useState(true);
    const [data, setData] = React.useState<TData>({
        icon: '',
        previous_icon: '',
    });
    const { icon, previous_icon, previous_value } = data;
    const has_comparable_values = !isNaN(Number(data.value)) && !isNaN(Number(value));
    const timeout_id = React.useRef<ReturnType<typeof setTimeout>>();
    React.useEffect(() => {
        setIsHidden(false);

        if (data.value !== Number(value)) {
            setData(prev_data => {
                const has_increased = Number(prev_data.value) < Number(value);
                const icon_name = has_increased ? 'IcProfit' : 'IcLoss';
                return {
                    icon: has_comparable_values ? icon_name : '',
                    previous_icon: prev_data.icon,
                    previous_value: prev_data.value,
                    value,
                };
            });

            clearTimeout(timeout_id.current);
            timeout_id.current = setTimeout(() => {
                setIsHidden(true);
            }, 3000);
        }
        return () => clearTimeout(timeout_id.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    if (!has_comparable_values || is_hidden) return <div className={classname} />;
    return (
        <div className={classname}>
            <Icon icon={previous_value === Number(value) ? previous_icon : icon} />
        </div>
    );
};

export default React.memo(ArrowIndicator);
