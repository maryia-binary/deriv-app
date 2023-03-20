import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { isHighLow, getCurrentTick, isBot, getSubType, isTurbosContract, getTimePercentage } from '@deriv/shared';
import ContractTypeCell from './contract-type-cell.jsx';
import Button from '../../button';
import Icon from '../../icon';
import Text from '../../text';
import ProgressSlider from '../../progress-slider';
import DesktopWrapper from '../../desktop-wrapper';
import MobileWrapper from '../../mobile-wrapper';
import ProgressBar from '../../progress-bar';

const ContractCardHeader = ({
    contract_info,
    display_name,
    getCardLabels,
    getContractTypeDisplay,
    has_progress_slider,
    id,
    is_mobile,
    is_sold: is_contract_sold,
    is_sell_requested,
    is_valid_to_sell,
    onClickSell,
    server_time,
    duration_type,
    is_open_positions,
}) => {
    const current_tick = contract_info.tick_count ? getCurrentTick(contract_info) : null;
    const { underlying, multiplier, contract_type, shortcode, purchase_time, date_expiry, date_start, tick_count } =
        contract_info;
    const { is_pathname_bot } = isBot();
    const is_sold = !!contract_info.is_sold || is_contract_sold;
    const is_turbos = isTurbosContract(contract_type);
    const progress_value = getTimePercentage(server_time, date_start, date_expiry) / 100;

    const contract_type_list_info = [
        {
            is_param_displayed: multiplier,
            displayed_param: `x${multiplier}`,
        },
        {
            is_param_displayed: isTurbosContract(contract_type),
            displayed_param: getSubType(contract_type),
        },
    ];

    const displayed_trade_param =
        contract_type_list_info.find(contract_type_item_info => contract_type_item_info.is_param_displayed)
            ?.displayed_param || '';

    return (
        <React.Fragment>
            <div
                className={classNames('dc-contract-card__grid', 'dc-contract-card__grid-underlying-trade', {
                    'dc-contract-card__grid-underlying-trade--mobile': is_mobile && !multiplier && !is_turbos,
                    'dc-contract-card__grid-underlying-trade--trader': !is_pathname_bot,
                    'dc-contract-card__grid-underlying-trade--trader--turbos': is_turbos && is_open_positions,
                    'dc-contract-card__grid-underlying-trade--trader--turbos-sold': is_turbos && is_sold,
                })}
            >
                <div id='dc-contract_card_underlying_label' className='dc-contract-card__underlying-name'>
                    <Icon icon={underlying ? `IcUnderlying${underlying}` : 'IcUnknown'} width={40} size={32} />
                    {!is_open_positions && (
                        <Text size='xxs' className='dc-contract-card__symbol' weight='bold'>
                            {display_name || contract_info.display_name}
                        </Text>
                    )}
                </div>
                <div id='dc-contract_card_type_label' className='dc-contract-card__type'>
                    <ContractTypeCell
                        displayed_trade_param={displayed_trade_param}
                        getContractTypeDisplay={getContractTypeDisplay}
                        is_high_low={isHighLow({ shortcode })}
                        type={contract_type}
                        is_open_positions={is_open_positions}
                    />
                </div>
                <div className='dc-contract-card__type--progress-bar'>
                    {is_turbos && is_open_positions && <ProgressBar label={duration_type} value={progress_value} />}
                </div>
                <MobileWrapper>
                    {is_valid_to_sell ? (
                        <CSSTransition
                            in={!!is_valid_to_sell}
                            timeout={250}
                            classNames={{
                                enter: 'dc-contract-card__sell-button--enter',
                                enterDone: 'dc-contract-card__sell-button--enter-done',
                                exit: 'dc-contract-card__sell-button--exit',
                            }}
                            unmountOnExit
                        >
                            <div className='dc-contract-card__sell-button-mobile'>
                                <Button
                                    id={`dc_contract_card_${id}_button`}
                                    className={classNames('dc-btn--sell', {
                                        'dc-btn--loading': is_sell_requested,
                                    })}
                                    is_disabled={!is_valid_to_sell || is_sell_requested}
                                    text={getCardLabels().SELL}
                                    onClick={() => onClickSell(id)}
                                    secondary
                                />
                            </div>
                        </CSSTransition>
                    ) : null}
                </MobileWrapper>
            </div>
            <MobileWrapper>
                <div className='dc-progress-slider--completed' />
            </MobileWrapper>
            <DesktopWrapper>
                {(!has_progress_slider || !!is_sold) && <div className='dc-progress-slider--completed' />}
                {has_progress_slider && !is_sold && (
                    <ProgressSlider
                        current_tick={current_tick}
                        expiry_time={date_expiry}
                        getCardLabels={getCardLabels}
                        is_loading={false}
                        server_time={server_time}
                        start_time={purchase_time}
                        ticks_count={tick_count}
                    />
                )}
            </DesktopWrapper>
        </React.Fragment>
    );
};

ContractCardHeader.propTypes = {
    contract_info: PropTypes.object,
    display_name: PropTypes.string,
    getCardLabels: PropTypes.func,
    getContractTypeDisplay: PropTypes.func,
    has_progress_slider: PropTypes.bool,
    is_mobile: PropTypes.bool,
    is_sold: PropTypes.bool,
    is_sell_requested: PropTypes.bool,
    is_valid_to_sell: PropTypes.bool,
    onClickSell: PropTypes.func,
    server_time: PropTypes.object,
    duration_type: PropTypes.string,
    is_open_positions: PropTypes.bool,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ContractCardHeader;
