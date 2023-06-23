type TBarrier = {
    key?: string;
    title?: string;
    color: string;
    draggable: boolean;
    hidePriceLines: boolean;
    hideOffscreenLine?: boolean;
    showOffscreenArrows?: boolean;
    isSingleBarrier: boolean;
    opacityOnOverlap?: number;
    lineStyle: string;
    hideBarrierLine: boolean;
    shade?: string;
    shadeColor?: string;
    high: string | number;
    low?: string | number;
    relative: boolean;
    onChange: (barriers: { high: string | number; low: string | number }) => void;
    onChartBarrierChange: null | ((barrier_1: string, barrier_2: string) => void);
};

export const barriersToString = (is_relative: boolean, ...barriers_list: Array<string | number>) =>
    barriers_list
        .filter(barrier => barrier !== undefined && barrier !== null)
        .map(barrier => `${is_relative && !/^[+-]/.test(`${barrier}`) ? '+' : ''}${barrier}`);

export const removeBarrier = (barriers: TBarrier[], key: string) => {
    const index = barriers.findIndex(b => b.key === key);
    if (index > -1) {
        barriers.splice(index, 1);
    }
};
