# Scope y Closures

Entender cómo se manejan las variables y su acceso es fundamental para evitar errores comunes y escribir código más predecible. Aquí es donde entran en juego los conceptos de **scope** y **closures**.

## Scope

El **scope** (_ámbito_) define el área en la que las variables son accesibles. Esto significa que, dependiendo de dónde declares una variable, podrás o no acceder a ella desde diferentes partes del código. Existen tres tipos principales de scope: **global**, **local**, y **de bloque**.

### Scope Global

Las variables declaradas fuera de cualquier función o bloque tienen un scope global, lo que significa que pueden ser accedidas desde cualquier parte del código.

```js:line-numbers
let nombre = "Lucas"; // Variable de scope global

function saludar() {
  console.log("Hola " + nombre); // Puede acceder a 'nombre'
}

saludar(); // "Hola Lucas"
```

En este ejemplo, la variable `nombre` es global, por lo que puede ser usada dentro de la función `saludar`.

### Scope Local

Las variables declaradas dentro de una función tienen scope local, lo que significa que solo pueden ser accedidas dentro de esa función.

```js:line-numbers
function saludar() {
  let nombre = "Lucas"; // Variable de scope local
  console.log("Hola " + nombre);
}

saludar(); // "Hola Lucas"
console.log(nombre); // ❌ Error: nombre is not defined
```

### Scope de Bloque

Con la introducción de `let` y `const` en ES6, ahora también tenemos scope de bloque, que se refiere a las variables definidas dentro de un bloque `{}` (por ejemplo, dentro de un `if` o `for`).

```js:line-numbers
if (true) {
  let mensaje = "Hola, soy un bloque"; // Variable de scope de bloque
  console.log(mensaje); // "Hola, soy un bloque"
}

console.log(mensaje); // ❌ Error: mensaje is not defined
```

### Anidacion de Scopes

Los scopes pueden estar anidados. Una función puede acceder a variables en su propio scope, así como en cualquier scope externo, pero no al revés.

```js:line-numbers
let nombre = "Lucas";

function saludar() {
  let saludo = "Hola";
  console.log(saludo + " " + nombre); // Accede a 'saludo' (local) y 'nombre' (global)
}

saludar(); // "Hola Lucas"
console.log(saludo); // ❌ Error: saludo is not defined
```

## Closures

Un **closure** (_cierre_) en JavaScript es una característica que permite a una función recordar el entorno en el que fue creada. Esto significa que una función puede acceder a variables de scope externo, incluso después de que el scope externo haya terminado de ejecutarse.

### ¿Cómo funciona un Closure?

Cuando una función se define dentro de otra función, la función interna tiene acceso a las variables de la función externa. Incluso después de que la función externa haya terminado su ejecución, la función interna sigue teniendo acceso a esas variables. Esto es lo que llamamos un _closure_.

```js:line-numbers
function crearSaludador(nombre) {
  return function () {
    console.log(`¡Hola, ${nombre}!`);
  };
}

const saludarLucas = crearSaludador("Lucas");
saludarLucas(); // ¡Hola, Lucas!

const saludarMaria = crearSaludador("Maria");
saludarMaria(); // ¡Hola, Maria!
```

#### ¿Qué pasa aquí?

- Función externa `crearSaludador`:
  - Es una función que toma un parámetro y devuelve una nueva función.
  - La función devuelta (closure) tiene acceso al parámetro `nombre` incluso después de que `crearSaludador` haya terminado de ejecutarse.
- Función interna:
  - La función devuelta recuerda el entorno en el cual fue creada, es decir, el valor de `nombre`.
- Ejecutar el Closure:
  - Cuando llamamos a `saludarLucas()`, se ejecuta la función devuelta que recuerda el valor de `nombre` como "Lucas".
  - Cuando llamamos a `saludarMaria()`, se ejecuta la función devuelta que recuerda el valor de `nombre` como "Maria".

### Otro ejemplo: contador

Aquí hay otro ejemplo que muestra cómo un closure puede ser útil para crear un contador que mantiene su estado:

```js:line-numbers
function crearContador() {
  let cuenta = 0;

  return function() {
    cuenta += 1;
    return cuenta;
  };
}

const contador = crearContador();
console.log(contador()); // 1
console.log(contador()); // 2
console.log(contador()); // 3
```

En este ejemplo, `crearContador` devuelve una función que incrementa el contador cada vez que se llama. La variable cuenta está en el scope de la función interna, así que la función interna puede acceder y modificar cuenta cada vez que se llama, a pesar de que la función `crearContador` ya ha terminado.
