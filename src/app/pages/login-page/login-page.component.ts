import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  public title: string = 'FAÇA LOGIN PARA CONTINUAR';
  public username!: string | null;

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  public login() {
    const { email, password } = this.loginForm.value;

    this.auth.login(email, password).subscribe({
      next: () => {
        const role: string | null = this.auth.getRole();

        if (role === 'ADMIN') {
          this.router.navigate(['/dashboard']);
        } else if (role === null) {
          alert('Você precisa estar autenticado para continuar');
        } else {
          this.router.navigate(['/not-admin']);
        }
      },
      error: (error) => {
        console.error('Erro no login:', error);
      },
    });
  }
}
