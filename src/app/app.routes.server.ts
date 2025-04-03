import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appServerConfig = {
  providers: [
    provideRouter([
      ...routes,
      { path: '**', redirectTo: '', pathMatch: 'full' } 
    ])
  ]
};