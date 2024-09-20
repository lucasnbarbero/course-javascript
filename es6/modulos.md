# Módulos en JavaScript 📦

Los **módulos** en JavaScript son una manera de organizar y reutilizar código de manera eficiente. Un módulo es simplemente un archivo que contiene código relacionado, como funciones, objetos o variables, que puedes exportar para usar en otros archivos.

## ¿Por qué usar Módulos? 🤔

- **Encapsulación**: Los módulos permiten agrupar código relacionado, lo que mejora la organización y evita conflictos de nombres (namespace).
- **Reutilización**: Puedes reutilizar el mismo código en múltiples archivos o proyectos sin tener que duplicarlo.
- **Mantenimiento**: Facilita la actualización y mantenimiento del código, ya que puedes hacer cambios en un solo lugar sin afectar el resto del proyecto.
- **Cargar Solo lo Necesario**: Los módulos te permiten cargar solo el código que necesitas, mejorando el rendimiento de la aplicación.

## Exportando y Importando Módulos 🚚

### Exportando desde un Módulo

Para exportar código desde un módulo, puedes usar la palabra clave export. Existen dos tipos principales de exportaciones: export nombrado y export default.

```js
// math.js
export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}
```

En este ejemplo, estamos exportando dos funciones, `sumar` y `restar`, desde el módulo `math.js`.

### Exportación por Defecto

```js
// operaciones.js
export default function multiplicar(a, b) {
  return a * b;
}
```

Aquí, `multiplicar` es la exportación por defecto del módulo `operaciones.js`. Un archivo solo puede tener una exportación por defecto.

### Importando un Módulo

Para utilizar el código exportado desde otro archivo, debes importarlo con la palabra clave `import`.

### Importación Nombrada

```js
// main.js
import { sumar, restar } from "./math.js";

console.log(sumar(2, 3)); // Imprime: 5
console.log(restar(5, 2)); // Imprime: 3
```

Aquí estamos importando las funciones `sumar` y `restar` desde el módulo `math.js`. Nota que usamos llaves `{}` para especificar qué exportaciones nombradas queremos importar.

### Importación por Defecto

```js
// main.js
import multiplicar from "./operaciones.js";

console.log(multiplicar(4, 5)); // Imprime: 20
```

Cuando importas una exportación por defecto, no necesitas usar llaves `{}`. Puedes darle cualquier nombre a la importación.

### Importar Todo el Módulo

También puedes importar todo un módulo bajo un solo nombre usando `*`:

```js
// main.js
import * as math from "./math.js";

console.log(math.sumar(2, 3)); // Imprime: 5
console.log(math.restar(5, 2)); // Imprime: 3
```

Esto agrupa todas las exportaciones bajo el nombre `math`.

## Ejemplo de la Vida Real: Organización de un Proyecto 🔧

Imagina que estás desarrollando una aplicación de e-commerce. Podrías organizar tu proyecto en varios módulos:

- api.js: Módulo para manejar todas las llamadas a la API.
- auth.js: Módulo para la autenticación de usuarios.
- productos.js: Módulo para gestionar los productos.
- carrito.js: Módulo para gestionar el carrito de compras.

### `api.js`

```js
export function get(url) {
  return fetch(url).then((response) => response.json());
}

export function post(url, data) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}
```

### `auth.js`

```js
import { post } from "./api.js";

export function login(usuario, contraseña) {
  return post("/api/login", { usuario, contraseña });
}

export function logout() {
  return post("/api/logout");
}
```

### `productos.js`

```js
import { get } from "./api.js";

export function obtenerProductos() {
  return get("/api/productos");
}
```

### `carrito.js`

```js
let carrito = [];

export function agregarAlCarrito(producto) {
  carrito.push(producto);
}

export function obtenerCarrito() {
  return carrito;
}
```

### `main.js`

```js
import { login, logout } from "./auth.js";
import { obtenerProductos } from "./productos.js";
import { agregarAlCarrito, obtenerCarrito } from "./carrito.js";

login("usuario", "contraseña")
  .then(() => obtenerProductos())
  .then((productos) => {
    console.log(productos);
    agregarAlCarrito(productos[0]);
    console.log(obtenerCarrito());
  })
  .catch((error) => {
    console.error("Error en el proceso:", error);
  });
```

## Conclusión 🏁

Los módulos en JavaScript son una herramienta fundamental para crear aplicaciones bien organizadas y fáciles de mantener. Permiten dividir el código en partes reutilizables y bien definidas, facilitando el desarrollo, prueba y mantenimiento de proyectos de cualquier tamaño. Con `export` e `import`, puedes gestionar las dependencias de tu proyecto de manera clara y eficiente, asegurando que tu código sea modular y escalable.
