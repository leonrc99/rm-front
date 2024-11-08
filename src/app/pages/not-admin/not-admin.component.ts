import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-not-admin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './not-admin.component.html',
  styleUrl: './not-admin.component.scss',
})
export class NotAdminComponent {
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
