import { Component, signal } from '@angular/core';
import { Common } from './services/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-UI');
  alertMessage: { type: string; text: string } | null = null;

  constructor(private router: Router, private common: Common) {
    this.common.alertMessage$.subscribe((message) => {
      this.alertMessage = message;
    });
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.common.reloadScripts();
      });
  }
}
