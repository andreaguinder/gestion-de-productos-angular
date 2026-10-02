import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/products';
import { Product } from '../../interfaces/IProduct';

@Component({
  imports: [],
  selector: 'app-product-detail',
  styleUrl: './product-detail.css',
  templateUrl: './product-detail.html',
})
export class ProductDetail implements OnInit {
  id: string = '';
 product = signal<Product | undefined>(undefined);

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    if (this.id) {
      this.productService.getProductById(this.id).subscribe({
        next: (data) => {
          this.product.set(data);
        },
        error: (err) => {
          console.error('Error al traer detalle:', err);
        }
      });
    }
  }
}