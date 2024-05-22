import React from 'react';
import classNames from 'classnames';
import { CaptionText, Text } from '@deriv-com/quill-ui';
import { useSwipeable } from 'react-swipeable';
import { IconTradeTypes, Money } from '@deriv/components';
import {
    getCardLabels,
    getCurrentTick,
    getMarketName,
    getTotalProfit,
    getTradeTypeName,
    isHighLow,
    isMultiplierContract,
    isValidToCancel,
    isValidToSell,
} from '@deriv/shared';
import { TPortfolioPosition } from '@deriv/stores/types';
import { ContractCardDuration, TContractCardDurationProps } from './contract-card-duration';
import { BinaryLink } from 'App/Components/Routes';

type TContractCardProps = TContractCardDurationProps & {
    className?: string;
    contractInfo: TPortfolioPosition['contract_info'];
    currency?: string;
    hasActionButtons?: boolean;
    id?: number;
    isSellRequested?: boolean;
    onClick?: (e?: React.MouseEvent<HTMLAnchorElement>) => void;
    onCancel?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    onClose?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    redirectTo?: string;
};

const DIRECTION = {
    LEFT: 'left',
    RIGHT: 'right',
};

const swipeConfig = {
    trackMouse: true,
    preventScrollOnSwipe: true,
};

const ContractCard = ({
    className,
    contractInfo,
    currency,
    hasActionButtons = true,
    isSellRequested,
    onCancel,
    onClick,
    onClose,
    redirectTo,
}: TContractCardProps) => {
    const [isDeleted, setIsDeleted] = React.useState(false);
    const [shouldShowButtons, setShouldShowButtons] = React.useState(false);
    const {
        buy_price,
        contract_type,
        display_name,
        profit,
        // @ts-expect-error migrate to ts
        profit_loss,
        sell_time,
        shortcode,
        tick_count,
        // @ts-expect-error migrate to ts
        underlying_symbol,
    } = contractInfo;
    const contract_main_title = getTradeTypeName(contract_type ?? '', {
        isHighLow: isHighLow({ shortcode }),
        showMainTitle: true,
    });
    const currentTick = tick_count ? getCurrentTick(contractInfo) : null;
    const tradeTypeName = `${contract_main_title} ${getTradeTypeName(contract_type ?? '', {
        isHighLow: isHighLow({ shortcode }),
    })}`.trim();
    const symbolName = display_name || getMarketName(underlying_symbol);
    const isMultiplier = isMultiplierContract(contract_type);
    const totalProfit = isMultiplierContract(contract_type) ? getTotalProfit(contractInfo) : profit ?? profit_loss;
    const validToCancel = isValidToCancel(contractInfo);
    const validToSell = isValidToSell(contractInfo) && !isSellRequested;

    const handleSwipe = (direction: string) => {
        const isLeft = direction === DIRECTION.LEFT;
        setShouldShowButtons(isLeft);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe(DIRECTION.LEFT),
        onSwipedRight: () => handleSwipe(DIRECTION.RIGHT),
        ...swipeConfig,
    });

    const handleClose = (e: React.MouseEvent<HTMLButtonElement>, shouldCancel?: boolean) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDeleted(true);
        shouldCancel ? onCancel?.(e) : onClose?.(e);
    };

    return (
        <div className={classNames('contract-card-wrapper', { deleted: isDeleted })}>
            <BinaryLink
                {...(sell_time ? {} : swipeHandlers)}
                className={classNames('contract-card', className, {
                    'show-buttons': shouldShowButtons,
                    'has-cancel-button': validToCancel,
                    lost: Number(totalProfit) < 0,
                    won: Number(totalProfit) > 0,
                })}
                onClick={onClick}
                onDragStart={e => e.preventDefault()}
                to={redirectTo}
            >
                <div className='body'>
                    <div className='details'>
                        <IconTradeTypes className='trade-type__icon' type={contract_type ?? ''} size={32} />
                        <div className='title'>
                            <Text className='trade-type' size='sm'>
                                {tradeTypeName}
                            </Text>
                            <CaptionText className='symbol' size='sm'>
                                {symbolName}
                            </CaptionText>
                        </div>
                        <CaptionText className='stake' size='sm'>
                            <Money amount={buy_price} currency={currency} show_currency />
                        </CaptionText>
                    </div>
                    <div className='status-and-profit'>
                        {sell_time ? (
                            <CaptionText className='status'>{getCardLabels().CLOSED}</CaptionText>
                        ) : (
                            <ContractCardDuration
                                currentTick={currentTick}
                                hasNoAutoExpiry={isMultiplier}
                                tick_count={tick_count}
                                {...contractInfo}
                            />
                        )}
                        <Text className='total-profit' size='sm'>
                            <Money amount={totalProfit} currency={currency} has_sign show_currency />
                        </Text>
                    </div>
                </div>
                {!sell_time && hasActionButtons && (
                    <div className='buttons'>
                        {validToCancel && (
                            <button
                                className={classNames('icon', 'cancel')}
                                aria-label='cancel'
                                disabled={Number(profit) >= 0}
                                onClick={e => handleClose(e, true)}
                            >
                                <CaptionText bold>{getCardLabels().CANCEL}</CaptionText>
                            </button>
                        )}
                        <button
                            className={classNames('icon', 'close')}
                            aria-label='close'
                            disabled={!validToSell}
                            onClick={handleClose}
                        >
                            <CaptionText bold>{getCardLabels().CLOSE}</CaptionText>
                        </button>
                    </div>
                )}
            </BinaryLink>
        </div>
    );
};

export default ContractCard;
