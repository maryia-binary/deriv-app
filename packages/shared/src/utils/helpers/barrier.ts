type TContract = {
    high_barrier?: null | string;
    barriers?: number;
    barrier?: null | string;
    low_barrier?: null | string;
    expiry_type: string;
};

type TObjectBarrier = Pick<TContract, 'barrier' | 'low_barrier' | 'high_barrier'>;

type TAccumulatorBarriers = {
    high_barrier: number;
    low_barrier: number;
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

export const getAccumulatorBarriers = (
    tick_size_barrier: number,
    previous_spot: number,
    barrier_pip_size: number
): TAccumulatorBarriers => {
    const high_barrier = (1 + tick_size_barrier) * previous_spot;
    const low_barrier = (1 - tick_size_barrier) * previous_spot;
    // convert barrier_pip_size (3) into precision (0.001):
    const precision = 10 ** -barrier_pip_size;
    return {
        high_barrier: Math.ceil(high_barrier / precision) * precision,
        low_barrier: Math.floor(low_barrier / precision) * precision,
    };
};

export const getBarrierPipSize = (barrier: string) => {
    if (Math.floor(+barrier) === +barrier || barrier.length < 1 || +barrier % 1 === 0 || isNaN(+barrier)) return 0;
    return barrier.toString().split('.')[1].length || 0;
};
