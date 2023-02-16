import PropTypes from 'prop-types';
import React from 'react';

const BarriersItem = ({ active_item_class_name, base_class_name, id, is_active, hover_item_class_name, value }) => {
    const genetated_class_name = `${base_class_name} ${
        is_active ? active_item_class_name : ''
    } ${hover_item_class_name}`;
    return (
        <li id={id} className={genetated_class_name}>
            {value}
        </li>
    );
};

BarriersItem.propTypes = {
    active_item_class_name: PropTypes.string,
    base_class_name: PropTypes.string,
    id: PropTypes.string,
    is_active: PropTypes.bool,
    hover_item_class_name: PropTypes.string,
    value: PropTypes.string,
};

const BarriersList = ({
    active_item_class_name,
    base_class_name,
    chosen_item,
    className,
    hover_item_class_name,
    list,
    onClick,
}) => {
    //TODO: remove slice after adding scroll
    const barriers_list = list.slice(0, 16).map(barrier => {
        const is_active = chosen_item === barrier;
        return (
            <BarriersItem
                id={barrier}
                key={barrier}
                is_active={is_active}
                hover_item_class_name={hover_item_class_name}
                base_class_name={base_class_name}
                active_item_class_name={active_item_class_name}
                value={barrier}
            />
        );
    });
    return (
        <ul className={className} onClick={onClick}>
            {barriers_list}
        </ul>
    );
};

BarriersList.propTypes = {
    active_item_class_name: PropTypes.string,
    base_class_name: PropTypes.string,
    chosen_item: PropTypes.string,
    className: PropTypes.string,
    hover_item_class_name: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func,
};

export default BarriersList;
