import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';

import { ButtonModule } from 'primeng/button';
import { AsyncPipe, CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiFuncionariosService } from 'src/app/core/services/api-funcionarios.service';
import { Message } from 'primeng/api';
import { take } from 'rxjs';
import { OcultarCpfPipe } from 'src/app/core/pipes/ocultar-cpf/ocultar-cpf.pipe';

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
    CurrencyPipe,
    OcultarCpfPipe,
  ],
})
export class ListagemComponent implements OnInit {
  private ApiFuncionariosService = inject(ApiFuncionariosService);
  private router = inject(Router);

  public funcionarios$ = this.ApiFuncionariosService.funcionarios$;

  public error$ = this.ApiFuncionariosService.error$;

  public funcionarioAutenticado = 'Administrador';

  public mensagemErroApi!: Message[];

  public titulosDaTabela = [
    '',
    'CPF',
    'Nome completo',
    'Telefone',
    'Email',
    'Salario',
    'Editar',
    'Remover',
  ];

  public ngOnInit(): void {
    this.ApiFuncionariosService.listaTodosFuncionarios();

    this.error$.subscribe(mensagem => {
      this.mensagemErroApi = [
        {
          severity: 'error',
          summary: mensagem,
          detail:
            'Não foi possível exibir a lista de funcionários. Por favor, tente novamente mais tarde',
        },
      ];
    });
  }

  public navegarParaEdicaoFuncionario(cpf: string): void {
    this.router.navigate([`administrador/lista-funcionarios/edicao/${cpf}`]);
  }

  public removerFuncionario(cpf: string): void {
    this.ApiFuncionariosService.removerFuncionario(cpf)
      .pipe(take(1))
      .subscribe(() => this.ApiFuncionariosService.listaTodosFuncionarios());
  }

  public recarregarPagina(): void {
    location.reload();
  }
}
