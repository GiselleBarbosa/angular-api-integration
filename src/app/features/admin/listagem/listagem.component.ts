import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';

import { ButtonModule } from 'primeng/button';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiFuncionariosService } from 'src/app/core/services/api-funcionarios.service';
import { Message } from 'primeng/api';
import { take } from 'rxjs';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
  standalone: true,
  imports: [
    PanelModule,
    RouterLink,
    TableModule,
    ButtonModule,
    NgClass,
    NgIf,
    NgFor,
    FormsModule,
    AsyncPipe,
    MessagesModule,
  ],
})
export class ListagemComponent implements OnInit {
  private ApiFuncionariosService = inject(ApiFuncionariosService);
  private router = inject(Router);

  public usuarios$ = this.ApiFuncionariosService.usuarios$;

  public error$ = this.ApiFuncionariosService.error$;

  public usuarioAutenticado = 'Administrador';

  public mensagemErroApi!: Message[];

  public titulosDaTabela = [
    'cpf',
    'Nome completo',
    'Data nascimento',
    'Telefone',
    'Email',
    'Status',
    'Salario',
    'Dpto',
    'Editar',
    'Remover',
  ];

  public ngOnInit(): void {
    this.ApiFuncionariosService.listaTodosUsuarios();

    this.error$.subscribe(mensagem => {
      this.mensagemErroApi = [
        {
          severity: 'error',
          summary: mensagem,
        },
      ];
    });
  }

  public navegarParaEdicaoUsuario(cpf: string): void {
    this.router.navigate([`administrador/lista-funcionarios/edicao/${cpf}`]);
  }

  public removerUsuario(cpf: string): void {
    this.ApiFuncionariosService.removerUsuario(cpf)
      .pipe(take(1))
      .subscribe(() => this.ApiFuncionariosService.listaTodosUsuarios());
  }

  public recarregarPagina(): void {
    location.reload();
  }
}
