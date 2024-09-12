# Arrays

Hasta ahora hemos visto algunos tipos de datos. Cadenas de texto, números, booleanos... Pero... **¿Qué pasa si queremos tener una colección de ellos?** Para eso tenemos los **arrays**.

Pueden ser de cualquier tipo, incluyendo números, cadenas de texto, booleanos, funciones, e incluso otros arrays. Los arrays en JavaScript son dinámicos, lo que significa que pueden cambiar de tamaño automáticamente y pueden contener elementos de diferentes tipos

## Declaración y asignación

Para declarar un _array_ usamos los corchetes `[]` y dentro los elementos de la colección separados por comas `,`.

Por ejemplo, para crear una colección de números del 1 al 5:

```js
[1, 2, 3, 4, 5];
```

Los elementos de un _array_ pueden ser de cualquier tipo, incluso otros _arrays_:

```js
[1, 2, 3, 4, [5, 6, 7, 8, 9]];
```

Y, aunque no siempre sea recomendable, puedes mezclar tipos de datos dentro:

```js
["uno", 2, true, null, undefined];
```

Para asignar un array a una variable, lo hacemos igual que con los otros tipos de datos:

```js:line-numbers
const numbers = [1, 2, 3, 4, 5];
let names = ['Dani', 'Miguel', 'Maria'];
```

## Acceso a los elementos

Para acceder a los elementos de un `array` usamos los corchetes `[]` y dentro el índice del elemento que queremos acceder. **Los índices empiezan en 0**.

```js:line-numbers
const numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]) // -> 1
console.log(numbers[2]) // -> 3
```

> [!NOTE] TOMAR NOTA!
> El índice es la posición del elemento dentro del _array_. El primer elemento tiene índice 0, el segundo índice 1, el tercero índice 2...

Si intentamos acceder a un elemento que no existe, nos devolverá undefined.

```js:line-numbers
const numbers = [1, 2, 3, 4, 5]

console.log(numbers[10]) // -> undefined
```

Puedes usar variables para acceder a los elementos de un array.

```js:line-numbers
const numbers = [1, 2, 3, 4, 5]
let index = 2

console.log(numbers[index]) // -> 3
```

## Modificar elementos

Igual que podemos acceder a los elementos de un _array_, podemos modificarlos.

```js:line-numbers
const numbers = [1, 2, 3, 4, 5]

numbers[0] = 10
numbers[2] = 30

console.log(numbers) // -> [10, 2, 30, 4, 5]
```

> [!WARNING] ¿Qué pasa aquí?
> ¿Cómo es que pese a que hemos indicado que es una constante `const` podemos modificar el Array? Aunque hay una explicación mucho más larga, que veremos más adelante, la respuesta corta es que `const` sólo impide que se reasigne el valor de la variable, no que se modifique el valor en sí.

## Métodos y propiedades

Los _arrays_ en JavaScript tienen una serie de métodos y propiedades que nos permiten trabajar con ellos de forma sencilla.

> [!TIP] ¿Qué es un método?
> Una función que se ejecuta sobre un objeto. Una propiedad es una variable que pertenece a un objeto. En este caso, el objeto es un array.

### Longitud

Puedes conocer la longitud de una colección de elementos usando la propiedad `.length`:

```js:line-numbers
const frutas = ["manzana", "pera", "plátano", "fresa"]
console.log(frutas.length) // -> 4
```

También puedes cortar su longitud asignando un nuevo valor a la propiedad .length:

```js:line-numbers
const frutas = ["manzana", "pera", "plátano", "fresa"]
frutas.length = 2

console.log(frutas) // -> ["manzana", "pera"]
console.log(frutas.length) // -> 2
```

### `.push()`

El método `push()` nos permite añadir un elemento al final de un _array_:

```js:line-numbers
const frutas = ["plátano", "fresa"]
frutas.push("naranja")
console.log(frutas) // ["plátano", "fresa", "naranja"]
```

Además, el método .push() devuelve la nueva longitud del array:

```js:line-numbers
const frutas = ["plátano", "fresa"]
console.log(frutas.length) // 2

const newLength = frutas.push("naranja")
console.log(newLength) // 3
console.log(frutas) // ["plátano", "fresa", "naranja"]
```

### `.pop()`

El método `.pop()` elimina y devuelve el último elemento de un _array_:

