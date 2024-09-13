# Clases

Una vez dominamos las bases de la programación y nuestro código va creciendo cada vez más, comprobaremos que las **variables y funciones** no suelen ser suficiente como para que nuestro código esté **bien organizado** y los mecanismos que tenemos a nuestro alcance quizás no resultan todo lo prácticos que deberían ser.

Tradicionalmente, Javascript no soportaba clases de forma nativa, pero en **ECMAScript 2015** se introdujo la posibilidad de usar clases simulando como se utilizan en otros lenguajes de programación. Internamente, Javascript traduce estas clases al sistema basado en prototipos que usa en realidad, sin embargo, los programadores no necesitarán saber como funcionan los prototipos, sino que les bastará con utilizar las clases a modo de **azúcar sintáctico**, es decir, un sistema que «endulza» la forma de trabajar para que sea más agradable y familiar.

## ¿Qué es una Clase?

Como mencionamos en el apartado anterior, una clase sólo es una forma de organizar código de forma entendible con el objetivo de simplificar el funcionamiento de nuestro programa. Además, hay que tener en cuenta que las clases son «conceptos abstractos» de los que se pueden crear objetos de programación, cada uno con sus características concretas.

Esto puede ser complicado de entender con palabras, pero se ve muy claro con ejemplos:

![Clases y objetos](https://lenguajejs.com/javascript/oop/clases/clases-objetos.png)

En primer lugar tenemos la clase. La clase es el concepto abstracto de un objeto, mientras que el objeto es el elemento final que se basa en la clase. En la imagen anterior tenemos varios ejemplos:

- En el **primer ejemplo** tenemos dos objetos: pato y ratón. Ambos son animales, por lo que son objetos que están basados en la clase Animal. Tanto pato como ratón tienen las características que estarán definidas en la clase Animal: color, sonido que emiten, nombre, etc...
- En el **segundo ejemplo** tenemos dos objetos seat y opel. Se trata de dos coches, que son vehículos, puesto que están basados en la clase Vehículo. Cada uno tendrá las características de su clase: color del vehículo, número de ruedas, marca, modelo, etc...
- En el **tercer ejemplo** tenemos dos objetos cuadrado y c2. Se trata de dos formas geométricas, que al igual que los ejemplos anteriores tendrán sus propias características, como por ejemplo el tamaño de sus lados. El elemento cuadrado puede tener un lado de 3 cm y el elemento c2 puede tener un lado de 6 cm.

## Instanciar una clase

Se le llama **instanciar una clase, crear un objeto** o **crear una instancia** a la acción de crear un nuevo objeto basado en una clase particular. Esta acción la realizamos a través de la palabra clave `new`, seguida del nombre de la clase, la cuál puede tener parámetros, en cuyo caso se controlarían desde un `constructor`, concepto que veremos más adelante.

En Javascript, para instancia una clase, se utiliza una sintaxis muy similar a otros lenguajes como, por ejemplo, Java. Es tan sencillo como escribir lo siguiente:

```js
// Declaración de una clase (de momento, vacía)
class Animal {}

// Crear (instanciar) un objeto basada en una clase
const pato = new Animal();
```

## Miembros de una clase

Una clase tiene diferentes **características** que la forman, que generalmente se denominan **miembros**, y que normalmente son de dos tipos: **propiedades** y **métodos**. Vamos a ir explicándolas detalladamente. Pero primero, una tabla general para verlas en conjunto, con sus tipos:

| **Elemento**           | **Descripción**                                                                  | **Más información**             |
| ---------------------- | -------------------------------------------------------------------------------- | ------------------------------- |
| **Propiedad**          | Variable que existe dentro de una clase. Puede ser pública o privada.            | [Ver propiedades](#propiedades) |
| Propiedad pública      | Propiedad a la que se puede acceder desde fuera de la clase.                     |                                 |
| Propiedad privada      | Propiedad a la que no se puede acceder desde fuera de la clase.                  |                                 |
| Propiedad computada    | Función para acceder a una propiedad con modificaciones (getter/setter).         |                                 |
| **Método**             | Función que existe dentro de una clase. Puede ser pública o privada.             | [Ver métodos](#métodos)         |
| Método público         | Método que se puede ejecutar desde dentro y fuera de la clase.                   |                                 |
| Método privado         | Método que sólo se puede ejecutar desde dentro de la clase.                      |                                 |
| Constructor            | Método especial que se ejecuta automáticamente cuando se crea una instancia.     |                                 |
| Método estático        | Método que se ejecuta directamente desde la clase, no desde la instancia.        |                                 |
| Inicializador estático | Bloque de código que se ejecuta al definir la clase, sin necesidad de instancia. |                                 |

Como vemos, todos estas características se dividen en dos grupos:

Las propiedades: a grandes rasgos, variables dentro de clases
Los métodos: a grandes rasgos, funciones dentro de clases
Un ejemplo sencillo de cada uno:

```js
class Animal {
  // Propiedades
  name = "Garfield";
  type = "cat";

  // Métodos
  hablar() {
    return "Odio los lunes.";
  }
}
```

## La palabra clave `this`

Esta es una palabra clave que se utiliza mucho dentro de las clases para hacer referencia al objeto instanciado. Ojo, que hace referencia al **objeto instanciado** y no a la clase:

```js
class Animal {
  name; // Propiedad (variable de clase sin valor definido)

  constructor(name) {
    this.name = name; // Hacemos referencia a la propiedad name del objeto instanciado
  }
}
```

## Propiedades

Las **clases**, siendo estructuras para guardar y almacenar información, tienen unas **variables** que viven dentro de la clase. Esta información (también llamada estado) se denomina **propiedad** o **propiedad de clase** y desde ECMAScript 2020 para crearlas se hace de la siguiente forma:

```js
class Personaje {
  name; // Propiedad sin definir (undefined)
  type = "Player"; // Propiedad definida
  lifes = 5; // Propiedad definida con 5 vidas restantes
  energy = 10; // Propiedad definida con 10 puntos de energía
}
```

Tradicionalmente en Javascript, las **propiedades** acostumbraban a definirse a través del constructor, mediante la palabra clave `this`, por lo que es muy probable que también te las encuentres declaradas de esta forma, sin necesidad de declararlas fuera del constructor:

```js
class Personaje {
  constructor() {
    this.name; // Propiedad sin definir (undefined)
    this.type = "Player"; // Propiedad definida
    this.lifes = 5; // Propiedad definida con 5 vidas restantes
    this.energy = 10; // Propiedad definida con 10 puntos de energía
  }
}
```

Puesto que se trata de **propiedades de clase** y el `constructor()` es un método que se ejecuta cuando se crea el objeto (instancia de clase), ambas son equivalentes, ya que al crear un objeto se ejecutará el `constructor` y se crearán esas propiedades.

A la hora de utilizarlas, simplemente accedemos a ellas de la misma forma que vimos en el último ejemplo, haciendo uso de la palabra clave this. Veamos un ejemplo un poco más elaborado, utilizando **propiedades** y **métodos**:

```js
class Personaje {
  name; // Propiedad sin definir (undefined)
  type = "Player"; // Propiedad definida
  lifes = 5; // Propiedad definida con 5 vidas restantes
  energy = 10; // Propiedad definida con 10 puntos de energía

  constructor(name) {
    this.name = name; // Modificamos el valor de la propiedad name
    console.log(`¡Bienvenido/a, ${this.name}!`); // Accedemos al valor actual de la propiedad name
  }
}

const mario = new Personaje("Mario"); // '¡Bienvenido/a, Mario!'
```

Como se puede ver, estas **propiedades** existen en la clase, y se puede establecer de forma que todos los objetos tengan el mismo valor, o como en el ejemplo anterior, tengan valores diferentes dependiendo del objeto en cuestión, pasándole los valores específicos por parámetro.

### Ámbitos de las propiedades

Dentro de una clase tenemos dos tipos de ámbitos: **ámbito de método** y **ámbito de clase**. En primer lugar, veamos el ámbito dentro de un método. Si declaramos propiedades dentro de un método con let o const, estos elementos existirán sólo en el método en cuestión. Además, no serán accesibles desde fuera del método:

```js:line-numbers
class Personaje {
  constructor() {
    const name = "Manz";
    console.log("Constructor: " + name);
  }

  method() {
    console.log("Método: " + name);
  }
}

const c = new Personaje(); // 'Constructor: Manz'

c.name;       // -> undefined
c.method();   // -> 'Método: '
```

Observa que la variable `name` solo se muestra cuando se hace referencia a ella dentro del `constructor()` que es donde se creó y el ámbito donde existe.

En segundo lugar, tenemos el **ámbito de clase**. Si creamos propiedades de las dos formas que vimos al principio del artículo:

- Precedidas por `this`. desde dentro del constructor.
- Al inicio de la clase, fuera del constructor.

En cualquiera de estos dos casos, las propiedades tendrán alcance en toda la clase, por lo que podremos acceder a ellas tanto desde el constructor, como desde otros métodos de la clase:

```js:line-numbers
class Personaje {
  name = "Manz";           // ES2020+

  constructor() {
    this.name = "Manz";    // ES2015+
    console.log("Constructor: " + this.name);
  }

  metodo() {
    console.log("Método: " + this.name);
  }
}

const c = new Personaje(); // 'Constructor: Manz'

c.name;     // 'Manz'
c.metodo(); // 'Método: Manz'
```

### Propiedades get (getters)

Veamos el primer caso, la propiedad computada `get` o también llamada **getter**. Para definirla, simplemente añadimos la palabra clave `get` antes del nombre de la función. De resto, se define exactamente igual que una función:

```js:line-numbers
class Personaje {
  name;
  energy;

  constructor(name, energy = 10) {
    this.name = name;
    this.energy = energy;
  }

  get status() {
    return '⭐'.repeat(this.energy);
  }
}

const mario = new Personaje("Mario");
mario.energy    // 10
mario.status    // '⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐'
```

Observa que aunque la definimos como una función `status()`, luego accedemos a ella como una propiedad `mario.status`. Por eso se llama **propiedad** computada. La idea de este tipo de propiedades, es permitir pequeñas modificaciones sobre propiedades ya existentes (en nuestro caso, energy). En lugar de devolver el valor numérico, devolvemos el número de estrellas que representa la vida del personaje.

### Propiedades set (setters)

De la misma forma que podemos crear un `get` para obtener un valor, podemos utilizar un `set` para establecerlo. La idea es exactamente la misma, pero para modificar el valor. En este caso, el ejemplo no es tan didáctico, pero vamos a dar la funcionalidad inversa. Si establecemos un número de estrellas a `status`, las cuenta y asigna el número a `energy`:

```js:line-numbers
class Personaje {
  name;
  energy;

  constructor(name, energy = 10) {
    this.name = name;
    this.energy = energy;
  }

  get status() {
    return '⭐'.repeat(this.energy);
  }

  set status(stars) {
    this.energy = stars.length;
  }
}

const mario = new Personaje("Mario");
mario.energy    // 10
mario.status = '⭐⭐⭐'
mario.energy    // 3
mario.status    // '⭐⭐⭐'
```

Observa que ahora la "magia" está en el `set status(stars)`. Se comporta como una función, y al asignar tres estrellas a `mario.status`, automágicamente se ha cambiado el valor de `mario.energy`. Estas **propiedades computadas** nos pueden venir muy bien cuando queramos modificar ligeramente ciertos elementos de una forma automática y organizada.

## Métodos

Hablamos de **métodos** cuando nos referimos a **funciones** que existen en el interior de una clase. Observa el siguiente ejemplo, donde tenemos una función independiente:

```js:line-numbers
function hablar() {
  return "Hola";
}
```

Esta función no está asociada a ningún otro elemento. Simplemente existe en el ámbito global de nuestro programa. Vamos ahora a convertirla en un método de la clase `Animal` (y por lo tanto, devolver en ella algo más acorde):

```js:line-numbers
// Forma corta (recomendado)
class Animal {
  hablar() {
    return "Cuak";
  }
}
```

Observa que esto no es más una forma de incluir la función anterior dentro de nuestra clase `Animal`. Realmente, podríamos también hacerlo de la siguiente forma, sin embargo, la anterior es mucho más compacta y sencilla, por lo que es la que más se suele utilizar, pero quizás con esta te resulte más claro lo que se está haciendo dentro de la clase:

```js:line-numbers
// Forma larga
class Animal {
  hablar = function() {
    return "Cuak";
  }
}
```

Una vez declarado el método `hablar()` dentro de la clase `Animal`, podemos instanciar el objeto mediante un `new Animal()` y tener ese método disponible. Ten en cuenta que podemos crear varias variables de tipo `Animal` y serán totalmente independientes cada una:

```js:line-numbers
// Creación de una instancia u objeto (pato)
const pato = new Animal();
pato.hablar(); // 'Cuak'

// Creación de otra instancia u objeto (donald)
const donald = new Animal();
donald.hablar(); // 'Cuak'
```

Observa que el método `hablar()` existe tanto en las variables `pato` como `donald` porque ambas son de tipo Animal. Al igual que ocurre con una función normal, se le pueden pasar varios parámetros al método y trabajar con ellos como venimos haciendo normalmente con las funciones.

### Constructor de clase

Se le llama **constructor** a un método de clase especial que se ejecuta automáticamente cuando se hace un `new` de dicha clase (al instanciar el objeto). Una clase **solo puede tener un constructor**, y en el caso de que no se especifique un constructor a una clase, tendrá uno vacío de forma implícita.

Veamos el ejemplo anterior, donde añadiremos un constructor a la clase:

```js:line-numbers
class Animal {
  constructor() {
    console.log("Ha nacido un pato. 🦆");
  }

  hablar() {
    return "Cuak";
  }
}

// Creación de instancia/objeto
const pato = new Animal(); // 'Ha nacido un pato' (Se ha ejecutado implicitamente el constructor)
pato.hablar(); // 'Cuak' (Se ha ejecutado explícitamente el método hablar)
```

### Métodos estáticos

En el caso anterior, al utilizar un método como por ejemplo `hablar()`, debemos crear el objeto basado en la clase haciendo un `new Animal()`. Es lo que se denomina **crear un objeto**, crear una **instancia de clase** o **instanciar un objeto**.

Sin embargo, nos podría interesar crear **métodos estáticos** en una clase, ya que este tipo de métodos **no requieren crear una instancia**, sino que se pueden ejecutar directamente sobre la clase:

```js:line-numbers
class Animal {
  static despedirse() {
    return "Adiós";
  }

  hablar() {
    return "Cuak";
  }
}

Animal.despedirse(); // Método estático (no requiere instancia): 'Adiós'
Animal.hablar(); // Uncaught TypeError: Animal.hablar is not a function

const pato = new Animal(); // Creamos una instancia

pato.despedirse(); // Uncaught TypeError: pato.despedirse is not a function
pato.hablar(); // Método no estático (requiere instancia): 'Cuak'
```

Una de las limitaciones de los **métodos estáticos** es que en su interior sólo podremos hacer referencia a elementos que también sean estáticos. No podremos acceder a propiedades o métodos no estáticos.

### Métodos públicos

Por norma general, los métodos de una clase son **públicos**, por lo que podemos acceder tanto desde dentro de la clase como desde fuera. Observa que desde el `constructor` estamos accediendo a `hablar()` desde dentro de la clase y al crear el objeto, se llamará a ese método:

```js:line-numbers
class Personaje {
  name = "Mario";

  constructor() {
    this.hablar();
  }

  hablar() {
    console.log("It's me, Mario!");
  }
}

const mario = new Personaje(); // It's me, Mario! (se ha accedido a hablar() desde dentro de la clase)
mario.hablar(); // It's me, Mario! (se ha accedido a hablar() desde fuera de la clase)
```

### Métodos privados

¿Qué es lo que ocurre si definimos el método `hablar()` como un método privado? Para ello, simplemente le añadimos el símbolo `#` antes del nombre, asegurándonos también de incluirlo en las llamadas al método. Quedaría algo así:

```js
class Personaje {
  name = "Mario";

  constructor() {
    this.#hablar();
  }

  #hablar() {
    console.log("It's me, Mario!");
  }
}

const mario = new Personaje(); // It's me, Mario! (se ha accedido a #hablar() desde dentro de la clase)

// Da error, no se permite acceder a un método privado desde fuera de la clase
// Uncaught SyntaxError: Private field '#hablar' must be declared in an enclosing class
mario.#hablar();

// Da error, el método hablar() no existe, ya que el nombre del método es #hablar()
// Uncaught TypeError: mario.hablar is not a function
mario.hablar();
```

Como se puede contemplar, en el caso de definir el método privado, no es posible ejecutarlo desde fuera de una clase, salvo que lo hagamos a través de un método público que llame internamente al método privado.
