import { Routes } from '@angular/router';
import { LoginComponent } from './features/autenticacao/login/login.component';
import { CadastroComponent } from './features/funcionarios/cadastro/cadastro.component';
import { PerfilComponent } from './features/funcionarios/perfil/perfil.component';
import { HomeComponent } from './features/home/home.component';
import { ListagemComponent } from './features/admin/listagem/listagem.component';
import { EdicaoComponent } from './features/admin/edicao/edicao.component';

export const homeRoute: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Página inicial',
  },
];

export const autenticaticaoRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Autenticação de funcionário',
  },
];

export const funcionariosRoutes: Routes = [
  {
    path: 'cadastro',
    component: CadastroComponent,
    title: 'Cadastro de funcionários',
  },

  {
    path: 'funcionario-perfil',
    component: PerfilComponent,
    title: 'Perfil do funcionário',
  },
];

export const administradorRoutes: Routes = [
  {
    path: 'lista-funcionarios',
    component: ListagemComponent,
    title: 'Admin | Lista de funcionários',
  },

  {
    path: 'lista-funcionarios/edicao/:cpf',
    component: EdicaoComponent,
    title: 'Admin | Edição de funcionários',
  },

  {
    path: 'adminstrador/perfil',
    component: PerfilComponent,
    title: 'Admin | Lista de funcionários',
  },

  {
    path: 'adminstrador/perfil/edicao',
    component: EdicaoComponent,
    title: 'Administrador - Edição de Perfil ADMINISTRADOR',
  },
];
