import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [ToolbarModule, RouterLink, NgIf],
})
export class FooterComponent {
  public currentYear: number;

  constructor() {
    const date = new Date();
    this.currentYear = date.getFullYear();
  }

  public openLinkedin(): void {
    window.open('https://www.linkedin.com/in/gisellebarb/', '_blank');
  }

  public openGithub(): void {
    window.open('https://github.com/GiselleBarbosa', '_blank');
  }
}
