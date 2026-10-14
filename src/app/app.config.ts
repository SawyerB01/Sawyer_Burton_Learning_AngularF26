import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../models/app-config';
import { MockMusic } from './services/mock-music';
import { Music } from './services/music';


export const appConfig: ApplicationConfig = {
providers: [
  provideBrowserGlobalErrorListeners(),
  provideRouter(routes),
  provideHttpClient(),

  {
    provide: APP_CONFIG,
    useValue: {
      apiBaseUrl: 'https://placeholder.example.com/api',
      defaultCategory: 'all'
    }
  },

  // the swap
  { provide: Music, useClass: MockMusic }
]
};

