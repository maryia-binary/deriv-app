import { ContractType } from 'Stores/Modules/Trading/Helpers/contract-type';
import { TContractTypesList, TContractValues, TTradeStore } from 'Types';

type TOnChangeContractTypeList = (params: { contract_types_list: TContractTypesList; contract_type: string }) => {
    contract_type: string;
};

export const onChangeContractTypeList: TOnChangeContractTypeList = ({ contract_types_list, contract_type }) => {
    return ContractType.getContractType(contract_types_list, contract_type);
};
export const onChangeContractType = (store: TTradeStore): TContractValues => {
    return ContractType.getContractValues(store);
};
