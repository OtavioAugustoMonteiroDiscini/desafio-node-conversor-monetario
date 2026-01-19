export interface ConversionRequest{
    from: string;
    to: string;
    amount: number;
}

export interface ConversionResponse{
    from: string;
    to: string;
    amount: number;
    success: boolean;
    convertedAmount: number;
    exchangeRate: number;
    source: 'api' | 'cache';
    timestamp: string;
}

export interface ErrorResponse{
    success: false;
    error: string;
    details: string;
}
