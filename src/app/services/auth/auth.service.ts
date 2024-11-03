import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { LoginData } from '../../interfaces/interfaces';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate{
  private baseUrl: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private router: Router) {}

  public login(email: string, password: string): Observable<string> {
    const loginData: LoginData = { email, password };
    
    return this.http
      .post<string>(`${this.baseUrl}/users/login`, loginData, { responseType: 'text' as 'json' })
      .pipe(
        tap((token: string) => {
          localStorage.setItem('authToken', token);
        })
      );
  }

  public getToken (): string | null {
    return localStorage.getItem('authToken');
  }

  public getUsername(): string | null {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.sub;
    }
    return null;
  }

  public getRole (): string | null {
    const token = this.getToken();

    if(token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.roles[0];
    }
    return null;
  }

  public canActivate(): boolean {
    const token = this.getToken()

    if (token) {
      const role = this.getRole();

      if (role?.includes('ADMIN')) {
        return true; 
      } else {
        this.router.navigate(['/not-admin']);
        return false;
      }
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
}
