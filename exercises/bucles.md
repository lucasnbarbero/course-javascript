# Ejercicios `while` y `for`

## `while`

### Temperaturas semanales

Se ingresan las temperaturas diarias de cada día de la semana, calcular e informar:

- Promedio de temperatura semanal.
- El día más frío y más caluroso de la semana.
- Porcentaje de temperaturas bajo cero.

**Aclaración**: contemplar que se ingresa una temperatura por día y que todas son
diferentes.

### Resultado de encuentros

Ingresar 4 resultados de encuentros deportivos entre 2 equipos. El algoritmo deberá
procesar la información y mostrar:

- Qué equipo ganó más veces y cuantos partidos ganó. Si no hubiese uno, indicarlo.
- Cual fue el equipo que más goles hizo y la cantidad. Si no hubiese uno, indicarlo.
- Promedio de goles por partido.

## `for`

### Sumatoria

Calcular la sumatoria de 5 números ingresados por el usuario.

### Promedio

Desarrollar un algoritmo que calcule el promedio de 5 números ingresados por el
usuario.

### Porcentajes

Dados 5 números ingresados por el usuario, calcular el porcentaje de números pares e
impares y el promedio

### Mayor y menor

Desarrollar un algoritmo que muestre el mayor y el menor número de 10 números por el
usuario.

## Resultados

### Temperaturas semanales

```js
let dia = 1;
let temperatura;
let sumaTemperaturas = 0;
let temperaturaBajoCero = 0;
let temperaturaMaxima = Number.MIN_SAFE_INTEGER;
let temperaturaMinima = Number.MAX_SAFE_INTEGER;
let diaMasCaluroso;
let diaMasFrio;

while (dia <= 7) {
  temperatura = parseFloat(prompt(`Ingrese la temperatura del día ${dia}:`));

  sumaTemperaturas += temperatura;

  if (temperatura < 0) {
    temperaturaBajoCero++;
  }

  if (temperatura > temperaturaMaxima) {
    temperaturaMaxima = temperatura;
    diaMasCaluroso = dia;
  }

  if (temperatura < temperaturaMinima) {
    temperaturaMinima = temperatura;
    diaMasFrio = dia;
  }

  dia++;
}

let promedioTemperaturas = sumaTemperaturas / 7;
let porcentajeBajoCero = (temperaturaBajoCero / 7) * 100;

alert(
  `Promedio de temperatura semanal: ${promedioTemperaturas.toFixed(
    2
  )}\nDía más caluroso: ${diaMasCaluroso}\nDía más frío: ${diaMasFrio}\nPorcentaje de temperaturas bajo cero: ${porcentajeBajoCero.toFixed(
    2
  )}%`
);
```

### Resultado de encuentros

```js
let golesTotales = 0;
let victoriasEquipo1 = 0;
let victoriasEquipo2 = 0;
let golesTotalesEquipo1 = 0;
let golesTotalesEquipo2 = 0;

let i = 0;
while (i < 4) {
  let golesEquipo1 = parseInt(prompt(`Partido ${i + 1}: Ingresar los goles del equipo 1:`));
  let golesEquipo2 = parseInt(prompt(`Partido ${i + 1}: Ingresar los goles del equipo 2:`));

  // Sumar los goles totales para calcular el promedio luego
  golesTotales += golesEquipo1 + golesEquipo2;

  // Sumar los goles de cada equipo
  golesTotalesEquipo1 += golesEquipo1;
  golesTotalesEquipo2 += golesEquipo2;

  // Determinar quién ganó el partido
  if (golesEquipo1 > golesEquipo2) {
    victoriasEquipo1++;
  } else if (golesEquipo2 > golesEquipo1) {
    victoriasEquipo2++;
  }

  i++;
}

// Determinar quién ganó más partidos
let ganador;
if (victoriasEquipo1 > victoriasEquipo2) {
  ganador = `El equipo 1 ganó más partidos con ${victoriasEquipo1} victorias.`;
} else if (victoriasEquipo2 > victoriasEquipo1) {
  ganador = `El equipo 2 ganó más partidos con ${victoriasEquipo2} victorias.`;
} else {
  ganador = "No hubo un equipo que ganara más partidos.";
}

// Determinar quién hizo más goles
let maximoGoleador;
if (golesTotalesEquipo1 > golesTotalesEquipo2) {
  maximoGoleador = `El equipo 1 hizo más goles con un total de ${golesTotalesEquipo1}.`;
} else if (golesTotalesEquipo2 > golesTotalesEquipo1) {
  maximoGoleador = `El equipo 2 hizo más goles con un total de ${golesTotalesEquipo2}.`;
} else {
  maximoGoleador = "Ambos equipos hicieron la misma cantidad de goles.";
}

// Calcular el promedio de goles por partido
let promedioGoles = golesTotales / 4;

// Mostrar los resultados
alert(ganador);
alert(maximoGoleador);
alert(`El promedio de goles por partido es: ${promedioGoles.toFixed(2)}`);
```

### Sumatoria

```js
let sumatoria = 0;

for (let i = 0; i < 5; i++) {
  let numero = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
  sumatoria += numero;
}

alert(`La sumatoria de los 5 números es: ${sumatoria}`);
```

### Promedio

```js
let sumatoria = 0;

for (let i = 0; i < 5; i++) {
  let numero = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
  sumatoria += numero;
}

let promedio = sumatoria / 5;
alert(`El promedio de los 5 números es: ${promedio}`);
```

### Porcentajes (Números Pares e Impares)

```js
let cantidadPares = 0;
let cantidadImpares = 0;
let sumatoria = 0;

for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt(`Ingresa el número ${i + 1}:`));

  sumatoria += numero;

  if (numero % 2 === 0) {
    cantidadPares++;
  } else {
    cantidadImpares++;
  }
}

let porcentajePares = (cantidadPares / 5) * 100;
let porcentajeImpares = (cantidadImpares / 5) * 100;
let promedio = sumatoria / 5;

alert(`Porcentaje de números pares: ${porcentajePares}%`);
alert(`Porcentaje de números impares: ${porcentajeImpares}%`);
alert(`El promedio de los números es: ${promedio}`);
```

### Mayor y menor

```js
let mayor = -Infinity;
let menor = Infinity;

for (let i = 0; i < 10; i++) {
  let numero = parseFloat(prompt(`Ingresa el número ${i + 1}:`));

  if (numero > mayor) {
    mayor = numero;
  }

  if (numero < menor) {
    menor = numero;
  }
}

alert(`El número mayor es: ${mayor}`);
alert(`El número menor es: ${menor}`);
```
