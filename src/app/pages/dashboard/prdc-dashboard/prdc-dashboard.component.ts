import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../types/types';
import { productsMock } from '../../../../mocks/product.mock';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-prdc-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prdc-dashboard.component.html',
  styleUrl: './prdc-dashboard.component.scss',
})
export class PrdcDashboardComponent implements OnInit {
  categories = ['Eletrônicos', 'Vestuário', 'Alimentos', 'Livros'];
  public products!: Product[];
  //public filteredProducts!: Product[];

  public pageSize = 5;
  public currentPage = 1;

  public Math = Math;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
    //this.filteredProducts = this.products; // Inicializa com todos os produtos
  }

  get paginatedProducts(): Product[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.products.slice(startIndex, startIndex + this.pageSize);
  }

  public getProducts() {
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  changePage(page: number): void {
    this.currentPage = page;
  }

  addProduct(): void {
    // Navegar para a página de criação de produto
    console.log('Navegar para a página de cadastro de novos produtos');
  }

  editProduct(product: Product): void {
    // Lógica para edição do produto
    console.log('Editando produto:', product);
  }

  public deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe({
      next: () => {
        this.getProducts();
      },
      error: (err) => {
        console.error('Erro ao excluir o produto:', err);
      },
    });
  }


  /* filterByCategory(category: string) {
    if (category) {
      this.filteredProducts = this.products.filter(
        product => product.category === category
      );
    } else {
      this.filteredProducts = this.products; // Mostra todos os produtos se nenhuma categoria for selecionada
    }
  } */
}
