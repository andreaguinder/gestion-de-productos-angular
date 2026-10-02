import { Component, ChangeDetectorRef } from '@angular/core';
import { ProductService } from '../../services/products';
import { Product } from '../../interfaces/IProduct';
import { ProductCart } from '../../components/product-cart/product-cart';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCart],
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
  allProducts: Product[] = [];
  products: Product[] = [];
  searchTerm: string = '';

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef 
  ) {
    this.productService.getProducts().subscribe((data) => {
      this.allProducts = data;
      this.products = data;
      this.cdr.detectChanges(); 
    });
  }

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
    const term = this.searchTerm.toLowerCase().trim();

    if (!term) {
      this.products = this.allProducts;
      return;
    }

    this.products = this.allProducts.filter(p => 
      p.title.toLowerCase().includes(term) || 
      p.category.toLowerCase().includes(term)
    );
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.allProducts = this.allProducts.filter(p => p.id !== id);
        this.products = this.products.filter(p => p.id !== id);
      },
      error: (err) => console.log('Error al eliminar:', err)
    });
  }
}