import { Component } from '@angular/core';
import { ProductCart } from '../../components/product-cart/product-cart';
import { ProductForm } from '../../components/product-form/product-form';
import { Product } from '../../interfaces/IProduct';

@Component({
  imports: [ProductCart, ProductForm],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  titulo: string = 'Gestión de Productos';
  subtitulo: string = 'Bienvenido a la aplicación de gestión de productos';


  products: Product[] = [
    {
    id: crypto.randomUUID(),
    nombre: "Monitor Gamer 55 Samsung Curvo Odyssey 4K 165Hz 1Ms ARK 2 LS55CG97WNLX",
    precio: 2621589.00,
    categoria: "monitores",
    descripcion: "Pantalla gigante de 55 pulgadas con curvatura extrema de 1000R. Resolución Ultra HD 4K, 165Hz y 1ms.",
    imagen: "/assets/images/monitores/monitor-ls55cg97-1.jpeg",
    disponible: true
  },
  {
    id: crypto.randomUUID(),
    nombre: "Monitor Gamer 34 LG QHD Ultrawide Curvo 160Hz 1Ms 34GP63A",
    precio: 925549.00,
    categoria: "monitores",
    descripcion: "Pantalla expansiva UltraWide de 34 pulgadas (21:9) con resolución QHD, 160Hz y 1ms.",
    imagen: "/assets/images/monitores/monitor-lg-ultrawide-1.jpeg",
    disponible: true
  },
  {
    id: crypto.randomUUID(),
    nombre: "Pc Intel Core I7 12700 B760 16gb 960gb 240gb",
    precio: 1150000,
    categoria: "pc-armadas",
    descripcion: "Procesador Intel Core i7 12700, Motherboard B760, 16GB RAM y doble SSD (960GB + 240GB).",
    imagen: "/assets/images/pc-armadas/pc-intel-i7-b760-1.jpeg",
    disponible: true
  },
  {
    id: crypto.randomUUID(),
    nombre: "Pc Ryzen 5 5600gt A520 16gb 1tb Rtx3050",
    precio: 890000,
    categoria: "pc-armadas",
    descripcion: "Procesador AMD Ryzen 5 5600GT, NVIDIA RTX 3050, 16GB RAM Dual Channel y SSD 1TB.",
    imagen: "/assets/images/pc-armadas/pc-ryzen5-rtx3050-1.jpeg",
    disponible: true
  },
  {
    id: crypto.randomUUID(),
    nombre: "Motherboard Am5 Msi Pro B840m B",
    precio: 145000,
    categoria: "motherboards",
    descripcion: "Socket AM5 con chipset AMD B840 en formato Micro-ATX con soporte nativo para DDR5.",
    imagen: "/assets/images/motherboards/mother-msi-b840m-1.jpeg",
    disponible: true
  },
  {
    id: crypto.randomUUID(),
    nombre: "Motherboard Am5 Msi B850 Gaming Plus Wifi",
    precio: 220000,
    categoria: "motherboards",
    descripcion: "Socket AM5 con chipset AMD B850, formato ATX, Wi-Fi integrado y disipación pasiva extendida.",
    imagen: "/assets/images/motherboards/mother-msi-b850-gaming-1.jpeg",
    disponible: true
  },
  {
    id: crypto.randomUUID(),
    nombre: "Memoria Ram Ddr4 16gb 3200 Mhz Hiksemi Future",
    precio: 42000,
    categoria: "memorias-ram",
    descripcion: "Módulo individual de 16GB DDR4 a 3200 MHz con disipador térmico integrado.",
    imagen: "/assets/images/memorias-ram/ram-hiksemi-16gb-1.jpeg",
    disponible: true
  },
  {
    id: crypto.randomUUID(),
    nombre: "Memoria Ram Ddr5 16gb 5200 Mhz Kingston Fury Beast Rgb",
    precio: 78000,
    categoria: "memorias-ram",
    descripcion: "Memoria de nueva generación DDR5 de 16GB a 5200 MHz con iluminación RGB.",
    imagen: "/assets/images/memorias-ram/ram-fury-ddr5-16gb-1.jpeg",
    disponible: true
  },
  {
    id: crypto.randomUUID(),
    nombre: "Procesador Amd Ryzen 5 9600x 5.4 Ghz Am5 Sin Cooler Con Gpu",
    precio: 360000,
    categoria: "procesadores",
    descripcion: "Arquitectura Zen 5 para Socket AM5, hasta 5.4 GHz Turbo Boost y GPU integrada (no incluye cooler).",
    imagen: "/assets/images/procesadores/proc-ryzen5-9600x-1.jpeg",
    disponible: true
  },
  {
    id: crypto.randomUUID(),
    nombre: "Procesador Amd Ryzen 9 9900x3d 5.5 Ghz Am5 Con Gpu (sin Cooler)",
    precio: 690000,
    categoria: "procesadores",
    descripcion: "Socket AM5 con tecnología AMD 3D V-Cache, hasta 5.5 GHz y GPU integrada.",
    imagen: "/assets/images/procesadores/proc-ryzen9-9900x3d-1.jpeg",
    disponible: true
  },
  {
    id: crypto.randomUUID(),
    nombre: "Procesador Amd Ryzen 9 7900x 5.6 Ghz Am5 (sin Cooler)",
    precio: 540000,
    categoria: "procesadores",
    descripcion: "12 núcleos y 24 hilos para Socket AM5, hasta 5.6 GHz, desbloqueado para Overclocking.",
    imagen: "/assets/images/procesadores/proc-ryzen9-7900x-1.jpeg",
    disponible: true
  },
  {
    id: crypto.randomUUID(),
    nombre: "Notebook Cx Core I5 12450h 8gb Smd 256gb 15.6",
    precio: 690000,
    categoria: "notebooks",
    descripcion: "Pantalla de 15.6 pulgadas, procesador Intel Core i5-12450H, 8GB RAM y SSD de 256GB.",
    imagen: "/assets/images/notebooks/note-cx-i5-1.jpeg",
    disponible: true
  },
  {
    id: crypto.randomUUID(),
    nombre: "Notebook X View Novabook V3 Celeron N4020 4gb Smd 128gb 14 Win11",
    precio: 380000,
    categoria: "notebooks",
    descripcion: "Pantalla de 14 pulgadas, Intel Celeron N4020, 4GB RAM, SSD 128GB y Windows 11.",
    imagen: "/assets/images/notebooks/note-xview-novabook-1.jpeg",
    disponible: true
  },
  {
    id: crypto.randomUUID(),
    nombre: "Placa De Video Geforce Rtx 5060 Ti 8gb Asus Tuf Gaming Oc",
    precio: 640000,
    categoria: "placas-de-video",
    descripcion: "NVIDIA GeForce RTX 5060 Ti con 8GB GDDR6, edición OC con triple ventilador.",
    imagen: "/assets/images/placas-de-video/video-rtx5060ti-asus-tuf-1.jpeg",
    disponible: true
  },
  {
    id: crypto.randomUUID(),
    nombre: "Placa De Video Geforce Rtx 5070 12gb Gigabyte Aero Oc",
    precio: 890000,
    categoria: "placas-de-video",
    descripcion: "NVIDIA GeForce RTX 5070 de 12GB en edición blanca Aero OC con disipación Windforce.",
    imagen: "/assets/images/placas-de-video/video-rtx5070-giga-aero-1.jpeg",
    disponible: true
  },
  {
    id: crypto.randomUUID(),
    nombre: "Mouse Gamer Razer Cobra Pro Lightweight RGB Inalambrico",
    precio: 145000,
    categoria: "perifericos-y-mas",
    descripcion: "Diseño ultraligero inalámbrico con tecnología Razer HyperSpeed, sensor óptico y RGB Chroma.",
    imagen: "/assets/images/perifericos-y-mas/mouse-razer-cobra-1.jpeg",
    disponible: true
  },
  {
    id: crypto.randomUUID(),
    nombre: "Mouse Logitech M170 Inalambrico Azul Gris",
    precio: 19500,
    categoria: "perifericos-y-mas",
    descripcion: "Conexión inalámbrica de 2.4 GHz, diseño ambidiestro compacto y hasta 12 meses de batería.",
    imagen: "/assets/images/perifericos-y-mas/mouse-m170-azul-1.jpeg",
    disponible: true
  },
  {
    id: crypto.randomUUID(),
    nombre: "Mouse Logitech Mx Master 4 Bluetooth Negro",
    precio: 160000,
    categoria: "perifericos-y-mas",
    descripcion: "Mouse ergonómico de alta gama con rueda electromagnética MagSpeed y conectividad Bluetooth.",
    imagen: "/assets/images/perifericos-y-mas/mouse-mxmaster4-1.jpeg",
    disponible: true
  }
  ];


  addProduct(product: Product) {
    this.products.push(product);
  }
}
