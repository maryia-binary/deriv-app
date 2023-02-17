import PropTypes from 'prop-types';
import React from 'react';

const BarriersList = ({
    active_item_class_name,
    base_class_name,
    chosen_item,
    className,
    hover_item_class_name,
    list,
    onClick,
    onMouseEnter,
    onMouseLeave,
}) => {
    const barriers_list = list.map(barrier => {
        const is_active = chosen_item === barrier;

        const genetated_class_name = `${base_class_name} ${
            is_active ? active_item_class_name : ''
        } ${hover_item_class_name}`;

        return (
            <li
                key={barrier}
                id={barrier}
                className={genetated_class_name}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {barrier}
            </li>
        );
    });

    return <ul className={className}>{barriers_list}</ul>;
};

BarriersList.propTypes = {
    active_item_class_name: PropTypes.string,
    base_class_name: PropTypes.string,
    chosen_item: PropTypes.string,
    className: PropTypes.string,
    hover_item_class_name: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
};

export default React.memo(BarriersList);
