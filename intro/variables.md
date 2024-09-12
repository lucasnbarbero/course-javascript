# Variables

A la hora de crear programas, es vital **almacenar información** para poder utilizarla más adelante. En JavaScript, usamos **variables** para conseguirlo.

Para declarar una variable, podemos usar la palabra reservada `var` y darle un nombre. Por ejemplo:

```js:line-numbers
var message;
```

En este caso, hemos creado una variable llamada `message`, pero no le hemos asignado ningún valor todavía. Para asignarle un valor, utilizamos el operador de asignación `=`:

```js:line-numbers {3}
var message;

message = "Lucas";
```

Ahora, la variable `message` contiene el valor `"Lucas"`

## Nombramiento de variables

Existen algunas reglas para los nombres de las variables en JavaScript:

1. Los nombres de variables solo pueden incluir **letras**, **dígitos** y los símbolos especiales `$` y `_`.
2. El primer carácter no puede ser un dígito.

Aquí tienes ejemplos de nombres válidos:

```js:line-numbers
var userName;
var test123;
```

Cuando un nombre de variable contiene varias palabras, solemos usar el estilo [camelCase](https://es.wikipedia.org/wiki/Camel_case), donde la primera palabra va en minúscula y las siguientes comienzan con mayúscula. Por ejemplo: `miNombreEsLargo`.

:::info La capitalización es importante
JavaScript diferencia entre mayúsculas y minúsculas, por lo que `manzana` y `MANZANA` son variables distintas.
:::

### Nombrar cosas correctamente

El nombramiento de variables es muy importante en un proyecto de programación. Una variable debe tener un nombre claro y significativo, que describa el dato que almacena.

En proyectos reales, gran parte del tiempo lo pasamos **leyendo y modificando código existente**, más que escribiendo código nuevo. Cuando volvamos a revisar el código después de un tiempo, será mucho más fácil entenderlo si las variables tienen nombres adecuados.

Por ejemplo, es mejor usar `cantidadDeUsuarios` en lugar de algo como `a` o `data`, ya que describe mejor la información almacenada.

## Constantes `const`

Las **constantes** son variable cuyo valor **no puede ser reasignado** una vez definido. Para crear una constante, usamos la palabra reservada `const`:

```js:line-numbers
const PI = 3.1415
```

Si intentamos cambiar el valor de una constante, obtenemos un error:

```js:line-numbers
PI = 3 // -> TypeError: Assignment to constant variable.
```

Dado que no se pueden reasignar, **las constantes deben ser inicializadas con un valor** en el momento de su declaración. Esto es diferente de `var`, que puede ser declarada sin valor inicial:

```js:line-numbers
var numero; // ✅
const PI; // ❌ SyntaxError: Missing initializer in const declaration
```
