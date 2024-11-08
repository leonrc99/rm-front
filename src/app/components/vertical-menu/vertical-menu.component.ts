import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vertical-menu',
  standalone: true,
  imports: [],
  templateUrl: './vertical-menu.component.html',
  styleUrl: './vertical-menu.component.scss'
})
export class VerticalMenuComponent {

  constructor(private authService: AuthService, private routerService: Router) {}

  public logout() {
    this.authService.logout();
  }

  public productNavigate() {
    this.routerService.navigate(['dashboard/produtos'])
  }

  public homeNavigate() {
    this.routerService.navigate(['dashboard'])
  }
}
