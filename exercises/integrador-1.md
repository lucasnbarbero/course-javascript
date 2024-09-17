# Ejercicio: Sistema de Gestión de Inventario de Tienda

## Descripción:

Vas a simular un pequeño sistema de gestión de inventario para una tienda. El usuario podrá agregar productos, ver los productos disponibles, buscar productos por su nombre y eliminar productos. Todo esto se hará mediante interacciones con el usuario usando `prompt` y `alert`.

## Requerimientos:

1. **Agregar productos**: Cada producto debe tener un `nombre`, `cantidad` y `precio`.
2. **Mostrar productos disponibles**: Mostrar al usuario todos los productos en inventario con su nombre, cantidad y precio.
3. **Buscar producto**: El usuario debe poder buscar un producto por su nombre, y si existe, mostrar su información.
4. **Eliminar producto**: El usuario debe poder eliminar un producto del inventario por su nombre.
5. **Menú de opciones**: Mostrar un menú de opciones para que el usuario elija la operación que desea realizar.

## Especificaciones:

- **Producto**: Cada producto será un objeto con las propiedades `nombre`, `cantidad` y `precio`.
- **Inventario**: Será un array que contiene productos.
- **Operaciones**:
  - Agregar un nuevo producto al inventario.
  - Mostrar la lista de productos en el inventario.
  - Buscar un producto por su nombre.
  - Eliminar un producto por su nombre.

## Interacción esperada:

1. Se mostrará un menú con las opciones disponibles:
   - "1. Agregar producto"
   - "2. Mostrar productos"
   - "3. Buscar producto"
   - "4. Eliminar producto"
   - "5. Salir"
2. Dependiendo de la opción que elija el usuario, se realizará la operación correspondiente.

3. Los mensajes se mostrarán mediante `alert` y se recibirán datos mediante `prompt`.
