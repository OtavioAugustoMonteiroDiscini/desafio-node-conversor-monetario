import { Request, Response } from 'express';
import { ExchangeService } from '../services/ExchangeService';

export class ConvertController {
  static async handle(req: Request, res: Response) {
    try {
      const { from, to, amount } = req.query;

      if (!from || !to || !amount) {
        return res.status(400).json({
          error: 'Missing query parameters',
        });
      }

      const numericAmount = Number(amount);

      if (isNaN(numericAmount) || numericAmount <= 0) {
        return res.status(400).json({
          error: 'Invalid amount',
        });
      }

      const result = await ExchangeService.convert(
        String(from).toUpperCase(),
        String(to).toUpperCase(),
        numericAmount
      );

      return res.json(result);
    } catch (error) {
      console.error('Convert error:', error);
      return res.status(500).json({
        error: 'Internal error',
      });
    }
  }
}
