import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Common {

  router = inject(Router)
  private alertMessageSubject = new BehaviorSubject<{ type: string; text: string } | null>(null);
  alertMessage$ = this.alertMessageSubject.asObservable();


  showAlert(type: 'success' | 'danger' | 'warning' | 'info', text: string) {
    this.alertMessageSubject.next({ type, text });

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  showAlertWithDelay(type: 'success' | 'danger' | 'warning' | 'info', text: string, route?: string) {
    this.showAlert(type, text);

    if (route) {
      setTimeout(() => {
        this.router.navigate([route]);
      }, 3000);
    }
  }

  clearAlert() {
    this.alertMessageSubject.next(null);
  }

  private scripts = [
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

  async reloadScripts() {
    document
      .querySelectorAll('script[data-dynamic-script]')
      .forEach(script => script.remove());

    for (const src of this.scripts) {
      await this.loadScript(src);
    }
  }

  private loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');

      script.src = src;
      script.async = false;
      script.setAttribute('data-dynamic-script', 'true');

      script.onload = () => resolve();
      script.onerror = () => reject();

      document.body.appendChild(script);
    });
  }
}
