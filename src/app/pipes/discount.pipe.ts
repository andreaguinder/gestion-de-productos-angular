import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuento'
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, percentage: number = 10): number {
    if (!price || price <= 0) return 0;
    return price - (price * (percentage / 100));
  }
}