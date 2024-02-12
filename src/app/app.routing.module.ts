import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadChildren: () => import('./routes').then(rotas => rotas.homeRoute),
  },

  {
    path: 'autenticacao',
    loadChildren: () => import('./routes').then(rotas => rotas.autenticaticaoRoutes),
  },

  {
    path: 'administrador',
    loadChildren: () => import('./routes').then(rotas => rotas.administradorRoutes),
  },

  {
    path: 'usuarios',
    loadChildren: () => import('./routes').then(rotas => rotas.usuarioRoutes),
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
