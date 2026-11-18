import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { APP_CONFIG } from '../models/app-config';
import { loadingInterceptor } from './services/loading-interceptor';
import { errorInterceptor } from './services/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, 
    withComponentInputBinding()),
    // LoadingInt. first so it still counts the req. even if errorInt. catches it midway
    provideHttpClient(
      withInterceptors([loadingInterceptor, errorInterceptor])
    ),
    {
      provide: APP_CONFIG,
      useValue: {
        apiBaseUrl: 'https://de1.api.radio-browser.info',
        defaultCategory: 'all'
      }
    }
  ]
};