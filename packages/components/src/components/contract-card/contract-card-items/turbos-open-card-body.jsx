import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { isCryptocurrency, getLimitOrderAmount, isValidToSell } from '@deriv/shared';
import ContractCardItem from './contract-card-item.jsx';
import ToggleCardDialog from './toggle-card-dialog.jsx';
import Icon from '../../icon';
import MobileWrapper from '../../mobile-wrapper';
import Money from '../../money';
import { ResultStatusIcon } from '../result-overlay/result-overlay.jsx';

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
    // indicative,
    is_sold,
    has_progress_slider,
    is_mobile,
    onMouseLeave,
    removeToast,
    setCurrentFocus,
    status,
    is_positions,
}) => {
    const { buy_price, profit, limit_order, current_spot, barrier } = contract_info;
    const { take_profit } = getLimitOrderAmount(contract_update || limit_order);
    const is_valid_to_sell = isValidToSell(contract_info);
    const { CURRENT_PRICE, STAKE, TAKE_PROFIT, POTENTIAL_PROFIT_LOSS, BARRIER_LEVEL } = getCardLabels();

    return (
        <React.Fragment>
            <div
                className={classNames({
                    'dc-contract-card-items-wrapper--mobile': is_mobile,
                    'dc-contract-card-items-wrapper': !is_mobile,
                    'dc-contract-card-items-wrapper--has-progress-slider': has_progress_slider && !is_sold,
                })}
            >
                <ContractCardItem header={STAKE} className='dc-contract-card__stake'>
                    <Money amount={buy_price} currency={currency} />
                </ContractCardItem>
                <ContractCardItem header={CURRENT_PRICE} className='dc-contract-card__current-stake'>
                    <div
                        className={classNames({
                            'dc-contract-card--profit': +profit > 0,
                            'dc-contract-card--loss': +profit < 0,
                        })}
                    >
                        <Money amount={current_spot} currency={currency} />
                    </div>

                    {/* <div
                        className={classNames('dc-contract-card__indicative--movement', {
                            'dc-contract-card__indicative--movement-complete': is_sold,
                        })}
                    >
                        
                        {status === 'profit' && <Icon icon='IcProfit' />}
                        {status === 'loss' && <Icon icon='IcLoss' />}
                    </div> */}
                </ContractCardItem>
                <ContractCardItem header={BARRIER_LEVEL} className='dc-contract-card__deal-cancel-fee'>
                    <Money amount={barrier} currency={currency} />
                </ContractCardItem>
                <ContractCardItem
                    header={POTENTIAL_PROFIT_LOSS}
                    is_crypto={isCryptocurrency(currency)}
                    is_loss={+profit < 0}
                    is_won={+profit > 0}
                >
                    {typeof profit === 'number' ? <Money amount={profit} currency={currency} /> : <strong>-</strong>}
                    {/* <div
                        // className={classNames('dc-contract-card__indicative--movement', {
                        //     'dc-contract-card__indicative--movement-complete': is_sold,
                        // })}
                    >
                        {status === 'profit' && <Icon icon='IcProfit' />}
                        {status === 'loss' && <Icon icon='IcLoss' />}
                    </div> */}
                </ContractCardItem>
                <ContractCardItem
                // header={POTENTIAL_PROFIT_LOSS}
                // is_crypto={isCryptocurrency(currency)}
                // is_loss={+profit < 0}
                // is_won={+profit > 0}
                >
                    <div
                        className={classNames('dc-contract-card__indicative--movement', {
                            'dc-contract-card__indicative--movement-complete': is_sold,
                        })}
                    >
                        {status === 'profit' && <Icon icon='IcProfit' />}
                        {status === 'loss' && <Icon icon='IcLoss' />}
                    </div>
                </ContractCardItem>
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
                            is_accumulator
                            onMouseLeave={onMouseLeave}
                            removeToast={removeToast}
                            setCurrentFocus={setCurrentFocus}
                            status={status}
                        />
                    )}
                </ContractCardItem>
            </div>
            {!!is_sold && (
                <MobileWrapper>
                    <div
                        className={classNames('dc-contract-card__status', {
                            'dc-contract-card__status--accumulator-mobile-positions': is_positions,
                        })}
                    >
                        <ResultStatusIcon getCardLabels={getCardLabels} is_contract_won={+profit > 0} />
                    </div>
                </MobileWrapper>
            )}
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
    is_positions: PropTypes.bool,
    is_mobile: PropTypes.bool,
    has_progress_slider: PropTypes.bool,
    is_sold: PropTypes.bool,
    onMouseLeave: PropTypes.func,
    removeToast: PropTypes.func,
    setCurrentFocus: PropTypes.func,
    status: PropTypes.string,
};

export default React.memo(TurbosOpenCardBody);
