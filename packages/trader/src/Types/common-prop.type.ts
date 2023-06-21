import { useTraderStore } from 'Stores/useTraderStores';

export type TProposalTypeInfo = {
    has_error?: boolean;
    id: string;
    has_increased?: boolean;
    message?: string;
    cancellation?: {
        ask_price: number;
        date_expiry: number;
    };
    growth_rate?: number;
    returns?: string;
    stake: string;
};

export type TContractTypesList = {
    [key: string]: {
        name: string;
        categories: Array<{
            text: string;
            value: string;
        }>;
    };
};

export type TContractValues = Pick<
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

export type TTradeStore = ReturnType<typeof useTraderStore>;
