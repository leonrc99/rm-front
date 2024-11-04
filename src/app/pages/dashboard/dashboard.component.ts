import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public username!: string | null;

  constructor(private authService: AuthService) {
    this.setUsername();
  }

  private setUsername(): string | null {
    return (this.username = this.authService.getUsername());
  }
}
