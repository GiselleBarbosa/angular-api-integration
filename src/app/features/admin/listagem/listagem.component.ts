import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';

import { ButtonModule } from 'primeng/button';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiUsuariosService } from 'src/app/core/services/api-usuarios.service';
import { Message } from 'primeng/api';

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
  private apiUsuariosService = inject(ApiUsuariosService);
  private router = inject(Router);

  public usuarios$ = this.apiUsuariosService.usuarios$;

  public error$ = this.apiUsuariosService.error$;

  public usuarioAutenticado = 'Administrador';

  public mensagemErroApi!: Message[];

  public titulosDaTabela = [
    'cpf',
    'Nome completo',
    'Data nascimento',
    'Telefone',
    'Email',
    'Editar',
    'Remover',
  ];

  public ngOnInit(): void {
    this.apiUsuariosService.listaTodosUsuarios();

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
    this.router.navigate([`administrador/lista-usuarios/edicao/${cpf}`]);
  }
}