```js:line-numbers
const frutas = ["plátano", "fresa", "naranja"]
const ultimaFruta = frutas.pop()

console.log(frutas) // ["plátano", "fresa"]
console.log(ultimaFruta) // "naranja"
```

### `.shift()`

El método `.shift()` elimina y devuelve el primer elemento de un array. Es lo mismo que `.pop()`, pero con el primer elemento en lugar del último:

```js:line-numbers
const frutas = ["plátano", "fresa", "naranja"]
const primeraFruta = frutas.shift()

console.log(frutas) // ["fresa", "naranja"]
console.log(primeraFruta) // "plátano"
```

## Concatenar

Podemos concatenar dos _arrays_ usando el método `.concat()`.

```js:line-numbers
const numbers = [1, 2, 3]
const numbers2 = [4, 5]

const allNumbers = numbers.concat(numbers2)

console.log(allNumbers) // [1, 2, 3, 4, 5]
```

Otra forma de concatenar arrays es usando el operador ... (spread operator). Este operador propaga los elementos de un array. Así que podríamos hacer lo siguiente:

```js:line-numbers
const numbers = [1, 2, 3]
const numbers2 = [4, 5]

//                    1, 2, 3        4, 5
const allNumbers = [...numbers, ...numbers2]

console.log(allNumbers) // [1, 2, 3, 4, 5]
```

Más adelante hablaremos más de este operador y sus diferentes utilidades.

## Iteración

Ya hemos visto en clases anteriores cómo podemos crear bucles con `for` y `while`. Con estas estructuras de control, y una nueva, podemos también recorrer cada uno de los elementos de un array.

### Bucle `while`

El bucle `while` vimos que permitía ejecutar un bloque de código mientras una condición era verdadera. En el caso de la iteración de arrays, la condición generalmente se basa en el índice del elemento.

Podemos, por ejemplo, crear una variable con `let` para guardar un puntero al índice del elemento que estamos iterando. En cada iteración, podemos incrementar el valor de la variable en 1, para que en la siguiente iteración se imprima el siguiente elemento.

```js:line-numbers
let frutas = ['🍎', '🍌', '🍓'];
let i = 0; // lo usaremos como índice

while (i < frutas.length) {
  console.log(frutas[i]); // imprime el elemento en la posición i
  i++; // incrementamos el índice en 1 para la siguiente iteración
}
```

### Bucle `for`

El bucle `for` nos permitía ejecutar un bloque de código un número determinado de veces. En el caso de la iteración de arrays, podemos usarlo para recorrer cada uno de los elementos del array, usando la longitud del array como condición.

```js:line-numbers
let frutas = ['🍎', '🍌', '🍓']

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]) // imprime el elemento en la posición i
}
```

También podrías recorrer el array en orden inverso, empezando desde el último elemento hasta el primero, usando `i--` en lugar de `i++`.

```js:line-numbers
let frutas = ['🍎', '🍌', '🍓']

for (let i = frutas.length - 1; i >= 0; i--) {
console.log(frutas[i]) // imprime el elemento en la posición i
}
```

### Bucle `for...of`

Además de `while` y `for`, existe otra estructura de control que nos permite iterar sobre los elementos de un array: `for...of`. Esta estructura de control es más simple que for, ya que no necesitamos crear una variable para guardar el índice del elemento que estamos iterando.

Es mucho más sencilla y fácil de entender:

```js:line-numbers
let frutas = ['🍎', '🍌', '🍓'];

for (let fruta of frutas) {
  console.log(fruta); // imprime el elemento en la posición i
}
```

### Método `array.forEach()`

Como vimos anteriormente, los arrays tienen métodos que nos permiten realizar operaciones sobre ellos, como añadir elementos o eliminarlos. Pero tiene muchos más métodos que vamos a ver.

Uno de estos, es `array.forEach()`, que nos permite ejecutar una `function` oara cada uno de los elementos del array. Esta función recibe como parámetros el elemento que se está iterando en ese momento, el índice del elemento y el propio array.

```js:line-numbers
let frutas = ['🍎', '🍌', '🍓'];

frutas.forEach(function (fruta, index, originalArray) {
  console.log(fruta); // imprime el elemento en la posición i
})
```

