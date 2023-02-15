import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { isCryptocurrency, getLimitOrderAmount, getTotalProfit, isValidToSell } from '@deriv/shared';
import ContractCardItem from './contract-card-item.jsx';
import ToggleCardDialog from './toggle-card-dialog.jsx';
import Icon from '../../icon';
import Money from '../../money';

const TurbosOpenCardBody = ({
    addToast,
    connectWithContractUpdate,
    contract_info,
    contract_update,
    currency,
    current_focus,
    error_message_alignment,
    getCardLabels,
    getContractById,
    is_sold,
    onMouseLeave,
    removeToast,
    setCurrentFocus,
    status,
    is_mobile,
    is_open_positions,
}) => {
    const total_profit = getTotalProfit(contract_info);
    const { buy_price, profit, limit_order, barrier, current_spot_display_value } = contract_info;
    const { take_profit } = getLimitOrderAmount(contract_update || limit_order);
    const is_valid_to_sell = isValidToSell(contract_info);
    const { BARRIER_LEVEL, CURRENT_PRICE, STAKE, TAKE_PROFIT, POTENTIAL_PROFIT_LOSS } = getCardLabels();

    return (
        <React.Fragment>
            <div
                className={classNames('dc-contract-card-items-wrapper', {
                    'dc-contract-card--turbos-open-positions': is_mobile && is_open_positions,
                })}
            >
                <ContractCardItem
                    className='dc-contract-card__stake'
                    header={STAKE}
                    is_crypto={isCryptocurrency(currency)}
                    is_loss={is_sold ? +profit < 0 : false}
                    is_won={is_sold ? +profit > 0 : false}
                >
                    <Money amount={buy_price} currency={currency} />
                </ContractCardItem>
                <ContractCardItem header={CURRENT_PRICE} className='dc-contract-card__current-price'>
                    <Money currency={currency} amount={current_spot_display_value} />
                </ContractCardItem>
                <ContractCardItem
                    header={BARRIER_LEVEL}
                    is_crypto={isCryptocurrency(currency)}
                    className='dc-contract-card__barrier-level'
                >
                    <Money amount={barrier} currency={currency} />
                </ContractCardItem>
                <ContractCardItem
                    header={POTENTIAL_PROFIT_LOSS}
                    is_crypto={isCryptocurrency(currency)}
                    className='dc-contract-card__buy-price'
                >
                    <Money amount={total_profit} currency={currency} />
                    <div
                        className={classNames('dc-contract-card__indicative--movement', {
                            'dc-contract-card__indicative--movement-complete': is_sold,
                        })}
                    >
                        {status === 'profit' && <Icon icon='IcProfit' />}
                        {status === 'loss' && <Icon icon='IcLoss' />}
                    </div>
                </ContractCardItem>
                <div className='dc-contract-card__limit-order-info'>
                    <ContractCardItem header={TAKE_PROFIT} className='dc-contract-card__take-profit'>
                        {take_profit ? <Money amount={take_profit} currency={currency} /> : <strong>-</strong>}
                        {is_valid_to_sell && (
                            <ToggleCardDialog
                                addToast={addToast}
                                connectWithContractUpdate={connectWithContractUpdate}
                                contract_id={contract_info.contract_id}
                                current_focus={current_focus}
                                error_message_alignment={error_message_alignment}
                                getCardLabels={getCardLabels}
                                getContractById={getContractById}
                                is_turbos
                                onMouseLeave={onMouseLeave}
                                removeToast={removeToast}
                                setCurrentFocus={setCurrentFocus}
                                status={status}
                            />
                        )}
                    </ContractCardItem>
                </div>
            </div>

            {/* {!is_sold && (
                <ContractCardItem
                    className='dc-contract-card-item__total-profit-loss'
                    header={TOTAL_PROFIT_LOSS}
                    is_crypto={isCryptocurrency(currency)}
                    is_loss={+total_profit < 0}
                    is_won={+total_profit > 0}
                >
                    <Money amount={total_profit} currency={currency} />
                    <div
                        className={classNames('dc-contract-card__indicative--movement', {
                            'dc-contract-card__indicative--movement-complete': is_sold,
                        })}
                    >
                        {status === 'profit' && <Icon icon='IcProfit' />}
                        {status === 'loss' && <Icon icon='IcLoss' />}
                    </div>
                </ContractCardItem>
            )} */}
        </React.Fragment>
    );
};

TurbosOpenCardBody.propTypes = {
    addToast: PropTypes.func,
    connectWithContractUpdate: PropTypes.func,
    contract_info: PropTypes.object,
    contract_update: PropTypes.object,
    currency: PropTypes.string,
    current_focus: PropTypes.string,
    error_message_alignment: PropTypes.string,
    getCardLabels: PropTypes.func,
    getContractById: PropTypes.func,
    is_sold: PropTypes.bool,
    is_mobile: PropTypes.bool,
    onMouseLeave: PropTypes.func,
    removeToast: PropTypes.func,
    progress_slider_mobile_el: PropTypes.node,
    setCurrentFocus: PropTypes.func,
    status: PropTypes.string,
    is_open_positions: PropTypes.bool,
};

export default React.memo(TurbosOpenCardBody);
