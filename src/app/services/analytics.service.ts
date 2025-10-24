import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  constructor() {
    // Initialize Google Analytics (from index.html script)
    if ((window as any).gtag) {
      this.logPageView(window.location.pathname);
    }
  }

  logPageView(url: string) {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'page_view', { page_path: url });
    }
  }

  logEvent(action: string, params: any = {}) {
    if ((window as any).gtag) {
      (window as any).gtag('event', action, params);
    }
  }
}
