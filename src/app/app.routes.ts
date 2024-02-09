import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./template/home/home.component').then((c) => c.HomeComponent),
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];
