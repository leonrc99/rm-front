import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { VerticalMenuComponent } from "../../components/vertical-menu/vertical-menu.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, VerticalMenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public username!: string | null;

  constructor(private authService: AuthService) {
    this.setUsername();
  }

  public setUsername(): void {
    this.username = this.authService.getUsername();
  }

  public logout(): void {
    this.authService.logout();
  }
}
