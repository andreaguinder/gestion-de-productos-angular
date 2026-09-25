import { Injectable } from '@angular/core';
import { Product } from '../interfaces/IProduct';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://fakestoreapi.com/products';

  private productsSubject = new BehaviorSubject<Product[]>([]);
  public products$: Observable<Product[]> = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadInitialProducts();
  }

  private loadInitialProducts(): void {
    this.http.get<Product[]>(this.apiUrl).pipe(
      map(products => products.filter(p => 
        p.category === "men's clothing" || p.category === "women's clothing"
      ))
    ).subscribe({
      next: (filtered) => {
        this.productsSubject.next(filtered);
      },
      error: (err) => console.error('Error al cargar productos:', err)
    });
  }

  getProducts(): Observable<Product[]> {
    return this.products$;
  }


  addProduct(product: Product): Observable<Product> {
    const currentProducts = this.productsSubject.getValue();
    this.productsSubject.next([product, ...currentProducts]);

    return this.http.post<Product>(this.apiUrl, product);
  }

  deleteProduct(id: number): Observable<Product> {
    const currentProducts = this.productsSubject.getValue();
    this.productsSubject.next(currentProducts.filter(p => p.id !== id));

    return this.http.delete<Product>(`${this.apiUrl}/${id}`);
  }
}