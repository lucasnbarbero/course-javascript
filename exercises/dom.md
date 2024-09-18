# Ejercicios manipulación del DOM

## Calculadora

Crea una calculadora simple en HTML, CSS y JavaScript que permita realizar las operaciones básicas de suma, resta, multiplicación y división. El diseño de la calculadora debe incluir un display para mostrar los números y las operaciones, así como botones para los números del 0 al 9, las cuatro operaciones aritméticas (`+`, `-`, `*`, `/`), un botón de igual (`=`) para realizar el cálculo, y un botón de limpiar (`C`) para reiniciar la operación.

Los botones de las operaciones deben tener un estilo visual diferente al de los números, y al hacer hover sobre ellos, debe cambiar su color. El botón de limpiar (`C`) debe tener un estilo de fondo rojo. El `display` de la calculadora debe ser de solo lectura.

El código debe incluir la lógica en JavaScript para manejar las operaciones aritméticas y actualizar el `display` en tiempo real cuando se ingresan los números y las operaciones.

**Puntos clave a considerar**:

1. Diseño de la calculadora usando CSS con una disposición en cuadrícula para los botones.
2. Lógica en JavaScript para las funciones de agregar números, seleccionar la operación, realizar el cálculo y limpiar el `display`.
3. Las operaciones deben ejecutarse solo cuando ambos operandos están disponibles y una operación ha sido seleccionada.

### Maqueta

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculadora</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f4f4f4;
      }

      .calculator {
        width: 320px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        padding: 20px;
      }

      #display {
        width: 100%;
        height: 50px;
        font-size: 2em;
        text-align: right;
        padding: 10px;
        border: none;
        background-color: #f9f9f9;
        margin-bottom: 20px;
      }

      .buttons {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
      }

      .buttons button {
        width: 100%;
        height: 60px;
        font-size: 1.5em;
        border: none;
        border-radius: 5px;
        background-color: #eee;
        cursor: pointer;
      }

      .buttons button:hover {
        background-color: #ddd;
      }

      .buttons button.operator {
        background-color: #f9a825;
        color: #fff;
      }

      .buttons button.operator:hover {
        background-color: #f57f17;
      }

      .buttons button.clear {
        background-color: #f44336;
        color: #fff;
      }

      .buttons button.clear:hover {
        background-color: #d32f2f;
      }
    </style>
  </head>
  <body>
    <div class="calculator">
      <input type="text" id="display" readonly />
      <div class="buttons">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="operator">+</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button class="operator">-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button class="operator">*</button>
        <button>0</button>
        <button class="clear">C</button>
        <button class="operator">=</button>
        <button class="operator">/</button>
      </div>
    </div>
  </body>
</html>
```



## Lista de Tareas (To-Do List)

### Descripción

Crea una aplicación sencilla de lista de tareas que permita al usuario agregar, eliminar y marcar como completadas las tareas que va ingresando. Esta aplicación será una excelente manera de practicar la manipulación del DOM y la interacción con eventos en JavaScript.

### Requerimientos

1. **Agregar tareas**: El usuario podrá agregar una nueva tarea mediante un formulario con un campo de texto y un botón para agregarla a la lista.
2. **Marcar tareas como completadas**: Cada tarea agregada tendrá un botón para marcarla como completada. Cuando una tarea sea completada, se tachará su texto y cambiará el color de fondo.
3. **Eliminar tareas**: Cada tarea tendrá un botón para eliminarla de la lista.
4. **Diseño**: La lista de tareas deberá estar bien organizada y debe permitir al usuario ver claramente las tareas pendientes y completadas.

### Especificaciones

- **Tarea**: Cada tarea será representada como un objeto en JavaScript con las propiedades `texto` y `completada`.
- **Lista de Tareas**: Será un array que contiene objetos de tareas.
- **Interacción con el DOM**:
  - Agregar una nueva tarea al DOM mediante un formulario HTML.
  - Marcar una tarea como completada y actualizar su estilo.
  - Eliminar una tarea de la lista directamente desde el DOM.

### Interacción esperada

1. El usuario ingresará el texto de una tarea en el formulario y hará clic en el botón "Agregar" para añadirla a la lista.
2. Cada tarea en la lista tendrá un botón "Completar" para marcarla como completada, lo que cambiará su apariencia.
3. Cada tarea también tendrá un botón "Eliminar" para eliminarla de la lista.

### Maqueta

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lista de Tareas</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f4f4f4;
        margin: 0;
      }

      .todo-container {
        width: 400px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        padding: 20px;
      }

      #taskInput {
        width: calc(100% - 22px);
        padding: 10px;
        font-size: 16px;
        margin-right: 10px;
      }

      #addTaskBtn {
        padding: 10px;
        font-size: 16px;
        background-color: #4caf50;
        color: white;
        border: none;
        cursor: pointer;
      }

      #addTaskBtn:hover {
        background-color: #45a049;
      }

      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ddd;
      }

      li.completed {
        text-decoration: line-through;
        background-color: #e0ffe0;
      }

      .complete-btn,
      .delete-btn {
        background-color: #f9a825;
        color: white;
        border: none;
        padding: 5px;
        cursor: pointer;
      }

      .complete-btn:hover {
        background-color: #f57f17;
      }

      .delete-btn {
        background-color: #f44336;
      }

      .delete-btn:hover {
        background-color: #d32f2f;
      }
    </style>
  </head>
  <body>
    <div class="todo-container">
      <input type="text" id="taskInput" placeholder="Agregar nueva tarea" />
      <button id="addTaskBtn">Agregar</button>
      <ul id="taskList">
        <li>
          Tarea de ejemplo
          <div>
            <button class="complete-btn">Completar</button>
            <button class="delete-btn">Eliminar</button>
          </div>
        </li>
      </ul>
    </div>
  </body>
</html>
```