Usando una `arrow function` e indicando sólo los parámetros que necesitamos de nuestra función podemos simplificarlo aún más:

```js:line-numbers
let frutas = ['🍎', '🍌', '🍓'];

frutas.forEach((fruta) => {
  console.log(fruta); // imprime el elemento en la posición i
})
```

> [!TIP]
> Algo importante es que `array.forEach()` no devuelve nada, por lo que no podemos asignar el resultado a una variable.

### ¿Cuál usar?

| Método     | Acceso al Índice | Acceso al Valor | Puede usar `break` | Control Manual del Índice |
| ---------- | ---------------- | --------------- | ------------------ | ------------------------- |
| `for`      | ✅               | ✅              | ✅                 | ✅                        |
| `while`    | ✅               | ✅              | ✅                 | ✅                        |
| `for...of` | ❌               | ✅              | ✅                 | ❌                        |
| `forEach`  | ✅               | ✅              | ❌                 | ❌                        |

## Búsqueda

Existen varios métodos que permiten, específicamente, buscar dentro de un `Array`. Estos métodos incluyen `indexOf`, `some`, `every`, `find`, `findIndex` e `includes`:

Cada uno tiene un propósito específico y una funcionalidad única.

### `indexOf()`

Permite encontrar la posición de un elemento dentro de un `Array`. Si el elemento no existe, entonces retorna `-1`.

```js
const emojis = ["✨", "🥑", "😍"];

const posicionCorazon = emojis.indexOf("😍");

console.log(posicionCorazon); // -> 2
```

### `includes()`

El método includes determina si un Array incluye un determinado elemento, devolviendo `true` o `false` según corresponda.

```js
const emojis = ["✨", "🥑", "😍"];

const tieneCorazon = emojis.includes("😍");

console.log(tieneCorazon); // -> true
```

Es la forma más sencilla y corta de buscar un elemento específico dentro de un `Array`. Sin embargo, si queremos revisar si un `Array` contiene un elemento que cumpla con una condición, entonces tenemos que utilizar otros métodos...

> [!INFO]
> El método `.includes()` también funciona con las cadenas de texto. Puedes utilizarlo para buscar una subcadena dentro de una cadena de texto: `'Hola mundo'.includes('Hola') // -> true`

### `some()`

El método `some` te permite verificar si al menos uno de los elementos de un `Array` cumple con una condición.

Para utilizarlo, le pasas una función como argumento. Esta función recibe como argumento cada uno de los elementos del `Array` y debe retornar un valor booleano.

Si al menos uno de los elementos retorna `true`, entonces el método some retorna `true`. Si ninguno de los elementos retorna `true`, entonces el método `some` retorna `false`.

```js
const emojis = ["✨", "🥑", "😍"];

const tieneCorazon = emojis.some((emoji) => emoji === "😍");
console.log(tieneCorazon); // -> true
```

¡Pero si esto ya lo podíamos hacer con `includes`! Sí, pero `some` es mucho más potente...

Podemos crear funciones más complejas para pasarle al método `some`. Por ejemplo, podemos crear una función que verifique si un `Array` contiene un elemento que sea un `string` de más de 3 caracteres.

```js
const names = ["Leo", "Isa", "Ían", "Lea"];

const tieneNombreLargo = names.some((name) => name.length > 3);
console.log(tieneNombreLargo); // -> false
```

Algo importante a tener en cuenta es que el método `some` deja de iterar sobre el `Array` en cuanto encuentra un elemento que cumple con la condición. Por ejemplo, si tenemos un `Array` de 10 elementos y el elemento número 3 cumple con la condición, el método `some` no va a iterar sobre los 7 elementos restantes:

```js
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const tieneNumeroMayorA5 = numbers.some((number) => {
  console.log(`Estoy iterando sobre el número ${number}`); // -> Imprime hasta el número 6
  return number > 5;
});

console.log(tieneNumeroMayorA5); // -> true
```

### `every()`

El método `every` te permite verificar si todos los elementos de un `Array` cumplen con una condición. Es similar a `some`, pero en lugar de verificar si al menos uno de los elementos cumple con la condición, los verifica todos.

Para utilizarlo, le pasas una función como argumento. Esta función recibe como argumento el elemento del array que está iterando en ese momento y debe retornar un valor booleano para saber si el elemento cumple con la condición.

