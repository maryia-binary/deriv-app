import React from 'react';
import EmptyMessage from 'AppV2/Components/EmptyMessage';
import { TEmptyMessageProps } from 'AppV2/Components/EmptyMessage/empty-message';
import { TPortfolioPosition } from '@deriv/stores/types';
import { ContractCardList } from 'AppV2/Components/ContractCard';
import { observer } from 'mobx-react';
import { useStore } from '@deriv/stores';

type TPositionsContentProps = Omit<TEmptyMessageProps, 'noMatchesFound'> & {
    positions?: TPortfolioPosition[];
};

const PositionsContent = observer(({ isClosedTab, onRedirectToTrade, positions = [] }: TPositionsContentProps) => {
    const { client, common, portfolio } = useStore();
    const { currency } = client;
    const { server_time } = common;
    const { onClickCancel, onClickSell } = portfolio;
    const noMatchesFound = false; // TODO: Implement noMatchesFound state change based on filter results
    return (
        <div className={`positions-page__${isClosedTab ? 'closed' : 'open'}`}>
            {positions.length ? (
                <ContractCardList
                    currency={currency}
                    onCancel={onClickCancel}
                    onClose={onClickSell}
                    positions={positions}
                    serverTime={server_time}
                />
            ) : (
                <EmptyMessage
                    isClosedTab={isClosedTab}
                    onRedirectToTrade={onRedirectToTrade}
                    noMatchesFound={noMatchesFound}
                />
            )}
        </div>
    );
});

export default PositionsContent;
