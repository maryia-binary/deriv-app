import { ContractType } from 'Stores/Modules/Trading/Helpers/contract-type';
import { TTradeStore } from 'Types';

type TContractTypesList = {
    [key: string]: {
        name: string;
        categories: Array<{
            text: string;
            value: string;
        }>;
    };
};

type TContractValues = Pick<
    TTradeStore,
    | 'form_components'
    | 'basis_list'
    | 'basis'
    | 'trade_types'
    | 'start_date'
    | 'start_dates_list'
    | 'contract_start_type'
    | 'barrier_count'
    | 'barrier_1'
    | 'barrier_2'
    | 'duration_unit'
    | 'duration_units_list'
    | 'duration_min_max'
    | 'expiry_type'
    | 'accumulator_range_list'
    | 'multiplier_range_list'
    | 'cancellation_range_list'
>;

type TOnChangeContractTypeList = (params: { contract_types_list: TContractTypesList; contract_type: string }) => {
    contract_type: string;
};

export const onChangeContractTypeList: TOnChangeContractTypeList = ({ contract_types_list, contract_type }) => {
    return ContractType.getContractType(contract_types_list, contract_type);
};
export const onChangeContractType = (store: TTradeStore): TContractValues => {
    return ContractType.getContractValues(store);
};
