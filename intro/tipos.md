# Tipos de datos

En _JavaScript_, como cualquier otro lenguaje de programación, **vamos a querer trasladar la información del mundo real a nuestro código**. Para ello, necesitamos entender qué tipos de datos existen en el lenguaje para poder representar la información que necesitamos.

**En JavaScript tenemos 8 tipos de datos** que se dividen en dos grandes grupos: primitivos o no primitivos.

- `number`
- `bigint`
- `string`
- `boolean`
- `null`
- `undefined`
- `object`
- `Symbol`

## `number`

El tipo number representa tanto números enteros como flotantes.

```js:line-numbers
var n = 123;
n = 12.345;
```

## `bigint`

El tipo `number` no puede representar valores enteros mayores que `(2^53-1)` (eso es 9007199254740991) para positivos, o menor que `-(2^53-1)` para negativos.

Un valor `bigint` se crea agregando `n` al final de un entero:

```js:line-numbers
const bigInt = 1234567890123456789012345678901234567890n;
```

## `string`

La cadena de texto (tipo string) es otro tipo de dato muy común. En JavaScript, las cadenas de texto se representan entre comillas simples, dobles o "Backticks":

```js:line-numbers
let str = "Hola";

let str2 = 'Las comillas simples también están bien';

let phrase = `se puede incrustar otro ${str}`;
```

Las comillas dobles o simples, funcionan igual. No hay diferencia entre ellas.

Los backticks (comillas invertidas) son comillas de "funcionalidad extendida". Nos permiten incrustar variables y expresiones en una cadena de caracteres de la siguiente manera:

```js:line-numbers
var name = "Lucas";
console.log(`Hola, ${name}`) // -> "Hola, Lucas!"

console.log(`El resultado es ${2 + 1}`) // -> "El resultado es 3"
```

## `boolean`

Los booleanos representan sólo dos valores: `true`(verdadero) o `false`(falso). Por ejemplo:

- ¿La luz está encendida (`true`) o apagada (`false`)?
- ¿Está lloviendo (`true`) o no está lloviendo (`false`)?
- ¿Está el usuario logueado (`true`) o no está logueado (`false`)?

## `null`

El valor especial `null` no pertenece a ninguno de los tipos anteriores. Forma un tipo propio separado que contiene sólo el valor `null`:

```js:line-numbers
var edad = null;
```

`null` no es una "referencia a un objeto inexistente" o un "puntero nulo" como en otros lenguajes.

Es sólo un valor especial que representa "nada", "vacío" o "valor desconocido";

## `undefined`

El valor especial `undefined` también se distingue. Hace un tipo propio, igual que `null`.

El significado es "valor no asignado".

Si una variable es declarada, pero no asignada, entonces su valor es `undefined`:

```js:line-numbers
var edad;

console.log(edad) // -> undefined
```

## `object`

Los objetos en JavaScript son una colección de propiedades y métodos que definen un elemento a través de una clave y un valor.

Por ejemplo, si pensamos en una persona, podemos definir sus propiedades como su nombre, su edad, su altura, su peso, etc. Y sus métodos como caminar, correr, saltar, etc.

Para declarar un objeto usamos las llaves `{}` y dentro las propiedades y métodos separados por comas `,`. Cada propiedad o método se define con una clave y un valor separados por dos puntos `:`.

```js:line-numbers
const persona = {
  name: "Lucas", // string
  age: 30, // number
  isWorking: true, // boolean
  family: ["Yanina", "Benjamín"], // array
  address: {
    street: "Avenida Siempreviva",
    number: 742,
    city: "Springfield"
  }
}
```

## `Symbol`

El tipo `Symbol` es uno de los tipos de datos primitivos. Los símbolos son valores únicos e inmutales que se utilizan principalmente como identificadores de propiedades de objetos.

Cada símbolo es único y no se puede cambiar una vez creado. A diferencia de otros tipos de datos primitivos, los símbolos no son comparables entre sí, a menos que sean el mismo símbolo. Esto significa que incluso si dos símbolos tienen la misma descripción, seguirán siendo diferentes.

Puedes crear un símbolo utilizando la función Symbol(). La función opcionalmente puede recibir una descripción, que es útil para la depuración pero no afecta la unicidad del símbolo.

```js:line-numbers
const sym1 = Symbol('description');
const sym2 = Symbol('description');

console.log(sym1 === sym2); // false (símbolos únicos)
```

Los símbolos se utilizan principalmente para crear claves únicas para las propiedades de los objetos. Esto ayuda a evitar colisiones en los nombres de las propiedades, especialmente en bibliotecas y frameworks, donde puedes querer agregar propiedades sin riesgo de que entren en conflicto con propiedades existentes.

Ejemplo de uso:

```js:line-numbers
const uniqueKey = Symbol('uniqueKey');

const obj = {
  [uniqueKey]: 'Este es un valor único'
};

console.log(obj[uniqueKey]); // "Este es un valor único"
```
