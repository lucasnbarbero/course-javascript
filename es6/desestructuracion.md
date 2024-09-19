# Desestructuración de Objetos y Arrays 📦🔍

<h4>¿Qúe es la Desestructuración?</h4>

La desestructuración es una característica de ES6 que permite extraer valores de objetos y arrays de manera más concisa y clara. Con esta técnica, puedes asignar los valores de un objeto o array a variables individuales de una forma más legible y directa.

## Desestructuración de Objetos 🗂️

La desestructuración de objetos te permite extraer propiedades de un objeto y asignarlas a variables con el mismo nombre que las propiedades.

### Sintáxis básica 📜

```js
const usuario = {
  nombre: "Lucas",
  edad: 30,
  pais: "Argentina",
};

const { nombre, edad, pais } = usuario;

console.log(nombre); // Imprime: "Lucas"
console.log(edad); // Imprime: 30
console.log(pais); // Imprime: "Argentina"
```

En este ejemplo, las propiedades `nombre`, `edad`, y `pais` se extraen del objeto usuario y se asignan a variables con los mismos nombres.

### Alias para Variables

Si quieres asignar una propiedad a una variable con un nombre diferente, puedes usar alias.

```js
const { nombre: nombreUsuario, edad: años } = usuario;

console.log(nombreUsuario); // Imprime: "Lucas"
console.log(años); // Imprime: 30
```

Aquí, la propiedad `nombre` se asigna a la variable `nombreUsuario`, y `edad` se asigna a años.

### Valores por Defecto

Puedes establecer valores por defecto en caso de que una propiedad no exista en el objeto.

```js
const { nombre, profesion = "Desconocida" } = usuario;

console.log(nombre); // Imprime: "Lucas"
console.log(profesion); // Imprime: "Desconocida"
```

En este caso, `profesion` tomará el valor `"Desconocida"` ya que no está presente en el objeto `usuario`.

### Ejemplo de la vida real

Supongamos que tienes un objeto que representa un producto en una tienda en línea:

```js
const producto = {
  id: 101,
  nombre: "Teclado Mecánico",
  precio: 120.99,
  enStock: true,
  categoria: "Periféricos",
  descuento: 10,
};
```

#### Sin desestructuración

La forma tradicional de acceder a las propiedades sería algo como esto:

```js
function mostrarDetallesProducto(producto) {
  const id = producto.id;
  const nombre = producto.nombre;
  const precio = producto.precio;
  const enStock = producto.enStock;
  const categoria = producto.categoria;
  const descuento = producto.descuento;

  console.log(`Producto: ${nombre}`);
  console.log(`ID: ${id}`);
  console.log(`Precio: $${precio}`);
  console.log(`En Stock: ${enStock ? "Sí" : "No"}`);
  console.log(`Categoría: ${categoria}`);
  console.log(`Descuento: ${descuento}%`);
}

mostrarDetallesProducto(producto);
```

#### Con desestructuración

```js
// Esta es una forma de desestructurar
function mostrarDetallesProducto(producto) {
  const { id, nombre, precio, enStock, categoria, descuento } = producto;
  console.log(`Producto: ${nombre}`);
  console.log(`ID: ${id}`);
  console.log(`Precio: $${precio}`);
  console.log(`En Stock: ${enStock ? "Sí" : "No"}`);
  console.log(`Categoría: ${categoria}`);
  console.log(`Descuento: ${descuento}%`);
}

// También podemos hacerlo así
function mostrarDetallesProducto({ id, nombre, precio, enStock, categoria, descuento }) {
  console.log(`Producto: ${nombre}`);
  console.log(`ID: ${id}`);
  console.log(`Precio: $${precio}`);
  console.log(`En Stock: ${enStock ? "Sí" : "No"}`);
  console.log(`Categoría: ${categoria}`);
  console.log(`Descuento: ${descuento}%`);
}

mostrarDetallesProducto(producto);
```

### Ventajas de Usar Desestructuración en Este Ejemplo

1. **Simplicidad**: El código es más corto y directo, eliminando la necesidad de asignar manualmente cada propiedad a una variable.
2. **Legibilidad**: La función es más fácil de leer porque las variables se declaran y se usan en un solo paso, lo que hace que el propósito de la función sea más evidente.
3. **Reducción de Redundancia**: No tienes que repetir `producto.` varias veces, lo que reduce la repetición y hace que el código sea menos propenso a errores.
4. **Facilidad de Modificación**: Si se agrega o quita una propiedad del objeto, solo necesitas modificar la lista en la desestructuración, en lugar de actualizar varias líneas de código.

Este ejemplo demuestra que, incluso con un objeto pequeño, la desestructuración puede hacer que tu código sea más limpio, legible y fácil de mantener.

## Desetructuración de Arrays 🔢

La desestructuración de arrays te permite asignar los elementos de un array a variables individuales en una sola línea.

### Sintaxis Básica 📜

```js
const colores = ["rojo", "verde", "azul"];

const [primerColor, segundoColor, tercerColor] = colores;

console.log(primerColor); // Imprime: "rojo"
console.log(segundoColor); // Imprime: "verde"
console.log(tercerColor); // Imprime: "azul"
```

Aquí, los valores del array `colores` se asignan a las variables `primerColor`, `segundoColor`, y `tercerColor` en el orden en que aparecen.

### Ignorar Elementos

Si no necesitas todos los valores del array, puedes ignorar algunos de ellos.

```js
const [, , tercerColor] = colores;

console.log(tercerColor); // Imprime: "azul"
```

En este ejemplo, solo se extrae el tercer elemento, ignorando los dos primeros.

### Valores por Defecto

Al igual que con los objetos, puedes establecer valores por defecto para los elementos del array.

```js
const [primero, segundo, cuarto = "amarillo"] = ["rojo", "verde"];

console.log(cuarto); // Imprime: "amarillo"
```

Aquí, como el array no tiene un tercer elemento, `cuarto` tomará el valor por defecto `"amarillo"`.

## Desestructuración Anidada 🧩

Puedes desestructurar objetos y arrays anidados para extraer valores de estructuras más complejas.

### Objetos Anidados

```js
const usuario = {
  nombre: "Lucas",
  ubicacion: {
    ciudad: "Buenos Aires",
    pais: "Argentina",
  },
};

const {
  nombre,
  ubicacion: { ciudad, pais },
} = usuario;

console.log(ciudad); // Imprime: "Buenos Aires"
console.log(pais); // Imprime: "Argentina"
```

En este ejemplo, `ciudad` y `pais` se extraen del objeto `ubicacion`, que está dentro del objeto `usuario`.

### Arrays Anidados

```js
const colores = ["rojo", ["verde claro", "verde oscuro"], "azul"];

const [rojo, [verdeClaro, verdeOscuro]] = colores;

console.log(verdeClaro); // Imprime: "verde claro"
console.log(verdeOscuro); // Imprime: "verde oscuro"
```

Aquí, los elementos anidados del array se extraen a variables individuales.

## Conclusión 🎯

La desestructuración en JavaScript es una herramienta poderosa que te permite trabajar con objetos y arrays de manera más eficiente. Simplifica el código y mejora la legibilidad, lo que es especialmente útil en proyectos más grandes y complejos.
