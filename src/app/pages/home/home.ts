import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductCart } from '../../components/product-cart/product-cart';
import { ProductForm } from '../../components/product-form/product-form';
import { Product } from '../../interfaces/IProduct';
import { ProductService } from '../../services/products';

@Component({
  imports: [FormsModule, ProductCart, ProductForm],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit {

  titulo: string = 'Gestión de Productos';
  subtitulo: string = 'Bienvenido a la aplicación de gestión de productos';

  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.applyFilter(); 
    });
  }

  onSearchChange(): void {
    this.applyFilter();
  }

  private applyFilter(): void {
    if (!this.searchTerm.trim()) {
      this.filteredProducts = [...this.products];
      return;
    }
    const query = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query)
    );
  }

  addProduct(newProduct: Product): void {
    this.productService.addProduct(newProduct).subscribe({
      error: (err) => console.log('Simulación POST enviada:', err)
    });
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      error: (err) => console.log('Simulación DELETE enviada:', err)
    });
  }
}