import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'productos',
    loadComponent: () => import('./pages/products/products').then(m => m.Products)
  },
  {
    path: 'productos/nuevo',
    loadComponent: () => import('./pages/new-product/new-product').then(m => m.NewProduct)
  },
  {
    path: 'productos/:id',
    loadComponent: () => import('./pages/product-detail/product-detail').then(m => m.ProductDetail)
  },
  {
    path: '**',
    redirectTo: ''
  }
];