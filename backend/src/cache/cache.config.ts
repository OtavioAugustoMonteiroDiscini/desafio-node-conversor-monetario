import NodeCache from "node-cache";

const TimeCache = 120 * 1000;

export const Cache = new NodeCache({
    stdTTL: TimeCache,
    checkperiod: TimeCache * 0.2,
    useClones: false,
});

export const GetCacheKey = (from: string, to: string): string => {
    return `${from.toUpperCase()} - ${to.toUpperCase()}`;
}
