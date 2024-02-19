import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { NavbarComponent } from './template/navbar/navbar.component';
import { CardModule } from 'primeng/card';
import { FooterComponent } from './template/footer/footer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CardModule, FooterComponent],
})
export class AppComponent implements OnInit {
  public primengConfig = inject(PrimeNGConfig);

  public ngOnInit(): void {
    this.primengSettings();
  }

  private primengSettings(): void {
    this.primengConfig.ripple = true;

    this.primengConfig.zIndex = {
      modal: 1100, // dialog, sidebar
      overlay: 1000, // dropdown, overlaypanel
      menu: 1000, // overlay menus
      tooltip: 1100, // tooltip
    };
  }
}
