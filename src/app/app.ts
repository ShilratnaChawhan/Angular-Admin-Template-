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

  private scriptsLoaded = false;

  async ngOnInit() {
    if (!this.scriptsLoaded) {
      await this.loadScripts();
      this.scriptsLoaded = true;
    }
  }

  loadScripts() {
    const scriptUrls = [
      'assets/js/bootstrap.bundle.min.js',
      'assets/js/sidebar-menu.js',
      'assets/js/quill.min.js',
      'assets/js/data-table.js',
      'assets/js/prism.js',
      'assets/js/clipboard.min.js',
      'assets/js/simplebar.min.js',
      'assets/js/apexcharts.min.js',
      'assets/js/echarts.min.js',
      'assets/js/swiper-bundle.min.js',
      'assets/js/fullcalendar.main.js',
      'assets/js/jsvectormap.min.js',
      'assets/js/world-merc.js',
      'assets/js/custom/apexcharts.js',
      'assets/js/custom/echarts.js',
      'assets/js/custom/maps.js',
      'assets/js/custom/custom.js'
    ];

    for (const url of scriptUrls) {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
    }
  }
}
