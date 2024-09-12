# Funciones

Las _funciones_ son uno de los conceptos más importantes en _JavaScript_ y casi cualquier lenguaje de programación.

**Una función es un bloque de código que realiza una tarea específica cuando se llama**. Puedes pensar en una función como en un microondas: le das algo para cocinar, le pasas algunos parámetros (como el tiempo y la potencia) y luego hace su trabajo y te devuelve el resultado.

En JavaScript, las funciones se pueden definir de varias maneras, pero la forma más común y básica es mediante la palabra clave function. Esta es tu primera función:

```js:line-numbers
function saludar() {
  console.log("Hola Lucas");
}
```

Para llamar a una función, simplemente escribimos su nombre seguido de paréntesis:

```js:line-numbers
saludar();
saludar();
saludar();
```

## Devolviendo un resultado

Las funciones pueden devolver un resultado. Para ello, utilizamos la palabra reservada `return` y después el valor que queremos devolver:

```js:line-numbers
function sumar() {
  return 1 + 1;
}
```

Ahora, cada vez que llamamos a la función `sumar`, nos devolverá el resultado de la suma:

```js:line-numbers
//  Podemos guardar el resultado en una variable
const resultado = sumar();

//  O ver en consola directamente el resultado
console.log(sumar());
```

### Una función realmente útil

La función `saludar` y `sumar` no parecen muy útiles. Vamos a crear una función que nos devuelva un número aleatorio del 1 al 10.

Para esto, vamos a descubrir `Math`, un objeto incorporado en JavaScript que tiene propiedades y métodos para constantes y funciones matemáticas. Vamos a ver dos métodos que nos van a ser muy útiles:

- `Math.random()`: devuelve un número aleatorio entre 0 y 1, con decimales.
- `Math.floor()`: redondea un número hacia abajo.

Sabiendo esto, podemos crear la siguiente función:

```js:line-numbers
function getRandomNumber() {
  //  Recuperamos un número aleatorio entre 0 y 1
  const random = Math.random(); // Por ejemplo: 0.68034873

  //  Lo multimplicamos por 10 para que esté entre 0 y 10
  const multiplied = random * 10; // -> 6.8034873

  //  Redondeamos hacia abajo para que esté entre 0 y 9
  const rounded = Math.floor(multiplied) // -> 6

  //  Le sumamos uno para que esté entre 1 y 10
  const result = rounded + 1; // -> 7

  //  Devolvemos el resultado
  return result;
}
```

Aquí pusimos en práctica unas cuantas cosas: _constantes_, _operadores_, _comentarios_... ¡y todo en una función!
