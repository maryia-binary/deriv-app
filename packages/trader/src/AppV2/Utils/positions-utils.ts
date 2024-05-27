import { getSupportedContracts, getTotalProfit, isHighLow, isMultiplierContract } from '@deriv/shared';
import { TPortfolioPosition } from '@deriv/stores/types';
import { TClosedPosition } from 'AppV2/Containers/Positions/positions-content';

export const filterPositions = (positions: (TPortfolioPosition | TClosedPosition)[], filter: string[]) => {
    // Split contract type names with '/' (e.g. Rise/Fall)
    const splittedFilter = filter.map(option => (option.includes('/') ? option.split('/') : option)).flat();

    //TODO: Create own config instead of getSupportedContracts
    return positions.filter(({ contract_info }) => {
        const config = getSupportedContracts(isHighLow({ shortcode: contract_info.shortcode }))[
            contract_info.contract_type as keyof ReturnType<typeof getSupportedContracts>
        ];

        return splittedFilter.includes('main_title' in config ? config.main_title : config.name);
    });
};

export const getProfit = (contract_info: TPortfolioPosition['contract_info'] | TClosedPosition['contract_info']) => {
    return (
        (contract_info as TClosedPosition['contract_info']).profit_loss ??
        (isMultiplierContract(contract_info.contract_type)
            ? getTotalProfit(contract_info as TPortfolioPosition['contract_info'])
            : (contract_info as TPortfolioPosition['contract_info']).profit)
    );
};

export const getTotalPositionsProfit = (positions: (TPortfolioPosition | TClosedPosition)[]) => {
    return positions.reduce((sum, { contract_info }) => sum + Number(getProfit(contract_info)), 0);
};
