import { getContractPath } from '@deriv/shared';
import { TPortfolioPosition } from '@deriv/stores/types';
import React from 'react';
import ContractCard from './contract-card';
import classNames from 'classnames';

export type TContractCardListProps = {
    currency?: string;
    hasButtonsDemo?: boolean;
    onClickCancel?: (contractId: number) => void;
    onClickSell?: (contractId: number) => void;
    positions?: TPortfolioPosition[];
    setHasButtonsDemo?: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContractCardList = ({
    currency,
    hasButtonsDemo,
    onClickCancel,
    onClickSell,
    positions = [],
    setHasButtonsDemo,
}: TContractCardListProps) => {
    // TODO: make it work not only with an open position data but also with a profit_table transaction data
    const closedCardsTimeouts = React.useRef<Array<ReturnType<typeof setTimeout>>>([]);

    React.useEffect(() => {
        const timers = closedCardsTimeouts.current;
        const demoTimeout = setTimeout(() => setHasButtonsDemo?.(false), 720);
        return () => {
            if (timers.length) {
                timers.forEach(id => clearTimeout(id));
            }
            if (demoTimeout) clearTimeout(demoTimeout);
        };
    }, []);

    const handleClose = (id: number, shouldCancel?: boolean) => {
        const timeoutId = setTimeout(() => {
            shouldCancel ? onClickCancel?.(id) : onClickSell?.(id);
        }, 160);
        closedCardsTimeouts.current.push(timeoutId);
    };

    if (!positions.length) return null;
    return (
        <div
            className={classNames('contract-card-list', {
                'contract-card-list--has-buttons-demo': hasButtonsDemo && !positions[0].contract_info.sell_time,
            })}
        >
            {positions.map(({ id, is_sell_requested, contract_info }) => {
                return (
                    <ContractCard
                        key={id ?? contract_info.contract_id}
                        contractInfo={contract_info}
                        currency={currency}
                        id={id ?? contract_info.contract_id}
                        isSellRequested={is_sell_requested}
                        onCancel={() => id && handleClose?.(id, true)}
                        onClose={() => id && handleClose?.(id)}
                        redirectTo={getContractPath(id ?? contract_info.contract_id)}
                    />
                );
            })}
        </div>
    );
};

export default ContractCardList;
