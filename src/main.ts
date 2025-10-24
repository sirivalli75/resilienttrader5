import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { AnalyticsService } from './app/services/analytics.service';

bootstrapApplication(AppComponent, appConfig)
  .then(ref => {
    ref.injector.get(AnalyticsService);
  })
  .catch(err => console.error(err));
