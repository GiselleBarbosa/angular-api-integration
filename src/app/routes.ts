import { Routes } from '@angular/router';
import { LoginComponent } from './features/autenticacao/login/login.component';
import { CadastroComponent } from './features/usuarios/cadastro/cadastro.component';
import { PerfilComponent } from './features/usuarios/perfil/perfil.component';
import { HomeComponent } from './features/home/home.component';
import { ListagemComponent } from './features/admin/listagem/listagem.component';
import { EdicaoComponent } from './features/admin/edicao/edicao.component';

export const homeRoute: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Página inicíal',
  },
];

export const autenticaticaoRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Autenticação de usuário',
  },
];

export const usuarioRoutes: Routes = [
  {
    path: 'cadastro',
    component: CadastroComponent,
    title: 'Cadastro de usuário',
  },

  {
    path: 'perfil',
    component: PerfilComponent,
    title: 'Perfil do usuário',
  },
];

export const administradorRoutes: Routes = [
  {
    path: 'lista-usuarios',
    component: ListagemComponent,
    title: 'Administrador - Lista de usuarios',
  },

  {
    path: 'lista-usuarios/edicao/:cpf',
    component: EdicaoComponent,
    title: 'Administrador - Edição de usuarios',
  },
];
