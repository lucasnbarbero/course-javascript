# Function Expression

Una `function expression` es una función que se asigna a una variable. Por ejemplo:

```js:line-numbers
//  Esto es una expresión de función
const sum = function (a, b) {
  return a + b;
}

// esto es una declaración de función
function sum(a, b) {
  return a + b;
}
```

> [!IMPORTANT] Importante
> ¡Fíjate que la `function` no tiene nombre en la `function expression`! Cuando una función no tiene nombre se le llama función anónima. Aunque en este caso, la función está asignada a una variable, lo que nos permite usarla más adelante.

Con la _function expression_, a la función se asigna a la variable `sum`. Esto significa que podemos llamar a la función usando el nombre de la variable:

```js:line-numbers
sum(1, 2); // 3
```

El comportamiento es muy similar al de una función declarada con la palabra clave `function`. Sin embargo, hay una diferencia muy importante entre ambas que debes conocer: **el hoisting**.

## Hoisting

El _hoisting_ es un término que se usa para describir cómo JavaScript _parece_ que mueve las declaraciones de funciones al principio del código, de forma que las puedas usar incluso antes de declararlas. Por ejemplo:

```js:line-numbers
sum(1, 2) // 3

function sum(a, b) {
  return a + b
}
```

Aquí primero usamos la función y la declaramos luego. ¡Y funciona! ¿Cómo puede ser? **¿No debería darnos un error ya que la función todavía no existe?**

Lo que está pasando es que JavaScript asigna en memoria durante la fase de compilación las declaraciones de funciones y por eso al ejecutarse el código tiene acceso a esa posición de memoria a la que se refiere la función.

Eso sería la explicación técnica del _hoisting_, pero si te sirve de ayuda, puedes pensar que es como si JavaScript moviese las declaraciones de funciones al principio del código.

### ¿Qué pasa con las `function expression`?

No se aplica el hoisting. Por ejemplo:

```js:line-numbers
sum(1, 2) // ❌ ReferenceError: sum is not defined

const sum = function (a, b) {
  return a + b
}
```

## Callback

En JavaScript, un **callback** es una función que se pasa como argumento a otra función y se ejecuta después de que se completa alguna operación. Los callbakcs son fundamentales para manejar la asincronía y la programación basada en eventos.

```js:line-numbers
function greet(nombre, callback) {
  console.log("Hola, " + nombre);
}

function sayGoodbye() {
  console.log("Adiós");
}

greet("Lucas", sayGoodbye); // "Hola, Lucas" | "Adiós"
```

En este ejemplo, `greet` es una función que toma un nombre y un callback como argumentos. Después de saludar al nombre dado, llama al callback `sayGoodbye`.

### Callback anónimo

A menudo, los callbacks se definen como funciones anónimas directamente en el lugar donde se pasan como argumentos.

```js:line-numbers
function greet(nombre, callback) {
  console.log("Hola, " + nombre);
}

greet("Lucas", function () {
  console.log("Adiós");
}); // "Hola, Lucas" | "Adiós"
```
