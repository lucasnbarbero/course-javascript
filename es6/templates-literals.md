# Templates Literales 🖋️

## ¿Qué son los Templates Literales? 🤔

Los templates literales (también conocidos como template strings) son una nueva forma de manejar cadenas de texto en JavaScript que se introdujo en ES6. A diferencia de las cadenas tradicionales delimitadas por comillas simples (`'`) o dobles (`"`), los templates literales están delimitados por acentos graves (`` ` ``).

Los templates literales permiten interpolar expresiones dentro de las cadenas de texto de manera más sencilla y legible. También soportan multilineas, lo que facilita la creación de textos que ocupan varias líneas.

## Sintaxis Básica 📜

Los templates literales se definen usando acentos graves en lugar de comillas simples o dobles. Dentro de un template literal, puedes usar `${expresión}` para insertar valores y expresiones.

### Interpolación de Variables

```javascript
const nombre = "Juan";
const edad = 28;

const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(mensaje); // Imprime: "Hola, mi nombre es Juan y tengo 28 años."
```

En este ejemplo, `${nombre}` y `${edad}` se reemplazan con los valores de las variables correspondientes dentro de la cadena de texto.

## Multilineas 📝

Los templates literales permiten crear cadenas de texto que abarcan varias líneas sin necesidad de concatenar múltiples cadenas o usar caracteres especiales.

```js
const direccion = `
    Calle Falsa 123,
    Ciudad Imaginaria,
    País Inventado
`;

console.log(direccion);
// Imprime:
// Calle Falsa 123,
// Ciudad Imaginaria,
// País Inventado
```

En este caso, el template literal permite mantener el formato y la indentación de la cadena de texto, haciéndola más legible.

## Expresiones y Funciones 📊

Puedes insertar cualquier expresión o llamada a función dentro de un template literal, no solo variables.

### Expresiones en Templates Literales

```js
const a = 5;
const b = 10;

const resultado = `La suma de ${a} y ${b} es ${a + b}.`;
console.log(resultado); // Imprime: "La suma de 5 y 10 es 15."
```

Aquí, `${a + b}` se evalúa y el resultado se inserta en el template literal.

### Llamada a funciones

```js
function obtenerSaludo(nombre) {
  return `¡Hola, ${nombre}!`;
}

const saludo = `${obtenerSaludo("Ana")}, ¿cómo estás?`;
console.log(saludo); // Imprime: "¡Hola, Ana!, ¿cómo estás?"
```

En este ejemplo, se llama a la función `obtenerSaludo` dentro del template literal, y el valor retornado se inserta en la cadena de texto.
