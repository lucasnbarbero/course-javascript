# Ejercicio Final: Carrito de Compras 🛒

## Descripción

En este ejercicio, vas a desarrollar una página web de una sola página que simule un carrito de compras en línea. Utilizarás la API pública de Fake Store API para obtener la lista de productos y mostrarlos en la página. Además, implementarás funcionalidad para buscar productos y agregar elementos a un carrito de compras.

## Requisitos

### Funcionalidades Principales

1. **Visualización de Productos**:

   - Los productos deben mostrarse en un formato de tarjeta con su imagen, nombre, precio y una breve descripción.
   - Los productos deben obtenerse dinámicamente desde la API: `https://fakestoreapi.com/products`.

2. **Búsqueda de Productos**:

   - Implementa una barra de búsqueda que permita filtrar los productos por su nombre o categoría.
   - La búsqueda debe actualizar la lista de productos en tiempo real.

3. **Carrito de Compras**:
   - Cada producto debe tener un botón que permita agregarlo al carrito de compras.
   - El carrito debe ser visible en todo momento en la página y debe mostrar:
     - El nombre de los productos añadidos.
     - El precio de cada producto.
     - El total acumulado del carrito.
   - Debe haber una opción para eliminar productos del carrito.

### Reglas y Restricciones

- **Manipulación del DOM**: Todo debe ser manejado mediante manipulación del DOM usando JavaScript. Evita el uso de frameworks externos.
- **Estructura del Proyecto**:
  - Usa módulos de ES6 para organizar tu código.
  - Implementa promesas para manejar la solicitud a la API.
  - Utiliza `let` y `const` correctamente para declarar variables.
  - Aplica desestructuración y los operadores spread/rest donde sea relevante.
  - Emplea template literals para generar el HTML dinámico.

### Extras (Opcional)

- **Persistencia del Carrito**: Guarda el estado del carrito en el localStorage para que los productos añadidos persistan al recargar la página.
- **Ordenar Productos**: Añade la funcionalidad para ordenar los productos por precio (ascendente/descendente) o por categoría.

## Recursos

- **API**: [Fake Store API](https://fakestoreapi.com/products)
- **Documentación**: Asegúrate de consultar la [documentación oficial](https://fakestoreapi.com/docs) para entender cómo trabajar con la API.

## Maqueta inicial

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tienda Online</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f5f5f5;
      }

      header {
        background-color: #333;
        color: #fff;
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      header h1 {
        margin: 0;
        font-size: 24px;
      }

      header input[type="text"] {
        padding: 8px;
        font-size: 16px;
        border-radius: 4px;
        border: 1px solid #ccc;
        width: 300px;
      }

      main {
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }

      .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
      }

      .product-card {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .product-card img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
      }

      .product-card h2 {
        font-size: 18px;
        margin: 10px 0;
        color: #333;
      }

      .product-card p {
        font-size: 14px;
        color: #666;
        margin: 10px 0;
      }

      .product-card .price {
        font-size: 16px;
        color: #000;
        margin-bottom: 10px;
      }

      .product-card button {
        background-color: #28a745;
        color: #fff;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s ease;
      }

      .product-card button:hover {
        background-color: #218838;
      }

      footer {
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 15px;
        margin-top: 30px;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Tienda Online</h1>
      <input type="text" id="search" placeholder="Buscar productos..." />
    </header>

    <main>
      <div class="product-grid">
        <div class="product-card">
          <img src="https://via.placeholder.com/250" alt="Producto 1" />
          <h2>Producto 1</h2>
          <p>Descripción del producto 1</p>
          <div class="price">$100.00</div>
          <button>Añadir al carrito</button>
        </div>
        <div class="product-card">
          <img src="https://via.placeholder.com/250" alt="Producto 2" />
          <h2>Producto 2</h2>
          <p>Descripción del producto 2</p>
          <div class="price">$150.00</div>
          <button>Añadir al carrito</button>
        </div>
        <!-- Más productos aquí -->
      </div>
    </main>

    <footer>
      <p>&copy; 2024 Tienda Online. Todos los derechos reservados.</p>
    </footer>
  </body>
</html>
```