## Sistema de Gestión de Inventario de Tienda (con DOM)

### Descripción

Vas a implementar un sistema de gestión de inventario para una tienda, donde el usuario podrá agregar productos, ver los productos disponibles, buscar productos por su nombre y eliminar productos directamente en la página web. El sistema interactuará con el usuario mediante un formulario y la manipulación del DOM para actualizar la lista de productos en pantalla.

### Requerimientos

1. **Agregar productos**: El usuario podrá agregar productos proporcionando un `nombre`, `cantidad` y `precio` mediante un formulario en la interfaz.
2. **Mostrar productos disponibles**: Los productos en el inventario se mostrarán dinámicamente en la página en una tabla.
3. **Buscar producto**: El usuario podrá buscar un producto ingresando su nombre en un campo de búsqueda. Si el producto existe, será resaltado en la lista.
4. **Eliminar producto**: El usuario podrá eliminar productos de la lista haciendo clic en un botón de "Eliminar" junto a cada producto.
5. **Menú de opciones**: El sistema estará basado en una interfaz gráfica con un formulario para ingresar productos y secciones para buscar, mostrar y eliminar productos.

### Especificaciones

- **Producto**: Cada producto será representado como un objeto en JavaScript con las propiedades `nombre`, `cantidad` y `precio`.
- **Inventario**: Será un array que contiene objetos de productos.
- **Interacción con el DOM**:
  - Agregar un nuevo producto al inventario mediante un formulario HTML.
  - Mostrar la lista de productos en el inventario en una tabla.
  - Buscar un producto por su nombre y resaltar el producto encontrado.
  - Eliminar un producto del inventario directamente desde la tabla.

### Interacción esperada

1. El usuario completará un formulario para agregar productos.
2. La lista de productos será visible en una tabla debajo del formulario.
3. Al buscar un producto por su nombre, si existe, será resaltado en la tabla.
4. El usuario podrá eliminar productos de la tabla haciendo clic en el botón "Eliminar" correspondiente.

### Maqueta

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sistema de Gestión de Inventario</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 20px;
      }

      h1 {
        text-align: center;
      }

      form {
        display: flex;
        flex-direction: column;
        max-width: 300px;
        margin: 20px auto;
      }

      input,
      button {
        margin: 10px 0;
        padding: 10px;
        font-size: 16px;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
      }

      table,
      th,
      td {
        border: 1px solid #ddd;
      }

      th,
      td {
        padding: 10px;
        text-align: center;
      }

      .highlight {
        background-color: yellow;
      }

      .delete-btn {
        background-color: red;
        color: white;
        padding: 5px;
        border: none;
        cursor: pointer;
      }

      .delete-btn:hover {
        background-color: darkred;
      }

      #searchInput {
        margin: 10px auto;
        padding: 10px;
        font-size: 16px;
        max-width: 300px;
        display: block;
      }
    </style>
  </head>
  <body>
    <h1>Sistema de Gestión de Inventario</h1>

    <!-- Formulario para agregar productos -->
    <form id="productForm">
      <input type="text" id="name" placeholder="Nombre del producto" required />
      <input type="number" id="quantity" placeholder="Cantidad" required />
      <input type="number" id="price" placeholder="Precio" required />
      <button type="submit">Agregar Producto</button>
    </form>

    <!-- Campo de búsqueda de productos -->
    <input type="text" id="searchInput" placeholder="Buscar producto por nombre" />

    <!-- Tabla que muestra los productos -->
    <table id="productTable">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ejemplo</td>
          <td>10</td>
          <td>$25.50</td>
          <td><button class="delete-btn">Eliminar</button></td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```