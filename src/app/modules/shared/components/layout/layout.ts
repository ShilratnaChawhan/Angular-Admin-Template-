import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
 ngOnInit(): void {
    this.loadScripts();
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
