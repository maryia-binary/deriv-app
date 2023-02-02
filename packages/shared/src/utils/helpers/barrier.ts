type TContract = {
    high_barrier?: null | string;
    barriers?: number;
    barrier?: null | string;
    low_barrier?: null | string;
    expiry_type: string;
};

type TObjectBarrier = Pick<TContract, 'barrier' | 'low_barrier' | 'high_barrier'>;

type TAccumulatorBarriers = {
    high_barrier: string;
    low_barrier: string;
};

export const buildBarriersConfig = (contract: TContract, barriers = { count: contract.barriers }) => {
    if (!contract.barriers) {
        return undefined;
    }

    const obj_barrier: TObjectBarrier = {};

    ['barrier', 'low_barrier', 'high_barrier'].forEach(field => {
        if (field in contract) obj_barrier[field as keyof TObjectBarrier] = contract[field as keyof TObjectBarrier];
    });

    return Object.assign(barriers || {}, {
        [contract.expiry_type]: obj_barrier,
    });
};

/**
 * Here we calculate and return Accumulator Barriers for DTrader page for the reason that
    we can't use barriers from proposal response because proposal is received not on every tick, and
    we can't use barriers from proposal_open_contract for an ongoing contract because
    proposal_open_contract response is a separate API call which comes too late,
    only after we receive the current crossing tick from ticks_history call.
    This calculation is performed only on DTrader page for the purpose of ticks/barriers visual synchronization.
 * @param { number } tick_size_barrier
 * @param { number } previous_spot 
 * @param { number } spot_pip_size 
 * @returns 
 */
export const getAccumulatorBarriers = (
    tick_size_barrier: number,
    previous_spot: number,
    spot_pip_size: number
): TAccumulatorBarriers => {
    const high_barrier = (1 + tick_size_barrier) * previous_spot;
    const low_barrier = (1 - tick_size_barrier) * previous_spot;
    // spot pip size + 1 extra digit = ACCU barriers pip size (e.g. 3), which we convert to precision (e.g. 0.001):
    const accu_barriers_pip_size = spot_pip_size + 1;
    const precision = 10 ** -accu_barriers_pip_size;
    return {
        high_barrier: (Math.ceil(high_barrier / precision) * precision).toFixed(accu_barriers_pip_size),
        low_barrier: (Math.floor(low_barrier / precision) * precision).toFixed(accu_barriers_pip_size),
    };
};

export const getBarrierPipSize = (barrier: string) => {
    if (Math.floor(+barrier) === +barrier || barrier.length < 1 || +barrier % 1 === 0 || isNaN(+barrier)) return 0;
    return barrier.toString().split('.')[1].length || 0;
};
