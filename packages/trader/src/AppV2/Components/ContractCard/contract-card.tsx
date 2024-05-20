import React from 'react';

type TContractCardProps = {
    symbolName: string;
    tradeTypeName: React.ReactNode;
};

export const ContractCard = ({ symbolName, tradeTypeName }: TContractCardProps) => {
    return (
        <div>
            <div>{tradeTypeName}</div>
            <div>{symbolName}</div>
        </div>
    );
};
