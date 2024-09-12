# Objetos

Los objetos en JavaScript son una colección de propiedades y métodos que definen un elemento a través de una clave y un valor.

Por ejemplo, si pensamos en una persona, podemos definir sus propiedades como su nombre, su edad, su altura, su peso, etc. Y sus métodos como caminar, correr, saltar, etc.

## Declaración y asignación

Para declarar un objeto usamos las llaves `{}` y dentro las propiedades y métodos separados por comas `,`. Cada propiedad o método se define con una clave y un valor separados por dos puntos `:`.

Por ejemplo, vamos a crear un objeto que represente a una persona:

```js:line-numbers
const persona = {
  name: "Lucas",
  age: 30,
  isWorking: true,
};
```

Las propiedades y métodos de un objeto **pueden ser de cualquier tipo de JavaScript**, incluso otros objetos o arrays.

```js:line-numbers
const persona = {
  name: "Lucas",
  age: 30,
  isWorking: true,
  family: ["Yanina", "Benjamín"], // array
  address: {
    // otro objeto
    street: "Avenida Siempreviva",
    number: 742,
    city: "Springfield",
  },
};
```

Y, claro, como hemos comentado antes, también podemos tener funciones. **Cuando una función es parte de un objeto se le llama método**.

```js:line-numbers
const persona = {
  name: "Lucas",
  age: 30,
  isWorking: true,
  family: ["Yanina", "Benjamín"], // array
  address: {
    // otro objeto
    street: "Avenida Siempreviva",
    number: 742,
    city: "Springfield",
  },
  walk: function () {
    console.log("Estoy caminando");
  },
};
```

## Acceder a propiedades y métodos

Para acceder a las propiedades y métodos de un objeto usamos el punto . y el nombre de la propiedad o método.

```js:line-numbers
const persona = { name: "Lucas" };
console.log(persona.name); // -> Lucas
```

Si intentamos acceder a una propiedad o método que no existe, nos devolverá `undefined`.

```js:line-numbers
const persona = { name: "Lucas" };
console.log(persona.fullName); // -> undefined
```

Puedes usar variables para acceder a las propiedades y métodos de un objeto. Para ello, tienes que usar la notificación por corchetes `[]`.

```js:line-numbers
const persona = { name: "Lucas" };
let property = "name";

console.log(persona[property]); // -> Lucas
```

También necesitas usar los corchetes si la clave de la propiedad o método tiene espacios o caracteres especiales.

```js:line-numbers
const persona = { "full name": "Lucas" };

console.log(persona["full name"]); // -> Lucas

// ❌ no puedes hacer esto
// persona.full name
```

Igual que las propiedades, puedes acceder a los métodos de un objeto usando cualquiera de las dos formas anteriormente comentadas:

```js:line-numbers
const persona = {
  name: 'Lucas',
  walk: function () {
    console.log('Estoy caminando')
  }
}

persona.walk() // -> Estoy caminando

let method = 'walk'
persona[method]() // -> Estoy caminando
```

## Añadir y modificar propiedades

Igual que podemos acceder a las propiedades de un objeto, podemos añadir nuevas propiedades o modificar las existentes.

```js:line-numbers
const persona = { name: "Lucas" };

persona.age = 30;

console.log(persona); // -> { name: 'Lucas', age: 30 }
```

En el código estamos modificando el objeto `persona` añadiendo la propiedad age con el valor `30`.

## Eliminar propiedades de un objeto

Para eliminar una propiedad de un objeto usamos la palabra reservada delete.

```js:line-numbers
const persona = { name: "Lucas", age: 18 };

delete persona.age;

console.log(persona); // -> { name: 'Lucas' }
```

## Atajos

Trabajar con objetos es muy común en JavaScript. Vamos a ver algunos atajos que nos permiten trabajar con ellos de forma más cómoda, tanto a la hora de crearlos como de recuperar sus propiedades.

### Atajo al crear un objeto

Imagina que quieres crear un objeto y que algunas de sus propiedades usen como valor algunas variables que ya tenemos.

```js:line-numbers
const name = "Spidey";
const universe = 42;

const spiderman = {
  name: name,
  universe: universe,
  powers: ["web", "invisibility", "spider-sense"],
};
```

