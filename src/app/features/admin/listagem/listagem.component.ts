import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
  standalone: true,
  imports: [PanelModule],
})
export class ListagemComponent {}
