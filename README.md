# Gestión de Productos - Angular App

Aplicación web desarrollada en Angular para la gestión dinámica de un catálogo de productos, aplicando enrutamiento avanzado, carga perezosa (*lazy loading*), rutas dinámicas y persistencia de navegación en el navegador.

---

## 🚀 Características y Consigna

- **Estructura Modular y Lazy Loading:** Separación de la aplicación en bloques funcionales (Catálogo/Productos y Gestión/Altas) utilizando carga perezosa (`loadComponent`) en las rutas para optimizar el rendimiento.
- **Routing Principal y Rutas Dinámicas:** Configuración de rutas estáticas y una ruta dinámica (`/productos/:id`) para mostrar el detalle específico de cada producto.
- **Navegación Interna:** Uso de `routerLink` y `router-outlet` para una navegación fluida entre vistas.
- **Persistencia en LocalStorage:** El sistema recuerda la última sección visitada por la usuaria y la redirige automáticamente al volver a cargar la aplicación.
- **Servicio y Formularios:** Manejo de datos mediante `ProductService` y formularios reactivos con validaciones.

---

## 🛠️ Instalación y Ejecución

Sigue estos pasos para clonar el repositorio e iniciar la aplicación localmente:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/andreaguinder/gestion-de-productos-angular.git](https://github.com/andreaguinder/gestion-de-productos-angular.git)
```

```bash
    npm install
```

```bash
    ng serve
```

Una vez que el servidor esté en marcha, abrí tu navegador e ingresá a:

http://localhost:4200/ (o el que te indique la consola si lo tenés ocupado)

---

## 🌐 Despliegue en Producción

Plataforma elegida: Vercel

Enlace a la aplicación: [Insertar enlace de Vercel acá]

## 👤 Créditos y Datos de la Entrega

Estudiante: Andrea Guinder

Curso: 181802

Módulo / Unidad: Módulo 1 - Unidad 4 (Aplicación modular con rutas y almacenamiento en navegador)

Entrega: Tarea N° 4

## 📚 Bibliografía y Fuentes

Documentación oficial de Angular (angular.dev)

FakeStore API (fakestoreapi.com)