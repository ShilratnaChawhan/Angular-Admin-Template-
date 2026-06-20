import { Component, signal } from '@angular/core';
import { Common } from './services/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-UI');
 alertMessage: { type: string; text: string } | null = null;

  constructor(private alertService: Common) {
    this.alertService.alertMessage$.subscribe((message) => {
      this.alertMessage = message;
    });
  }
}
