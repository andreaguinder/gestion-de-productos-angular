import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/IProduct';

@Component({
  imports: [],
  selector: 'app-product-cart',
  styleUrl: './product-cart.css',
  templateUrl: './product-cart.html',
})
export class ProductCart {
  @Input() product!: Product;
}
