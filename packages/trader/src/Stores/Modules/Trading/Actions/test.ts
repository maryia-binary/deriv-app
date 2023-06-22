import { TicksStreamResponse } from '@deriv/api-types';
import { WS } from '@deriv/shared';
import { TError } from 'Types';

type TCallback = (data: string) => void;
/* This action does not modify state directlly.
 * The payload will be the callback that get's called for each tick
 */
let cb: TCallback;
const ticksCallback = (response: TicksStreamResponse) => {
    const data: string = response.error
        ? (response.error as TError).message
        : `${new Date(Number(response.tick?.epoch) * 1000).toUTCString()}: ${response.tick?.quote}`;
    cb(data);
};

export const getTicks = function ({ symbol }: { symbol: string }, callback: TCallback) {
    cb = callback;
    WS.forgetAll('ticks').then(() => {
        WS.subscribeTicks(symbol, ticksCallback);
    });
    return {};
};
