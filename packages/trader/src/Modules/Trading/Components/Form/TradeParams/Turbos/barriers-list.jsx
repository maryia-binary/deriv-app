import PropTypes from 'prop-types';
import React from 'react';

const BarriersList = ({
    active_item_classname,
    base_classname,
    selected_item,
    className,
    hover_item_classname,
    list,
    onClick,
    onMouseEnter,
    onMouseLeave,
}) => {
    const barriers_list = list.map(barrier => {
        const genetated_class_name = `${base_classname} ${
            selected_item === barrier ? active_item_classname : ''
        } ${hover_item_classname}`;

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
    active_item_classname: PropTypes.string,
    base_classname: PropTypes.string,
    selected_item: PropTypes.string,
    className: PropTypes.string,
    hover_item_classname: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
};

export default React.memo(BarriersList);
