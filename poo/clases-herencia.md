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

## Métodos
