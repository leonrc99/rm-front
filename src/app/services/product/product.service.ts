import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../types/types';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken(); // Supondo que o token JWT está salvo no localStorage

    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  public getAllProducts(): Observable<Product[] | any> {
    const url = `${this.baseUrl}/products`;

    return this.httpClient.get(url);
  }

  public deleteProduct(productId: number): Observable<any> {
    const url = `${this.baseUrl}/products/${productId}`;
    return this.httpClient.delete(url, { headers: this.getHeaders() });
  }
}
