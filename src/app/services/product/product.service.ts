import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Product } from '../../types/types';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken(); // Supondo que o token JWT está salvo no localStorage

    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
  }

  public getAllProducts(categoryId?: number): Observable<Product[] | any> {
    let url = `${this.baseUrl}/products`;

    if (categoryId) {
      url = `${url}/category/${categoryId}`;
    }
    return this.httpClient.get<Product[]>(url);
  }

  public deleteProduct(productId: number): Observable<any> {
    const url = `${this.baseUrl}/products/${productId}`;

    return this.httpClient.delete(url, {
      headers: this.getHeaders(),
      responseType: 'text',
    });
  }

  public getCategories(): Observable<Category[]> {
    const url = `${this.baseUrl}/products/categories`;

    return this.httpClient.get<Category[]>(url);
  }
}