En este caso, podemos usar un atajo para crear el objeto. Si la propiedad y la variable tienen el mismo nombre, podemos omitir el valor y dejar solo el nombre de la propiedad.

```js:line-numbers
const name = "Spidey";
const universe = 42;

const spiderman = {
  name, // <- automáticamente asigna el valor de la variable name
  universe, // <- automáticamente asigna el valor de la variable universe
  powers: ["web", "invisibility", "spider-sense"],
};
```

Fíjate que si tuvieramos powers fuera del objeto, podríamos crear el objeto en la misma línea:

```js:line-numbers
const name = "Spidey";
const universe = 42;
const powers = ["web", "invisibility", "spider-sense"];

const spiderman = { name, universe, powers };
```

### Destructuración: el atajo al recuperar propiedades

En la anterior clase hemos visto que para recuperar una propiedad de un objeto podemos usar la notación de corchetes o la notación de punto:

```js:line-numbers
const spiderman = {
  name: "Spidey",
  universe: 42,
  powers: ["web", "invisibility", "spider-sense"],
};

console.log(spiderman["name"]); // Spidey
console.log(spiderman.name); // Spidey
```

A veces queremos recuperar el valor de la propiedad y guardarlo en una variable, para usarlo más adelante. Haríamos algo así:

```js:line-numbers
const universe = spiderman.universe;
console.log(universe); // 42

const powers = spiderman["powers"][1];
console.log(powers); // 'invisibility'
```

A la hora de acceder a las propiedades existe un **atajo** llamado **desestructuración** (o destructuring en inglés) muy interesante que nos permite recuperar el valor de una propiedad y guardarlo en una variable de una.

Lo importante es que tengamos en cuenta que **la variable que se creará tendrá el mismo nombre que la propiedad que estamos recuperando**.

```js
const { universe } = spiderman;
console.log(universe); // 42
```

Además, puedes recuperar tantas propiedades como quieras, separándolas por comas.

```js
const { universe, name, powers } = spiderman;
console.log(universe); // 42
console.log(name); // 'Spidey'
console.log(powers); // ['web', 'invisibility', 'spider-sense']
```

#### Renombrar variables y valores por defecto

Si quieres que la variable que se crea tenga un **nombre diferente al de la propiedad**, puedes hacerlo así:

```js
const { universe: universeNumber } = spiderman;
console.log(universeNumber); // 42
```

Lo que estamos haciendo es recuperar la propiedad `universe` pero crear la constante con el nombre `universeNumber`.

Si la propiedad no existe, podemos asignarle un valor por defecto:

```js
const { name, isAvenger = false } = spiderman;
console.log(name); // 'Spidey'
console.log(isAvenger); // false
```

El objeto que hemos creado antes no tenía la propiedad `isAvenger`, pero al recuperarla le hemos asignado un valor por defecto de `false`. Si no le hubiéramos asignado un valor por defecto, la variable `isAvenger` sería `undefined`.

Así que si recuperamos una propiedad que no existe, la variable que se creará tendrá el valor por defecto que le hayamos asignado. Y lo hacemos usando el operador `=`.

#### Objetos anidados y atajo

Ya sabemos que podemos tener un objeto dentro de un objeto:

```js:line-numbers
const spiderman = {
  name: "Spidey",
  universe: 42,
  powers: ["web", "invisibility", "spider-sense"],
  partner: {
    name: "Mary Jane",
    universe: 42,
    powers: ["red hair", "blue eyes"],
  },
};
```

Para acceder a las propiedades de un objeto anidado, podemos usar la notación de corchetes o la notación de punto:

```js
console.log(spiderman.partner.name); // 'Mary Jane'
console.log(spiderman["partner"]["name"]); // 'Mary Jane'
```

Si queremos recuperar la propiedad `name` del objeto `partner` y guardarla en una variable, podemos hacerlo así:

```js:line-numbers
const { partner } = spiderman;
const { name } = partner;
console.log(name); // 'Mary Jane'
```

Pero también podemos hacerlo en una sola línea:

```js:line-numbers
const { partner: { name } } = spiderman;
console.log(name); // 'Mary Jane'
```

Lo que estamos haciendo es: del objeto `spiderman` extrae la propiedad `partner`, y de esta, extrae la propiedad `name`. Como resultado **sólo crearemos la variable name con el valor `'Mary Jane'`**.

## Iteración

