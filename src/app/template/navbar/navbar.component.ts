import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [ToolbarModule, ButtonModule, RouterLink, CommonModule, SidebarComponent],
})
export class NavbarComponent implements OnInit {
  public items!: MenuItem[];

  public ngOnInit(): void {
    this.items = [
      {
        label: 'ADMINISTRADOR',
        icon: 'pi pi-database',
        styleClass: 'title',
        routerLink: 'administrador/lista-funcionarios',
        items: [],
      },

      {
        label: 'FUNCIONÁRIOS',
        icon: 'pi pi-user',
        styleClass: 'title',
        routerLink: '/funcionarios/funcionario-perfil',
        items: [],
      },
    ];
  }
}
