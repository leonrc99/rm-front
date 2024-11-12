import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Category, Product } from '../../../types/types';
import { ProductService } from '../../../services/product/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prdc-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prdc-dashboard.component.html',
  styleUrl: './prdc-dashboard.component.scss',
})
export class PrdcDashboardComponent implements OnInit {
  categories: Category[] = [];
  public products!: Product[];
  selectedCategory: number | null = null;

  public pageSize = 5;
  public currentPage = 1;

  public Math = Math;

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.productService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });

    this.getProducts();
  }

  get paginatedProducts(): Product[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.products.slice(startIndex, startIndex + this.pageSize);
  }

  public getProducts() {
    if (this.selectedCategory) {
      this.productService.getAllProducts(this.selectedCategory).subscribe({
        next: (res: Product[]) => {
          this.products = res;
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    } else {
      this.productService.getAllProducts().subscribe({
        next: (res) => {
          this.products = res;
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
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
        this.cdr.detectChanges;
      },
      error: (error) => {
        console.error('Erro ao excluir produto:', error);
      },
    });
  }
}
