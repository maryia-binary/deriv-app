import React from 'react';
import moment from 'moment';
import { TContractInfo } from '@deriv/shared';
import { Loading } from '@deriv/components';
import { observer, useStore } from '@deriv/stores';
import { EmptyPositions, TEmptyPositionsProps } from 'AppV2/Components/EmptyPositions';
import { TPortfolioPosition } from '@deriv/stores/types';
import { ContractCardList } from 'AppV2/Components/ContractCard';
import { ContractTypeFilter, TimeFilter } from 'AppV2/Components/Filter';
import { filterPositions, getTotalPositionsProfit } from '../../Utils/positions-utils';
import { TReportsStore, useReportsStore } from '../../../../../reports/src/Stores/useReportsStores';
import TotalProfitLoss from './total-profit-loss';

type TPositionsContentProps = Omit<TEmptyPositionsProps, 'noMatchesFound'> & {
    hasButtonsDemo?: boolean;
    setHasButtonsDemo?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TClosedPosition = {
    contract_info: TReportsStore['profit_table']['data'][number];
};

const PositionsContent = observer(({ hasButtonsDemo, isClosedTab, setHasButtonsDemo }: TPositionsContentProps) => {
    const [contractTypeFilter, setContractTypeFilter] = React.useState<string[]>([]);
    const [chosenTimeFilter, setChosenTimeFilter] = React.useState<string>();
    const [filteredPositions, setFilteredPositions] = React.useState<(TPortfolioPosition | TClosedPosition)[]>([]);
    const [selectedRangeDateString, setSelectedDateRangeString] = React.useState<string>();
    const [noMatchesFound, setNoMatchesFound] = React.useState(false);

    const { common, client, portfolio } = useStore();
    const { server_time = moment() } = isClosedTab ? {} : common; // Server time is required for cards update in Open positions
    const { currency } = client;
    const { active_positions, is_active_empty, onClickCancel, onClickSell, onMount: onOpenTabMount } = portfolio;
    const {
        data,
        is_empty,
        is_loading: isLoading,
        onMount: onClosedTabMount,
        handleDateChange,
    } = useReportsStore().profit_table;
    const closedPositions = React.useMemo(() => data.map(d => ({ contract_info: d })), [data]);
    const positions = React.useMemo(
        () => (isClosedTab ? closedPositions : active_positions),
        [active_positions, isClosedTab, closedPositions]
    );
    const hasNoPositions = isClosedTab ? is_empty && !chosenTimeFilter && !selectedRangeDateString : is_active_empty;
    const shouldShowEmptyMessage = hasNoPositions || noMatchesFound;
    const shouldShowContractCards =
        isClosedTab || (filteredPositions.length && (filteredPositions[0]?.contract_info as TContractInfo)?.status);

    React.useEffect(() => {
        isClosedTab ? onClosedTabMount() : onOpenTabMount();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => setFilteredPositions(positions), [positions]);

    const handleTradeTypeFilterChange = (filterValues: string[]) => {
        setContractTypeFilter(filterValues);
        if (filterValues.length) {
            const result = filterPositions(positions, filterValues);
            setNoMatchesFound(!result.length);
            setFilteredPositions(result);
        } else {
            setNoMatchesFound(false);
            setFilteredPositions(positions);
        }
    };

    React.useEffect(() => {
        if (!positions.length && isClosedTab && (selectedRangeDateString || chosenTimeFilter)) {
            setNoMatchesFound(true);
        } else {
            setNoMatchesFound(false);
        }
    }, [selectedRangeDateString, chosenTimeFilter, positions, isClosedTab]);

    if (isLoading || (!shouldShowContractCards && !shouldShowEmptyMessage)) return <Loading />;
    return (
        <div className={`positions-page__${isClosedTab ? 'closed' : 'open'}`}>
            <div className='positions-page__container'>
                {!hasNoPositions && (
                    <div className='positions-page__filter__wrapper'>
                        {isClosedTab && (
                            <TimeFilter
                                chosenTimeFilter={chosenTimeFilter}
                                setChosenTimeFilter={setChosenTimeFilter}
                                handleDateChange={handleDateChange}
                                selectedRangeDateString={selectedRangeDateString}
                                setSelectedDateRangeString={setSelectedDateRangeString}
                                setNoMatchesFound={setNoMatchesFound}
                            />
                        )}
                        <ContractTypeFilter
                            setContractTypeFilter={filterValues => handleTradeTypeFilterChange(filterValues)}
                            contractTypeFilter={contractTypeFilter}
                        />
                    </div>
                )}
            </div>
            {shouldShowContractCards && (
                <TotalProfitLoss
                    currency={currency}
                    hasBottomAlignment={isClosedTab}
                    totalProfitLoss={getTotalPositionsProfit(filteredPositions)}
                />
            )}
            {shouldShowEmptyMessage ? (
                <EmptyPositions isClosedTab={isClosedTab} noMatchesFound={noMatchesFound} />
            ) : (
                shouldShowContractCards && (
                    <ContractCardList
                        currency={currency}
                        hasButtonsDemo={hasButtonsDemo}
                        onClickCancel={isClosedTab ? undefined : onClickCancel}
                        onClickSell={isClosedTab ? undefined : onClickSell}
                        positions={filteredPositions}
                        setHasButtonsDemo={setHasButtonsDemo}
                        serverTime={server_time}
                    />
                )
            )}
        </div>
    );
});

export default PositionsContent;