El manejo de objetos es uno de los pilares y es crucial conocer cómo podemos iterar o recorrer los mismos. Existen varias formas de hacerlo y en esta clase vamos a revisar algunas de las más comunes: el bucle `for...in` y los métodos `Object.keys()`, `Object.values()` y `Object.entries()`.

### `for...in`

La estructura de control `for...in` nos permite crear un bucle que itera sobre todas las propiedades enumerables de un objeto, en un orden arbitrario.

```js:line-numbers
const spiderman = {
  name: "Spidey",
  universe: 42,
  powers: ["web", "invisibility", "spider-sense"],
};

for (const property in spiderman) {
  console.log(`${property}: ${spiderman[property]}`);
}

// -> name: Spidey
// -> universe: 42
// -> powers: web,invisibility,spider-sense
```

### Iterar con Object.keys()

El método `Object.keys()` retorna un array con las propiedades enumerables de un objeto.

```js:line-numbers
const spiderman = {
  name: "Spidey",
  universe: 42,
  powers: ["web", "invisibility", "spider-sense"],
};

const properties = Object.keys(spiderman);

console.log(properties.length); // 3

properties.forEach((property) => {
  console.log(property);
});

// -> name
// -> universe
// -> powers
```

Este código hace algo muy similar al anterior, pero utilizando `Object.keys()` para obtener las propiedades del objeto.

### Iterando con `Object.values()`

El método `Object.values()` retorna un array con los valores correspondientes a las propiedades enumerables de un objeto.

```js:line-numbers
const values = Object.values(spiderman);

values.forEach((value) => {
  console.log(value);
});

// -> Spidey
// -> 42
// -> [ 'web', 'invisibility', 'spider-sense' ]
```

Como ves, la diferencia con `Object.values()` es que este método retorna los valores y `Object.keys()` retorna las propiedades.

### Iterando con `Object.entries()`

El método `Object.entries()` retorna un array de arrays, donde cada subarray es un par `[propiedad, valor]` correspondiente a las propiedades enumerables de un objeto.

```js:line-numbers
const entries = Object.entries(spiderman);

entries.forEach((entry) => {
  console.log(entry);
});

// -> [ 'name', 'Spidey' ]
// -> [ 'universe', 42 ]
// -> [ 'powers', [ 'web', 'invisibility', 'spider-sense' ] ]
```

Lo interesante es que este método nos da acceso tanto a las propiedades como a los valores. Lo puedes ver más claro en el siguiente ejemplo:

```js:line-numbers
const entries = Object.entries(spiderman);

entries.forEach((entry) => {
  const property = entry[0];
  const value = entry[1];

  console.log(`${property}: ${value}`);
});
```

## Encadenamiento opcional

Si intentamos acceder a una propiedad de un objeto que no existe... **¡se romperá nuestra aplicación!**

Por suerte, existen formas de evitar que esto ocurra. En esta clase veremos algunas de ellas y presentaremos el **operador de Encadenamiento Opcional**, también llamado _Optional Chaining_.

Este operador es especialmente útil cuando trabajamos con objetos que podrían tener estructuras complejas o variables que podrían no estar definidas en determinados momentos de la ejecución de nuestro código.

### El error fatal de intentar leer una propiedad de undefined

**Uno de los errores más comunes en JavaScript**, y que estoy seguro que verás tarde o temprano, es el que dice que **no puedes leer una propiedad de `undefined`**.

Este error ocurre cuando intentamos acceder a una propiedad de un objeto que no existe. Por ejemplo:

```js:line-numbers
const gamesystem = {
  name: "PS5",
  price: 550,
  specs: {
    cpu: "AMD Ryzen Zen 2",
    gpu: "AMD Radeon RDNA 2",
  },
};

console.log(gamesystem.name); // -> PS5

console.log(gamesystem.specifications); // -> undefined

console.log(gamesystem.specifications.ram);
// ❌ Uncaught TypeError: Cannot read property 'ram' of undefined
```

El error parece inocente pero fíjate. En lugar de usar la propiedad `specs` hemos usado `specifications`. Pero esto es suficiente para que JavaScript nos diga que no puede leer la propiedad `ram` de `undefined`.

#### Evitando el error con `if`

Una forma de evitar este error es usando un `if` para comprobar si la propiedad existe antes de intentar acceder a ella:

