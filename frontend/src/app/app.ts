import { Component, signal } from '@angular/core';
import { ConverterComponent } from './converter/converter.component';

@Component({
  selector: 'app-root',
  imports: [ConverterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('conversor-frontend');
}
