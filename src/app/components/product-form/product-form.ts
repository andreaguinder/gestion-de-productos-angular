import { Component, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../interfaces/IProduct';

const { required, minLength, min } = Validators;

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-product-form',
  styleUrl: './product-form.css',
  templateUrl: './product-form.html',
})
export class ProductForm {

  formulario: FormGroup;
  productCreated = output<Product>();

  constructor(private formbuilder: FormBuilder) {
    this.formulario = this.formbuilder.group({
      title: ['', [required, minLength(3)]],
      price: [0, [required, min(0)]],
      description: ['', [required]],
      category: ['', [required]],
      image: ['']
    });
  }

  saveProduct(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const data = this.formulario.getRawValue();

    const newProduct: Product = {
      id: Date.now(), 
      title: data.title,
      price: data.price,
      category: data.category,
      description: data.description,
      image: data.image || '/assets/images/placeholder-img.png',
      rating: {
        rate: 0,
        count: 0
      }
    };

    this.productCreated.emit(newProduct);

    this.formulario.reset({
      title: '',
      price: 0,
      description: '',
      category: '',
      image: ''
    });
  }
}