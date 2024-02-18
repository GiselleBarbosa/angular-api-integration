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

export const funcionariosRoutes: Routes = [
  {
    path: 'cadastro',
    component: CadastroComponent,
    title: 'Cadastro de usuarios',
  },

  {
    path: 'funcionario-perfil',
    component: PerfilComponent,
    title: 'Perfil do funcionario',
  },
];

export const administradorRoutes: Routes = [
  {
    path: 'lista-funcionarios',
    component: ListagemComponent,
    title: 'Administrador - Lista de funcionarios',
  },

  {
    path: 'lista-funcionarios/edicao/:cpf',
    component: EdicaoComponent,
    title: 'Administrador - Edição de funcionarios',
  },

  {
    path: 'adminstrador/perfil',
    component: PerfilComponent,
    title: 'Administrador - Lista de funcionarios',
  },

  {
    path: 'adminstrador/perfil/edicao',
    component: EdicaoComponent,
    title: 'Administrador - Edicao de Perfil ADMINISTRADOR',
  },
];
