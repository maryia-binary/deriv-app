import React from 'react';
import { observer } from 'mobx-react';
import { getContractTypeDisplay, isHighLow, isMultiplierContract, isTurbosContract } from '@deriv/shared';
import { ContractCard } from './contract-card';
import { TPortfolioPosition } from '@deriv/stores/types';

type TContractCardWrapperProps = {
    contractInfo?: TPortfolioPosition['contract_info'];
};

export const TemporaryContractCardWrapper = observer(({ contractInfo = {} }: TContractCardWrapperProps) => {
    const tradeTypeName = getContractTypeDisplay(contractInfo.contract_type ?? '', {
        isHighLow: isHighLow({ shortcode: contractInfo.shortcode }),
        showMainTitle: isMultiplierContract(contractInfo.contract_type) || isTurbosContract(contractInfo.contract_type),
    });
    return <ContractCard symbolName='Volatility 75 Index' tradeTypeName={tradeTypeName} />;
});
