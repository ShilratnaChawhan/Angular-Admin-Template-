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


  //global alert
  showAlert(type: 'success' | 'danger' | 'warning' | 'info', text: string) {
    this.alertMessageSubject.next({ type, text });

    // Auto-hide the alert after 3 seconds
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

}
