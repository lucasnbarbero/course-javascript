# Operadores

En JavaScript, los operadores y expresiones son fundamentales para realizar operaciones y cálculos.

## Operadores aritméticos

Estos operadores se utilizan para realizar operaciones matemáticas:

- **Suma (`+`):** Añade dos valores.
- **Resta (`-`):** Resta un valor de otro.
- **Multiplicación (`*`):** Multiplica dos valores.
- **División (`/`):** Divide un valor por otro.
- **Módulo (`%`):** Devuelve el residuo de una división.

```js:line-numbers
5 + 3 // 8
5 - 3 // 2
4 * 2 // 8
6 / 3 // 2
6 % 4 // 2 (Residuo de dividir 6 entre 4)
```

## Operadores de asignación

Estos operadores se utilizan para asignar y modificar valores en variables. El operador básico es el signo igual =, pero también hay operadores compuestos:

```js:line-numbers
// Asignación básica
var x = 10; // Asigna 10 a x

// Asignación adicional
var y = 5;
y += 3; // Equivale a y = y + 3; Resultado: 8

// Asignación de sustracción
let z = 10;
z -= 4; // Equivale a z = z - 4; Resultado: 6

// Asignación de multiplicación
let a = 7;
a *= 2; // Equivale a a = a * 2; Resultado: 14

// Asignación de división
let b = 20;
b /= 4; // Equivale a b = b / 4; Resultado: 5
```

## Operadores de comparación

Los operadores de comparación nos permiten comparar dos valores y siempre devuelven un valor booleano (true o false):

```js:line-numbers
5 > 3 // true
5 < 3 // false
```

También tenemos los operadores `>=` y `<=` que nos permiten comparar si un número es mayor o igual que otro, o si un número es menor o igual que otro.

```js:line-numbers
5 >= 3 // true
5 >= 5 // true
5 <= 3 // false
5 <= 5 // true
```

Para saber si dos valores son iguales podemos usar el operador `==` o, para saber si son diferentes, el operador `!=`.

```js:line-numbers
5 == 5 // true
5 != 5 // false
```

#### Comparación estricta

Al comparar valores de diferentas tipos, JavaScript convierte los valores a números.

Por ejemplo:

```js:line-numbers
"2" > 1; // true
"1" == 1; // true
```

**Un operador de igualdad estricto `===` comprueba la igualdad sin conversión de tipo**.

En otras palabras, si `a` y `b` son de diferentes tipos, entonces `a === b` retorna inmediatamente `false`.

Por ejemplos:

```js:line-numbers
"1" == 1; // true
"1" === 1; // false
1 == true // true
1 === true // false
```

## Operadores lógicos

### Operador AND `&&`

El operador lógico _AND_ se indica con `&&`. Devuelve `true` cuando ambos valores que conecta son `true`.

```js:line-numbers
true && true // -> true
true && false // -> false
false && false // -> false
```

### Operador OR `||`

El operador lógico _OR_ se indica con `||` y devuelve `true` cuando cualquiera de los valores que conecta es `true`.

```js:line-numbers
true || true // → true
true || false // → true
false || false // → false
```

### Operador NOT `!`

El operador lógico _NOT_ se indica con `!` e invierte el valor de un valor booleano. Se pone delante del valor que queremos invertir.

```js:line-numbers
!true // → false
!false // → true
```
