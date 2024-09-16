# Ejercicio condicionales

### Positivo, negativo o cero

Desarrollar un algoritmo que indique si un número ingresado por el teclado es positivo,
negativo o neutro.

### Par o impar

Desarrollar un algoritmo que indique si un número ingresado por el teclado es par o
impar

### Mostrar mayor

Desarrollar un algoritmo que muestre el mayor de dos números ingresados. En el caso de
que sean iguales, indicarlo.

### Mayor de tres

Desarrollar un algoritmo que muestre el mayor de tres números ingresados, teniendo en
cuenta que todos son diferentes

### Calcular salario

Un empleado administrativo necesita calcular su salario semanal, el cual se obtiene de la
siguiente forma:

- Si trabaja 40 horas semanales o menos se paga $150 la hora.
- Superando las 40 horas semanales, al resto se las considera horas extras.
- Se paga $250 por hora extra.

### Seguro de automóviles

Una agencia de seguros para automóviles asigna el precio de la póliza basados en el
sexo y la edad del conductor.

- Los hombres menores de 25 años pagan $1000.
- Los hombres de 25 años o más pagan $700.
- Las mujeres de menos de 21 años pagan $800
- Las mujeres de 21 años o más pagan $1200.

Desarrollar un algoritmo que muestre el nombre, la edad y el sexo del conductor con el
monto de la póliza correspondiente.

## Resultados

### Positivo, negativo o cero

```js
let a = prompt("Ingrese un numero");

if (a > 0) {
  alert("El numero es positivo");
} else if (a < 0) {
  alert("El numero es negativo");
} else {
  alert("El numero es neutro");
}
```

### Par o impar

```js
let b = prompt("Ingrese un numero");

if (b % 2 === 0) {
  alert("El numero es par");
} else {
  alert("El numero es impar");
}
```

### Mostrar mayor

```js
let c = prompt("Ingrese el primer numero");
let d = prompt("Ingrese el segundo numero");

if (c > d) {
  alert("El primer numero es el mayor");
} else if (d > c) {
  alert("El segundo es el mayor");
} else {
  alert("Los dos numeros son iguales");
}
```

### Mayor de tres

```js
let num1 = prompt("Ingrese el primero numero");
let num2 = prompt("Ingrese el segundo numero");
let num3 = prompt("Ingrese el tercer numero");

if (num1 > num2 && num1 > num3) {
  alert("El primer numero es el mayor");
} else if (num2 > num1 && num2 > num3) {
  alert("El sgundo numero es el mayor");
} else if (num3 > num1 && num3 > num2) {
  alert("El tercer numero es el mayor");
} else {
  alert("Los 3 numeros son iguales");
}
```

### Calcular salario

```js
let horasTrabajadas = prompt("Ingrese la cantidad de horas");
let salario;

if (horasTrabajadas <= 40) {
  salario = horasTrabajadas * 150;
} else {
  let horasExtras = horasTrabajadas - 40;
  salario = 40 * 150 + horasExtras * 250;
}

alert("El salario semanal es de: $" + salario);
alert(`El salario semanal es de: ${salario}`);
```

### Seguro de automóviles

```js
let edad = prompt("Ingrese la edad");
let sexo = prompt("Ingrese el sexo(M o F)");
let precioPoliza;

if (sexo === "M") {
  if (edad < 25) {
    precioPoliza = 1000;
  } else {
    precioPoliza = 700;
  }
} else {
  if (edad < 21) precioPoliza = 800;
  else precioPoliza = 1200;
}

alert(`El conductor debe pagar $ ${precioPoliza}`);
```
