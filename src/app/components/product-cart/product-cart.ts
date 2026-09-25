import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Product } from '../../interfaces/IProduct';
import { DiscountPipe } from '../../pipes/discount.pipe';

@Component({
  imports: [CurrencyPipe, DatePipe, DiscountPipe],
  selector: 'app-product-cart',
  styleUrl: './product-cart.css',
  templateUrl: './product-cart.html',
})
export class ProductCart {
  @Input({ required: true }) product!: Product;
  @Output() productDeleted = new EventEmitter<number>();

  createdAt: Date = new Date();

  deleteProduct(): void {
    this.productDeleted.emit(this.product.id);
  }
}