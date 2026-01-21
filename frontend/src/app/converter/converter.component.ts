import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { CurrencyService, ConversionResponse } from '../currency.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent {
  from = 'USD';
  to = 'BRL';
  amount = 100;

  result: ConversionResponse | null = null;
  loading = false;
  error = '';

  currencies = [
    { code: 'USD', name: 'Dólar Americano' },
    { code: 'BRL', name: 'Real Brasileiro' },
    { code: 'EUR', name: 'Euro' },
    { code: 'BTC', name: 'Bitcoin' },
  ];

  get fromCurrencies() {
    return this.currencies.filter((c) => c.code !== 'BRL');
  }

  get toCurrencies() {
    return this.currencies.filter((c) => c.code === 'BRL');
  }

  constructor(
    private readonly currencyService: CurrencyService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  convert() {
    const amountValue =
      typeof this.amount === 'string' ? parseFloat(this.amount) : Number(this.amount);

    this.amount = amountValue;

    if (!amountValue || amountValue <= 0 || isNaN(amountValue)) {
      this.error = 'O valor deve ser maior que zero';
      this.result = null;
      return;
    }

    if (this.loading) {
      return;
    }

    this.loading = true;
    this.error = '';
    this.result = null;

    this.currencyService
      .convert(this.from, this.to, amountValue, environment.apiKey)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: (data) => {
          this.result = data;
          this.cdr.detectChanges();
        },
        error: (err) => {
          if (err?.status === 401) this.error = 'Erro de autenticação. Verifique a API Key.';
          else if (err?.status === 400)
            this.error = 'Dados inválidos. Verifique os valores informados.';
          else this.error = 'Erro ao converter. Tente novamente.';
          this.cdr.detectChanges();
        },
      });
  }
}
