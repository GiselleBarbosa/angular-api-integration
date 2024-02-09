import { Component } from '@angular/core';
import { ListagemComponent } from 'src/app/features/listagem/listagem.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [ListagemComponent],
})
export class HomeComponent {}
