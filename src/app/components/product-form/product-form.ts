import { Component, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../interfaces/IProduct';

const { required, minLength, min } = Validators;

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-product-form',
  styleUrl: './product-form.css',
  templateUrl: './product-form.html',
})
export class ProductForm {

  formulario

  productCreated = output<Product>();

  constructor(private formbuilder: FormBuilder) {
    this.formulario = this.formbuilder.group({
      nombre: ['', [required, minLength(3)]],
      precio: [0, [required, min(0)]],
      categoria: ['', required],
      descripcion: ['', required],
      imagen: ['', required],
      disponible: [true, required]
    });
  }

  guardarProducto() {
    
    const data = this.formulario.getRawValue();
    const { nombre, precio, categoria, descripcion, imagen, disponible } = data;

    const newProduct: Product = {
      id: crypto.randomUUID(),
      nombre: nombre || "producto sin nombre",
      precio: precio || 0,
      categoria: categoria || "sin categoría",
      descripcion: descripcion || "sin descripción",
      imagen: imagen || "/assets/images/placeholder-img.png",
      disponible: disponible  || true
    };

    this.productCreated.emit(newProduct);
    this.formulario.reset();
  }
}

