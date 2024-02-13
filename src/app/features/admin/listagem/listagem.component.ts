import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

import { ButtonModule } from 'primeng/button';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiUsuariosService } from 'src/app/core/services/api-usuarios.service';

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
  ],
})
export class ListagemComponent implements OnInit {
  private apiUsuariosService = inject(ApiUsuariosService);

  public usuarios$ = this.apiUsuariosService.usuarios$;

  public administrador = 'Administrador';

  public ngOnInit(): void {
    this.apiUsuariosService.listaTodosUsuarios();
    this.usuarios$.subscribe();
  }
}
