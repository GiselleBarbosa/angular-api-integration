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
      import('./template/home/home.component').then(c => c.HomeComponent),
  },
  {
    path: 'cadastro',
    loadComponent: () =>
      import('./features/cadastro/cadastro.component').then(c => c.CadastroComponent),
  },
  {
    path: 'listagem',
    loadComponent: () =>
      import('./features/listagem/listagem.component').then(c => c.ListagemComponent),
  },

  {
    path: 'edicao',
    loadComponent: () =>
      import('./features/edicao/edicao.component').then(c => c.EdicaoComponent),
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];
