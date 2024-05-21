import React from 'react';
import EmptyMessage from 'AppV2/Components/EmptyMessage';
import { TEmptyMessageProps } from 'AppV2/Components/EmptyMessage/empty-message';
import { TPortfolioPosition } from '@deriv/stores/types';
import { ContractCardList } from 'AppV2/Components/ContractCard';
import Filter from 'AppV2/Components/Filter';
import type { TContractCardListProps } from 'AppV2/Components/ContractCard/contract-card-list';

type TPositionsContentProps = Omit<TEmptyMessageProps, 'noMatchesFound'> &
    Pick<TContractCardListProps, 'currency' | 'onClickCancel' | 'onClickSell' | 'serverTime'> & {
        contractTypeFilter: string[] | [];
        noMatchesFound?: boolean;
        positions?: TPortfolioPosition[];
        setContractTypeFilter: React.Dispatch<React.SetStateAction<string[]>>;
    };

const PositionsContent = ({
    contractTypeFilter,
    isClosedTab,
    noMatchesFound,
    onRedirectToTrade,
    positions = [],
    setContractTypeFilter,
    ...rest
}: TPositionsContentProps) => {
    return (
        <div className={`positions-page__${isClosedTab ? 'closed' : 'open'}`}>
            <div className='positions-page__container'>
                <div className='positions-page__filter__wrapper'>
                    {(!!positions.length || (!positions.length && noMatchesFound)) && (
                        <Filter setContractTypeFilter={setContractTypeFilter} contractTypeFilter={contractTypeFilter} />
                    )}
                </div>
            </div>
            {positions.length ? (
                <ContractCardList positions={positions} {...rest} />
            ) : (
                <EmptyMessage
                    isClosedTab={isClosedTab}
                    onRedirectToTrade={onRedirectToTrade}
                    noMatchesFound={noMatchesFound}
                />
            )}
        </div>
    );
};

export default PositionsContent;