Si todos los elementos retornan `true`, entonces el método `every` retorna `true`. Si al menos uno de los elementos retorna `false`, entonces el método `every` retorna `false`.

```js
// ¿Todos los emojis son felices?
const emojis = ["😀", "😂", "😍", "😭", "🥺", "😎"];
const todosSonFelices = emojis.every((emoji) => emoji === "😀");
console.log(todosSonFelices); // -> false

// ¿Todos los números son pares?
const numbers = [2, 4, 7, 10, 12];
const todosSonPares = numbers.every((number) => number % 2 === 0);
console.log(todosSonPares); // -> false

// ¿Todos los strings son mayores a 3 caracteres?
const names = ["Miguel", "Juan", "Itziar", "Isabel"];
const todosLosNombresSonLargos = names.every((name) => name.length > 3);
console.log(todosLosNombresSonLargos); // -> true
```

Al igual que `some`, el método `every` deja de iterar sobre el `Array` en cuanto encuentra un elemento que no cumple con la condición.

### `find()`

El método `find` te permite encontrar el primer elemento que cumple con una condición. Lo interesante es que este método te devuelve el elemento en sí, no un valor booleano como `some` y `every`. Aunque el funcionamiento es igual: hay que pasarle una función como argumento que retorne un valor booleano.

```js
const numbers = [13, 27, 44, -10, 81];
// encuentra el primer número negativo
const firstNegativeNumber = numbers.find((number) => number < 0);

console.log(firstNegativeNumber); // -> -10
```

Si no encuentra ningún elemento que cumpla con la condición, el método `find` retorna `undefined`.

```js
const numbers = [13, 27, 44, 81];
// encuentra el primer número negativo
const firstNegativeNumber = numbers.find((number) => number < 0);

console.log(firstNegativeNumber); // -> undefined
```

De nuevo, igual que `some` y `every`, el método `find` deja de iterar sobre el `Array` en cuanto encuentra un elemento que cumple con la condición.

### `findIndex()`

El método `findIndex` es similar a `find`, pero en lugar de devolver el elemento que cumple con la condición, devuelve el índice de ese elemento.

```js
const numbers = [13, 27, 44, -10, 81];

// encuentra el índice del primer número negativo
const firstNegativeNumberIndex = numbers.findIndex((number) => number < 0);

console.log(firstNegativeNumberIndex); // -> 3

// ahora puedes usar el índice para acceder al elemento
console.log(numbers[firstNegativeNumberIndex]); // -> -10
```

Si no encuentra ningún elemento que cumpla con la condición, el método `findIndex` retorna `-1`.

```js
const numbers = [13, 27, 44, 81];

// encuentra el índice del primer número negativo
const firstNegativeNumberIndex = numbers.findIndex((number) => number < 0);

console.log(firstNegativeNumberIndex); // -> -1
```

## Ordenamiento

### `sort()`

Por defecto, `.sort()` hace un ordenamiento un poco extraña.

```js
let numeros = [5, 10, 2, 25, 7];
numeros.sort();
console.log(numeros); // -> [10, 2, 25, 5, 7]
```

¿Qué ha pasado? **Este comportamiento puede resultar confuso cuando se trabaja con números**, ya que `.sort()` ordenará los números en función de su valor como cadena de texto, no de su valor numérico.

#### Ordenamiento personalizado con `sort()`

Para personalizar cómo `sort()` ordena los elementos, puedes pasar una función de comparación como argumento. La función de comparación debe devolver:

- Un **valor negativo** si el primero argumento debe aparecer antes que el segundo.
- Un **valor positivo** si el segundo argumento debe aparecer antes que el primero.
- **Cero** si ambos argumentos son iguales.

Por ejemplo, **para ordenar los números de menor a mayor**, puedes usar la siguiente función de comparación:

```js
let numeros = [5, 10, 2, 25, 7];

numeros.sort(function (a, b) {
  return a - b;
});

console.log(numeros); // [2, 5, 7, 10, 25]
```

Para ordenarlos de manera descendente, de mayor a menor, deberías cambiar el orden del return:

```js
let numeros = [5, 10, 2, 25, 7];

numeros.sort(function (a, b) {
  return b - a;
});

console.log(numeros); // [25, 10, 7, 5, 2]
```

Puedes usar una arrow function para simplificar el código:

