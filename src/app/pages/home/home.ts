import { Component } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})

export class Home {
  titulo: string = 'Gestión de Productos';
  subtitulo: string = 'Bienvenido a la aplicación de gestión de productos';
}