```js
if (typeof gamesystem.specifications === "object") {
  console.log(gamesystem.specifications.ram);
} else {
  console.log("No hay especificaciones");
}
```

> [!WARNING] ¡Cuidado con esto!
> Al usar el operador `typeof` con un valor `null` nos dice que es `object`. Esto es un error histórico del lenguaje. Así que si la propiedad `specifications` es `null`, el `if` se ejecutará y obtendremos un error al intentar acceder a ram. Para evitar esto, podemos añadir una comprobación extra: `gamesystem.specifications !== null`.

Estamos usando el operador `typeof` para comprobar si la propiedad `specifications` es un objeto. Ya lo vimos en la primera sección del curso y nos ayuda a asegurarnos que `specifications` existe y es un objeto, antes de acceder a su propiedad `ram`.

#### El operador `in` para comprobar si una propiedad existe

Otra forma de comprobar si una propiedad existe es usando el operador `in`. Este operador comprueba si una propiedad existe en un objeto y devuelve `true` o `false`:

```js
console.log("name" in gamesystem); // -> true
console.log("specifications" in gamesystem); // -> false
console.log("specs" in gamesystem); // -> true

if ("specifications" in gamesystem) {
  console.log(gamesystem.specifications.ram);
} else {
  console.log("No hay especificaciones");
}
```

¡Pero ojo! ¿Qué pasa si la propiedad existe pero su valor es `undefined`?

```js
const gamesystem = {
  name: "PS5",
  price: 550,
  specifications: undefined,
};

console.log("specifications" in gamesystem); // -> true

gamesystem.specifications.ram;
// ❌ Uncaught TypeError: Cannot read property 'ram' of undefined
```

El operador `in` puede ser interesante para comprobar si una propiedad existe en un objeto, pero no nos sirve para comprobar si el valor de esa propiedad es `undefined` y habría que hacer comprobaciones extra para evitar el error.

```js
if ("specifications" in gamesystem && gamesystem.specifications !== undefined && gamesystem.specifications !== null) {
  console.log(gamesystem.specifications.ram);
} else {
  console.log("No hay especificaciones");
}
```

Mucho código para algo tan simple. Por suerte, existe una forma más sencilla de hacerlo.

#### El operador de Encadenamiento opcional, ?.

El Operador de Encadenamiento Opcional `?.` permite leer el valor de una propiedad ubicada profundamente dentro de una cadena de objetos conectados, sin tener que validar expresamente que cada referencia en la cadena es válida.

```js
const gamesystem = {
  name: "PS5",
  price: 550,
  specs: {
    cpu: "AMD Ryzen Zen 2",
    gpu: "AMD Radeon RDNA 2",
  },
};

console.log(gamesystem.specifications?.cpu);
// -> undefined
console.log(gamesystem.specs?.cpu);
// -> AMD Ryzen Zen 2
```

Si la propiedad `specifications` no existe, el operador `?.` devuelve `undefined` y no se produce ningún error. Si la propiedad existe, el operador `?.` devuelve el valor de la propiedad.

##### Beneficios del Operador de Encadenamiento Opcional

Uno de los principales beneficios del operador de encadenamiento opcional es que simplifica nuestro código y lo hace más legible. En lugar de tener que hacer varias comprobaciones para asegurarnos de que un objeto y sus propiedades existen, podemos intentar acceder directamente a la propiedad que nos interesa, y JavaScript no se quejará si no existe.

Este operador es especialmente útil en aplicaciones con datos dinámicos, donde no siempre podemos garantizar la estructura exacta de nuestros objetos.

```js:line-numbers
const user = {
  name: "Peter",
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      push: false,
      marketing: undefined,
    },
  },
};

// la forma clásica de acceder a una propiedad anidada
// de forma segura
let email = undefined;
if (user && user.settings &&
  user.settings.notifications &&
  user.settings.notifications.email) {
  email = user.settings.notifications.email;
}

console.log(email); // -> true

// con Optional Chaining Operator
const email = user?.settings?.notifications?.email;
console.log(email); // -> true
```

El operador de encadenamiento opcional es una excelente herramienta para trabajar con objetos en JavaScript, especialmente cuando no podemos garantizar la estructura o presencia de ciertos datos. **Nos ayuda a escribir un código más limpio, legible y resistente a errores**.
