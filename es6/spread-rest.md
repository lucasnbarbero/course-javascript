# Operadores Spread y Rest 🌟

Los operadores **spread** (`...`) y **rest** (`...`) son dos características poderosas introducidas en ES6 que permiten trabajar con arrays, objetos y funciones de manera más flexible y eficiente. Aunque comparten la misma sintaxis (`...`), su uso varía según el contexto.

## Operador Spread 👐

El operador **spread** se utiliza para "expandir" un array o un objeto en elementos individuales. Es útil cuando necesitas pasar elementos de un array como argumentos a una función, combinar arrays u objetos, o clonar estructuras de datos.

### Ejemplo con Arrays

```js
const numeros = [1, 2, 3];
const masNumeros = [...numeros, 4, 5, 6];

console.log(masNumeros); // Imprime: [1, 2, 3, 4, 5, 6]
```

Aquí, `...numeros` expande los elementos del array `numeros` y los inserta en `masNumeros`, seguido por los elementos adicionales `[4, 5, 6]`.

### Ejemplo con Objetos

```js
const usuario = {
  nombre: "Lucas",
  edad: 30,
};

const usuarioActualizado = {
  ...usuario,
  email: "lucas@example.com",
};

console.log(usuarioActualizado);
// Imprime: { nombre: "Lucas", edad: 30, email: "lucas@example.com" }
```

En este ejemplo, `...usuario` expande las propiedades del objeto `usuario` dentro de `usuarioActualizado`, al cual se le agrega una nueva propiedad `email`.

### Copia y Combina Arrays u Objetos

El operador spread también es excelente para crear copias o combinar estructuras de datos.

```js
// Clonar un array
const copiaNumeros = [...numeros];
console.log(copiaNumeros); // Imprime: [1, 2, 3]

// Combinar dos arrays
const combinados = [...numeros, ...masNumeros];
console.log(combinados); // Imprime: [1, 2, 3, 1, 2, 3, 4, 5, 6]

// Combinar objetos
const usuarioCombinado = {
  ...usuario,
  ...usuarioActualizado,
};
console.log(usuarioCombinado);
// Imprime: { nombre: "Lucas", edad: 30, email: "lucas@example.com" }
```

## Operador Rest 🛑

El operador **rest** se utiliza para agrupar el "resto" de elementos o propiedades en un array u objeto. Es útil en la desestructuración y en funciones que necesitan recibir un número indeterminado de argumentos.

### Ejemplo en Funciones

```js
function sumar(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumar(1, 2, 3)); // Imprime: 6
console.log(sumar(4, 5)); // Imprime: 9
```

Aquí, `...numeros` captura todos los argumentos pasados a la función `sumar` en un array llamado `numeros`.

### Desestructuración con Rest

El operador **rest** también se puede usar en la desestructuración de arrays y objetos para capturar los elementos restantes.

#### En Arrays

```js
const colores = ["rojo", "verde", "azul", "amarillo", "naranja"];
const [primerColor, segundoColor, ...otrosColores] = colores;

console.log(primerColor); // Imprime: "rojo"
console.log(segundoColor); // Imprime: "verde"
console.log(otrosColores); // Imprime: ["azul", "amarillo", "naranja"]
```

Aquí, `...otrosColores` captura todos los elementos restantes del array colores después del segundo.

#### En Objetos

```js
const usuario = {
  nombre: "Lucas",
  edad: 30,
  email: "lucas@example.com",
  pais: "Argentina",
};

const { nombre, email, ...resto } = usuario;

console.log(nombre); // Imprime: "Lucas"
console.log(email); // Imprime: "lucas@example.com"
console.log(resto); // Imprime: { edad: 30, pais: "Argentina" }
```

En este ejemplo, `...resto` captura las propiedades `edad` y `pais` que no fueron desestructuradas.

## Conclusión 🎯

Los operadores **spread** y \*\* \*\* son herramientas versátiles que mejoran la flexibilidad y la eficiencia en tu código JavaScript. Facilitan la manipulación de arrays y objetos, así como la gestión de argumentos en funciones, permitiéndote escribir código más limpio y legible.
