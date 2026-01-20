import NodeCache from 'node-cache';

const TimeCache = 120;

export const cache = new NodeCache({
  stdTTL: TimeCache,
  checkperiod: TimeCache * 0.2,
  useClones: false,
});
