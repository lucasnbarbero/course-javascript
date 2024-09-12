# Condicionales

El código condicional es un bloque de código que se ejecuta sólo si se cumple una condición.

## `if`

En JavaScript, usamos la palabra reservada `if` para crear un bloque condicional, así:

```js:line-numbers
if (condición) {
  // código que se ejecuta si la condición es verdadera
}
```

Imagina que querés mostrar un mensaje si la edad de un usuario es mayor o igual a 18 años.

```js:line-numbers
var edad = 18;

if(edad >= 18) {
  console.log("Eres mayor de edad")
}
```

## `else`

Es posible utilizar la palabra clave `else` para ejecutar un bloque de código diferente si la condición es falsa:

```js:line-numbers
const edad = 17

if (edad >= 18) {
  console.log('Eres mayor de edad')
} else {
  console.log('Eres menor de edad')
}
```

## `else if`

También podemos utilizar la palabra clave `else if` para comprobar más de una condición:

```js:line-numbers
if (edad >= 18) {
  console.log('Eres mayor de edad')
} else if (edad >= 16) {
  console.log('Eres casi mayor de edad')
} else {
  console.log('Eres menor de edad')
}
```

El programa comprueba la primera condición. Si es `true`, ejecuta el código dentro del bloque `if`. Si es `false`, comprueba la siguiente condición. Si es `true`, ejecuta el código dentro del bloque `else if`. Si es `false`, ejecuta el código dentro del bloque `else`.

Dicho de otra forma, entrará en el primer bloque que cumpla la condición y no entrará en los demás. Si no cumple ninguna, entonces entrará en el bloque `else`.

## La importancia de las llaves

Es importante que sepas que las llaves `{}` no siempre son obligatorias. Si el bloque sólo tiene una línea, puedes omitir las llaves:

```js:line-numbers
const edad = 18

if (edad >= 18) console.log('Eres mayor de edad')
else console.log('Eres menor de edad')
```

## `switch`

`switch` es una estructura de control que nos permite ejecutar diferentes bloques de código dependiendo del valor de una **expresión**. Esta estructura es útil cuando queremos realizar diferentes acciones basadas en una única variable. Si hay coincidencia ejecuta el bloque de código asociado. Para ello, se utiliza la sentencia `break` para separar cada caso y evitar que se sigan evaluando el resto de casos.

```js:line-numbers
switch (expresión) {
  case valor1:
    // código a ejecutar si la expresión coincide con valor1
    break

  case valor2:
    // código a ejecutar si la expresión coincide con valor2
    break
  default:
    // código a ejecutar si la expresión no coincide con ningún valor
    break
}
```

Por ejemplo, si queremos mostrar un mensaje diferente dependiendo del día de la semana:

```js:line-numbers
const dia = "lunes"

switch (dia) {
  case "lunes":
    console.log("¡Hoy es lunes! 😢")
    break

  default:
    console.log("No es lunes! 🚀")
    break
}
```

Vamos a hacer esto un poco más interesante. En JavaScript podemos recuperar la información de la hora y la fecha usando el objeto `Date`. Este objeto tiene un método llamado `getDay()` que nos devuelve el día de la semana en formato numérico, siendo 0 el domingo y 6 el sábado.

```js:line-numbers
const dia = new Date().getDay()

// segun el dia de la semana, mostramos un mensaje diferente
switch (dia) {
  case 0:
    console.log("¡Hoy es domingo! 😴");
    break;
  case 1:
    console.log("¡Nooo, es lunes! 😢");
    break;
  case 2:
    console.log("¡Hoy es martes! 🥵");
    break;
  case 3:
    console.log("¡Hoy es miércoles! 🤓");
    break;
  default:
    console.log("Se acerca el fin de! 🚀");
    break;
}
```

### Agrupando `cases`

En ocasiones, queremos que varios casos ejecuten el mismo código. En lugar de repetir en cada caso, podemos agruparlos usando el mismo `case`:

```js:line-numbers
const dia = new Date().getDay()

switch (dia) {
  case 0:
  case 6:
    console.log("¡Hoy es fin de semana! 🥳");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("¡Nooo, a trabajar! 😢");
    break;
  case 5:
    console.log("¡Hoy es viernes! 🤓");
    break;
}
```
