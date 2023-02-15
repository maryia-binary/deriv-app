import React from 'react';
import PropTypes from 'prop-types';
import IconTradeTypes from '../../icon-trade-types';
// import { isTurbosContract } from '@deriv/shared';

const ContractTypeCell = ({ getContractTypeDisplay, is_high_low, multiplier, type, is_open_positions }) => {
    // const is_turbos = isTurbosContract(type);
    return (
        <div className='dc-contract-type'>
            <div className='dc-contract-type__type-wrapper'>
                <IconTradeTypes
                    type={is_high_low ? `${type.toLowerCase()}_barrier` : type.toLowerCase()}
                    className='category-type'
                    size={24}
                />
            </div>
            {!is_open_positions && (
                <div className='dc-contract-type__type-label'>
                    <div>{getContractTypeDisplay(type, is_high_low) || ''}</div>
                    {multiplier && <div className='dc-contract-type__type-label-multiplier'>x{multiplier}</div>}
                </div>
            )}
        </div>
    );
};

ContractTypeCell.propTypes = {
    getContractTypeDisplay: PropTypes.func,
    is_high_low: PropTypes.bool,
    multiplier: PropTypes.number,
    type: PropTypes.string,
    is_open_positions: PropTypes.bool,
};

export default ContractTypeCell;
