import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../interfaces/IProduct';
import { ProductService } from '../../services/products';
import { ProductForm } from '../../components/product-form/product-form';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [FormsModule, ProductForm],
  styleUrl: './new-product.css',
  templateUrl: './new-product.html',
})
export class NewProduct {

  constructor(private productService: ProductService) {}

  addProduct(newProduct: Product): void {
    this.productService.addProduct(newProduct).subscribe({
      next: () => console.log('Producto agregado con éxito'),
      error: (err) => console.log('Simulación POST enviada:', err)
    });
  }
}