import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-home-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './home-dashboard.component.html',
  styleUrl: './home-dashboard.component.scss'
})
export class HomeDashboardComponent {
  public username!: string | null;

  constructor(private authService: AuthService) {
    this.setUsername();
  }

  public setUsername(): void {
    this.username = this.authService.getUsername();
  }
}
