import { Component } from '@angular/core';
import { ListagemComponent } from 'src/app/features/listagem/listagem.component';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [ListagemComponent, PanelModule],
})
export class HomeComponent {}
