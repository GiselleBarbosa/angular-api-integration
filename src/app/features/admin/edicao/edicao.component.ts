import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ApiUsuariosService } from 'src/app/core/services/api-usuarios.service';

@Component({
  selector: 'app-edicao',
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
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.scss'],
})
export class EdicaoComponent implements OnInit {
  private apiUsuariosService = inject(ApiUsuariosService);

  public ngOnInit(): void {
    console.log('iniciado componente de edicao');
  }
}
