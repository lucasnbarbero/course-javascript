# Nuevas formas de declaración: `let` y `const`

## ¿Qué es `let`? 🤔

`let` es una nueva forma de declarar variables en JavaScript que fue introducida en ES6. A diferencia de `var`, que es la forma tradicional de declarar variables, `let` tiene un alcance de bloque, lo que significa que está limitado al bloque en el que se declara (como dentro de una función, un bucle o una condición).

### Alcance de Bloque

```js
function ejemploLet() {
  if (true) {
    let mensaje = "Hola desde el bloque!";
    console.log(mensaje); // Imprime: "Hola desde el bloque!"
  }
  console.log(mensaje); // Error: mensaje no está definido
}

ejemploLet();
```

En este ejemplo, `mensaje` está definido solo dentro del bloque `if`. Intentar acceder a `mensaje` fuera de este bloque resulta en un error, porque `let` tiene un alcance de bloque.

## ¿Qué es `const`? 🔒

`const` es otra forma de declarar variables introducida en ES6. A diferencia de `let`, una variable declarada con `const` no puede ser reasignada después de su inicialización. Esto significa que el valor de una variable `const` es constante, aunque el contenido de los objetos o arrays declarados como `const` sí puede ser modificado.

```js
const pi = 3.14159;
console.log(pi); // Imprime: 3.14159

pi = 3.14; // Error: asignación a una constante
```

En este caso, intentamos reasignar el valor de `pi`, lo cual genera un error porque `pi` fue declarada con `const` y su valor no puede ser cambiado una vez asignado.

## ¿Cómo usar `let` y `const` de manera efectiva? 💡

1. Usar `let` cuando necesites una variable cuyo valor pueda cambiar:
   - Utiliza `let` en bucles y cuando trabajes con variables temporales cuyo valor se actualizará durante la ejecución del código.
2. Usar `const` para declarar valores constantes que no deben cambiar:
   - Utiliza `const` para declarar constantes y evitar cambios accidentales en valores que no deberían modificarse.

### Uso de `let` en un bucle

```js
for (let i = 0; i < 5; i++) {
  console.log(i); // Imprime: 0, 1, 2, 3, 4
}
console.log(i); // Error: i no está definido
```

Aquí, `i` está definido dentro del bucle `for` y no puede ser accedido fuera de él, gracias al alcance de bloque de `let`.

### Uso de `const` con objetos

```js
const usuario = {
  nombre: "Ana",
  edad: 30,
};

usuario.nombre = "Ana María"; // Esto está permitido
console.log(usuario.nombre); // Imprime: "Ana María"

usuario = {}; // Error: asignación a una constante
```

En este ejemplo, el objeto `usuario` es declarado con `const`, por lo que no podemos reasignar `usuario` a un nuevo objeto. Sin embargo, podemos modificar las propiedades del objeto original.

## Conclusión 🎯

`let` y `const` ofrecen una forma más moderna y segura de manejar variables en JavaScript. `let` permite un alcance de bloque más claro y evita problemas con la redeclaración de variables, mientras que `const` ayuda a garantizar que los valores constantes no sean modificados accidentalmente. Usar `let` y `const` adecuadamente te ayudará a escribir código más limpio, predecible y menos propenso a errores.
