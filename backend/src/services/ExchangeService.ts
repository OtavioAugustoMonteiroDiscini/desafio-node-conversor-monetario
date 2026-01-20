import axios from 'axios';
import { cache } from '../cache/cache.config';

export class ExchangeService {
  static async convert(from: string, to: string, amount: number) {
    const cacheKey = `${from}_${to}_${amount}`;
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      return {
        ...cachedData,
        cached: true,
      };
    }

    const pair = `${from}-${to}`;
    const url = `https://economia.awesomeapi.com.br/json/last/${pair}`;
    const response = await axios.get(url);
    const data = response.data[pair.replace('-', '')];

    if (!data || !data.bid) {
      throw new Error('Invalid Coins');
    }

    const rate = Number(data.bid);

    if (!rate) {
      throw new Error('INVALID CURRENCY');
    }

    const result = amount * rate;

    const resultData = {
      from,
      to,
      amount,
      rate,
      result,
    };

    cache.set(cacheKey, resultData);

    return {
      ...resultData,
      cached: false,
    };
  }
}