```js
let numeros = [5, 10, 2, 25, 7];

numeros.sort((a, b) => a - b);
```

## Transformación

Ya hemos visto cómo podemos crear arrays, modificarlos y buscar en ellos. Ahora vamos a ver cómo podemos transformarlos. Esto es, cómo podemos **crear nuevos arrays a partir de los que ya tenemos**.

### `filter()`

El método `filter` crea un nuevo array con todos los elementos que devuelven `true` al ejecutar una función que le pasamos como parámetro.

Por ejemplo, podríamos filtrar en un nuevo array todos los números pares de un array de números:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6]
```

O quedarnos con todas las cadenas de texto que tengan la letra `a`:

```js
const strings = ["hola", "adiós", "casa", "coche", "perro", "gato"];

// en las cadenas de texto podemos usar el método `includes`
// para saber si una cadena contiene otra:
const stringsWithA = strings.filter((string) => string.includes("a"));

console.log(stringsWithA); // ['hola', 'adiós', 'casa', 'gato']
```

### `map()`

El método `map` crea un nuevo array de la misma longitud que el original, pero con los elementos transformados por una función que le pasamos como parámetro. Así que la función recibirá cada elemento del array y tendremos que devolver el elemento transformado.

Por ejemplo, podríamos crear un array con el doble de cada número de un array de números:

```js
const numbers = [1, 2, 3]

const doubleNumbers = numbers.map((number) => {
return number \* 2
})

console.log(doubleNumbers) // [2, 4, 6]
```

O podríamos crear un array con la longitud de cada cadena de texto de un array de cadenas:

```js
const strings = ["hola", "javascript", "lucas", "programación"];

const stringsLength = strings.map((string) => string.length);

console.log(stringsLength); // [4, 10, 4, 12]
```

### `map()` + `filter()`

En JavaScript podemos crear un encadenamiento de métodos. De esta forma, si un método devuelve un array, podemos llamar a otro método sobre ese array sin necesidad de guardarlo en una variable.

Imagina que queremos crear un array con el doble de los números y sólo quedarnos con los que sean mayores que 5. Podríamos hacerlo así:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7]

const numsGreaterThanFive = numbers
.map(number => number \* 2) // [2, 4, 6, 8, 10, 12, 14]
.filter(number => number > 5) // [6, 8, 10, 12, 14]

console.log(numsGreaterThanFive) // [6, 8, 10, 12, 14]
```

También podríamos hacerlo al revés, primero filtrando y luego transformando. Por ejemplo, filtrar los números pares y luego multiplicarlos por 2:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7]

const doubleEvenNumbers = numbers
.filter(number => number % 2 === 0) // [2, 4, 6]
.map(number => number \* 2) // [4, 8, 12]

console.log(doubleEvenNumbers) // [4, 8, 12]
```

### `reduce()`

El método `reduce` es un poco más complejo que los anteriores. Este método te permite crear un único valor a partir de un Array.

Recibe dos parámetros: una función que se ejecutará por cada elemento y un valor inicial, opcional, que será donde podremos acumular los valores.

El primer parámetro de `reduce`, que es la función que se ejecutará por cada elemento, recibe tres parámetros:

- **El acumulador**: el valor que se va a ir acumulando en cada iteración
- **El elemento** actual: el elemento del Array que estamos iterando en ese momento.
- **El índice**: la posición del elemento actual en el Array.

Y debe devolver el valor que se va a acumular en cada iteración.

Un caso de uso muy típico de `reduce` es sumar todos los elementos de un Array:

```js
const numbers = [1, 2, 3];

const sum = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber;
}, 0); // <- el 0 es el valor inicial

console.log(sum); // 6
```

Vamos a ver qué está pasando en cada iteración:

- **Iteración 1**: el acumulador vale 0 (ya que 0 es el valor inicial) y el elemento actual vale 1. Así que devolvemos 0 + 1 = 1
- **Iteración 2**: el acumulador vale 1 (el valor que devolvimos en la iteración anterior) y el elemento actual vale 2. Así que devolvemos 1 + 2 = 3
- **Iteración 3**: el acumulador vale 3 (el valor que devolvimos en la iteración anterior) y el elemento actual vale 3. Así que devolvemos 3 + 3 = 6

Por lo tanto, el valor final de `sum` es 6.
