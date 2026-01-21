import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ConversionResponse {
  from: string;
  to: string;
  amount: number;
  rate: number;
  result: number;
  cached: boolean;
}

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  private readonly apiUrl = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {}

  convert(
    from: string,
    to: string,
    amount: number,
    apiKey: string
  ): Observable<ConversionResponse> {
    const headers = new HttpHeaders({ 'x-api-key': apiKey });
    const url = `${this.apiUrl}/convert?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&amount=${encodeURIComponent(amount)}`;
    return this.http.get<ConversionResponse>(url, { headers });
  }
}
