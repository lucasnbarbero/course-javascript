# Bucles

Un bucle es una **estructura de control** que permite repetir un bloque de instrucciones. En _JavaScript_ hay varios tipos de bucles, cada uno con sus particularidades.

## `while`

El bucle `while` tiene la siguiente sintáxis:

```js:line-numbers
while (condicion) {
  //  código a ejecutar mientras se cumple la condición
}
```

El bucle comienza evaluando la condición dentro de los paréntesis. Si la condición es true, se ejecuta el código dentro de las llaves.

Después de ejecutar el código, la condición se evalúa de nuevo, y si sigue siendo verdadera, el código dentro de las llaves se ejecuta de nuevo. **Este proceso se repite hasta que la condición se evalúa como falsa**.

### Ejemplo de uso

Vamos a crear la **cuenta atrás de un cohete**. Creamos una variable `cuentaAtras` que contenga el número de segundos que faltan para el lanzamiento. En este caso, vamos a empezar con 10 segundos.

```js:line-numbers
var cuentaAtras = 10;
```

Le quitamos un segundo:

```js:line-numbers {2}
var cuentaAtras = 10;
cuentaAtras = cuentaAtras - 1;
console.log(cuentaAtras); // -> 9
```

Sabiendo esto y cómo funciona el bucle `while`, podemos crear la cuenta atrás del cohete.

```js:line-numbers
//  Iniciamos la variable fuera del bucle
var cuentaAtras = 10;

//  Mientras la cuenta atrás sea mayor que 0
while(cuentaAtras > 0) {
  //  Mostramos el valor de la cuenta atrás en cada iteración
  console.log(cuentaAtras);
  //  Restamos 1 a la cuenta atrás
  cuentaAtras--;
}

console.log("¡Despegue! 🚀")
```

### Salida de un bucle con `break`

Podemos controlar cuándo queremos salir de un bucle utilizando la palabra reservada `break`.

```js:line-numbers
var cuentaAtras = 10;

while (cuentaAtras > 0) {
  console.log(cuentaAtras);
  cuentaAtras = cuentaAtras - 1;

  // si la cuenta atrás es 5, salimos del bucle
  if (cuentaAtras === 5) {
    break; // <---- salimos del bucle
  }
}
```

Usar `break` puede ser útil en bucles si queremos salir de ellos por alguna condición en concreto.

### Saltando una iteración con `continue`

Igual que tenemos la posibilidad de "romper" el bucle con `break`, también podemos saltarnos una iteración con `continue`.

```js:line-numbers
var cuentaAtras = 10;

while (cuentaAtras > 0) {
  cuentaAtras = cuentaAtras - 1;

  // si la cuenta atrás es un número par...
  if (cuentaAtras % 2 === 0) {
    continue; // <---- saltamos a la siguiente iteración
  }

  console.log(cuentaAtras);
}
```

¿Qué aparece en la salida de la consola? El bucle está haciendo una cuenta atrás... pero le hemos dicho que si el número es par, se salte esa iteración y deje de ejecutar el código que le sigue.

## `do while`

Aunque no es muy famoso ni muy utilizado, es interesante que sepas que existe en JavaScript **un bucle que se ejecuta al menos una vez, y luego se repite mientras se cumpla una condición**. Este bucle se llama do while y tiene la siguiente sintaxis:

```js:line-numbers
do {
  // código que se ejecuta al menos una vez
} while (condicion);
```

## `for`

La estructura de control `for` en JavaScript es muy útil para ejecutar una serie de instrucciones un número determinado de veces. A diferencia de `while` que usa una condición para determinar si se ejecuta o no el bloque de código, `for` usa un contador que se incrementa en cada iteración hasta que se cumple una condición.

La sintaxis de `for` es la siguiente:

```js:line-numbers
for(incializacion; condicion; actualizacion) {
  // código a ejecutar
}
```

Importante, fíjate que `for` tiene tres partes separadas por `;`:

- La _inicialización_ se realiza antes de que se inicie el bucle y se utiliza para declarar variables y asignar valores iniciales.
- La _condición_ es una expresión _booleana_ que se evalúa antes de cada iteración del bucle. Si la expresión se evalúa como `true`, se ejecuta el bloque de código dentro del bucle. Si la expresión se evalúa como `false`, el bucle termina.
- La _actualización_ se utiliza para actualizar el valor de la variable de control del bucle después de cada iteración. Normalmente, se incrementa o decrementa el valor de la variable de control del bucle.

El siguiente ejemplo muestra cómo se puede usar `for` para imprimir los números del 1 al 10:

```js:line-numbers
for (var number = 1; number <= 10; number++) {
  console.log(number);
}
```

- La _inicialización_ es la declaración de la variable `number` y la asignación del valor `1`.
- La _condición_ es que mientras `number <= 10`, se itera el bucle.
- La _actualización_ es `number++` que incrementa el valor de `number` en 1 después de cada iteración.

### `continue` y `break`

Al igual que en `while`, `for` también tiene las palabras reservadas `continue` y `break` para controlar el flujo de ejecución del bucle.

Recuerda que `continue` se usa para saltar a la siguiente iteración del bucle y `break` para salir del bucle.

```js:line-numbers
for (var i = 0; i < 10; i++) {
  const esPar = i % 2 === 0;
  if (esPar) {
    continue;
  }

  // Solo mostramos este consola.log si es impar
  console.log(i);

  // Salimos del bucle al llegar al 7
  if (i === 7) {
    break;
  }
}
```

### Bucles anidados

Imagina que quieres crear **la tabla de multiplicar del 1 al 10**. Para ello, necesitas un bucle que itere del 1 al 10 y, dentro de ese bucle, otro bucle que itere del 1 al 10. Esto se puede hacer con dos bucles `for` anidados (uno dentro del otro).

```js:line-numbers
for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= 10; j++) {
    const resultado = i * j
    console.log(i + ' x ' + j + ' = ' + resultado)
  }
}
```
