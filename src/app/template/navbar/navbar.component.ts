import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [ToolbarModule, ButtonModule, RouterLink, CommonModule],
})
export class NavbarComponent {
  public teste(pagina: string): void {
    console.log(pagina);
  }
}
