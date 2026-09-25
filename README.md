# Gestión de Productos - Angular App

Aplicación web desarrollada en Angular para la gestión dinámica de un catálogo de productos. Permite visualizar, buscar, filtrar por categorías, agregar nuevos ítems mediante un formulario reactivo y eliminar productos, interactuando con un servicio asincrónico y consumiendo una API pública.

---

## 🚀 Características y Consigna

- **Servicio Angular (`ProductService`):** Manejo centralizado del estado de los productos mediante RxJS (`BehaviorSubject` y `Observables`) y solicitudes HTTP (`HttpClient`) a la FakeStore API.
- **Filtrado por Categorías:** Carga inicial filtrada para obtener únicamente productos de *men's clothing* y *women's clothing*.
- **Formulario Reactivo (`ReactiveFormsModule`):** Alta de productos con validaciones en tiempo real para nombre, precio, categoría y descripción.
- **Buscador en Tiempo Real:** Filtrado reactivo por título o categoría desde el cliente.
- **Pipes Estándar:** Uso de `currency` para formatear precios en moneda y `date` para fechas de alta.
- **Pipe Personalizado (`DiscountPipe`):** Transformación visual de precios aplicando porcentajes de descuento.
- **Control Flow Moderno:** Implementación de `@for`, `@if` y `@empty` propios de las versiones recientes de Angular.

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


## 👤 Créditos y Datos de la Entrega

Estudiante: Andrea Guinder

Curso: 181802

Módulo / Unidad: Módulo 1 - Unidad 3

Entrega: Tarea N° 3