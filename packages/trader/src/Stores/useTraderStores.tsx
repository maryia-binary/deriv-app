import React from 'react';
import { useStore } from '@deriv/stores';
import TradeStore from './Modules/Trading/trade-store';

type TTextValueStrings = {
    text: string;
    value: string;
};

type TToastBoxListItem = {
    contract_category: string;
    contract_types: [
        {
            text: string;
            value: string;
        }
    ];
};

type TToastBoxObject = {
    key?: boolean;
    buy_price?: number;
    currency?: string;
    contract_type?: string;
    list?: TToastBoxListItem[];
};

type TOverrideTradeStore = Omit<
    TradeStore,
    | 'accumulator_range_list'
    | 'barrier_count'
    | 'barrier_1'
    | 'barrier_2'
    | 'basis_list'
    | 'basis'
    | 'cancellation_range_list'
    | 'contract_purchase_toast_box'
    | 'contract_start_type'
    | 'clearContractPurchaseToastBox'
    | 'duration_unit'
    | 'duration_units_list'
    | 'duration_min_max'
    | 'expiry_type'
    | 'form_components'
    | 'multiplier_range_list'
    | 'proposal_info'
    | 'start_date'
    | 'start_dates_list'
    | 'ticks_history_stats'
    | 'trade_types'
> & {
    accumulator_range_list: number[];
    basis_list: Array<TTextValueStrings>;
    basis: string;
    contract_start_type: string;
    barrier_count: number;
    barrier_1: string;
    barrier_2: string;
    contract_purchase_toast_box: TToastBoxObject;
    clearContractPurchaseToastBox: () => void;
    duration_unit: string;
    duration_units_list: Array<TTextValueStrings>;
    duration_min_max: {
        [key: string]: { min: number; max: number };
    };
    expiry_type: string;
    form_components: string[];
    multiplier_range_list: number[];
    cancellation_range_list: Array<TTextValueStrings>;
    proposal_info: {
        [key: string]: {
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
    };
    start_date: number;
    start_dates_list: Array<{ text: string; value: number }>;
    ticks_history_stats: {
        ticks_stayed_in?: number[];
    };
    trade_types: { [key: string]: string };
};

const TraderStoreContext = React.createContext<TOverrideTradeStore | null>(null);

export const TraderStoreProvider = ({ children }: React.PropsWithChildren<unknown>) => {
    const { modules } = useStore();
    // const memoizedValue = useMemo(() => new TraderStore(), []);

    return <TraderStoreContext.Provider value={modules?.trade}>{children}</TraderStoreContext.Provider>;
};

export const useTraderStore = () => {
    const store = React.useContext(TraderStoreContext);

    if (!store) {
        throw new Error('useTraderStore must be used within TraderStoreProvider');
    }

    return store;
};
