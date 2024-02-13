import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
  standalone: true,
  imports: [PanelModule, RouterLink],
})
export class ListagemComponent {
  public administrador = 'Administrador';
}
