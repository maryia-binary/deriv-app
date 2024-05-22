import { getContractPath } from '@deriv/shared';
import { TPortfolioPosition } from '@deriv/stores/types';
import React from 'react';
import ContractCard from './contract-card';

export type TContractCardListProps = {
    currency?: string;
    onClickCancel?: (contractId: number) => void;
    onClickSell?: (contractId: number) => void;
    positions?: TPortfolioPosition[];
};

const ContractCardList = ({ currency, onClickCancel, onClickSell, positions = [] }: TContractCardListProps) => {
    // TODO: make it work not only with an open position data but also with a profit_table transaction data
    const timeoutIds = React.useRef<Array<ReturnType<typeof setTimeout>>>([]);

    React.useEffect(() => {
        const timers = timeoutIds.current;
        return () => {
            if (timers.length) {
                timers.forEach(id => clearTimeout(id));
            }
        };
    }, []);

    const handleClose = (id: number, shouldCancel?: boolean) => {
        const timeoutId = setTimeout(() => {
            shouldCancel ? onClickCancel?.(id) : onClickSell?.(id);
        }, 160);
        timeoutIds.current.push(timeoutId);
    };

    if (!positions.length) return null;
    return (
        <div className='contract-card-list'>
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
