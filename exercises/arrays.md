# Ejercitación de arrays

### Crear y modificar un array

Crea un array llamado `miArray` que contenga los números del 1 al 5. Luego, cambia el valor del tercer elemento a 10 y muestra el array modificado por consola.

Salida esperada:

```js
[1, 2, 10, 4, 5];
```

### Sumar los elementos de un array

Dado un array de números `[3, 5, 7, 9, 11]`, escribe un programa que calcule la suma de todos los elementos del array utilizando un bucle `for`.

Salida esperada:

```js
35;
```

### Contar elementos mayores que un valor

Dado el array `[12, 45, 67, 23, 89, 34]`, escribe un programa que cuente cuántos elementos son mayores que `30`.

Salida esperada:

```js
4;
```

### Eliminar el primer y último elemento

Dado un array de frutas `["manzana", "pera", "plátano", "fresa"]`, elimina el primer y último elemento usando los métodos `.shift()` y `.pop()`. Luego, muestra el array resultante por consola.

Salida esperada:

```js
["pera", "plátano"];
```

### Encontrar el índice de un elemento

Dado el array de emojis `["✨", "🌟", "🌈", "🔥"]`, encuentra el índice del emoji `"🌈"` utilizando el método `.indexOf()`. Muestra el índice por consola.

Salida esperada:

```js
2;
```

### Concatenar dos arrays

Dado el array `["rojo", "verde", "azul"]` y el array `["amarillo", "morado"]`, concaténalos en un solo array utilizando el método `.concat()` o el operador spread (`...`). Muestra el nuevo array por consola.

Salida esperada:

```js
["rojo", "verde", "azul", "amarillo", "morado"];
```

### Elimina los duplicados

Dado un array de números, elimina los elementos duplicados y devuelve un nuevo array con los elementos únicos.

```js
const numeros = [1, 2, 3, 4, 2, 3, 5, 6, 7, 7, 8];

// Escribe tu código aquí

console.log(numerosUnicos); // Debería imprimir [1, 2, 3, 4, 5, 6, 7, 8]
```

### Invertir un array

Dado un array, escribe una función que lo invierta sin usar el método `.reverse()`. Debes hacerlo manualmente.

```js
const frutas = ["manzana", "pera", "plátano", "fresa"];

// Escribe tu función aquí

console.log(frutasInvertidas); // Debería imprimir ['fresa', 'plátano', 'pera', 'manzana']
```

### Array de objetos - Filtrar por propiedad

Tienes un array de objetos que representan personas. Filtra el array para obtener solo las personas mayores de 18 años.

```js
const personas = [
  { nombre: "Juan", edad: 15 },
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Mario", edad: 12 },
];

// Escribe tu código aquí

console.log(mayoresDeEdad); // Debería imprimir [{ nombre: 'Ana', edad: 22 }, { nombre: 'Luis', edad: 30 }]
```

### Encuentra el mayor y menor número en un array

Dado un array de números, encuentra el mayor y el menor valor en ese array sin usar `Math.max()` o `Math.min()`.

```js
const numeros = [45, 12, 85, 32, 89, 39, 69, 72];

// Escribe tu código aquí

console.log("El número mayor es:", numeroMayor); // Debería imprimir 89
console.log("El número menor es:", numeroMenor); // Debería imprimir 12
```

### Suma acumulativa

Dado un array de números, devuelve un nuevo array donde cada elemento es la suma acumulativa de los elementos anteriores en el array original.

```js
const numeros = [1, 2, 3, 4, 5];

// Escribe tu código aquí

console.log(sumaAcumulativa); // Debería imprimir [1, 3, 6, 10, 15]
```
