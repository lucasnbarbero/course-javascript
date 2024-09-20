# Promesas en JavaScript 🎯

Una **promesa** es un objeto en JavaScript que representa un valor que puede estar disponible ahora, en el futuro, o nunca. Es una manera elegante de manejar operaciones asíncronas, como peticiones a APIs, lectura de archivos, o cualquier tarea que no se resuelve de manera inmediata.

## Creación de una Promesa 🛠️

Para crear una promesa, se usa el constructor `Promise`, el cual recibe una función con dos parámetros: `resolve` y `reject`. Estos se utilizan para indicar si la operación fue exitosa (`resolve`) o falló (`reject`).

### Ejemplo básico

```js
const promesa = new Promise((resolve, reject) => {
  const exito = true;

  if (exito) {
    resolve("¡Operación exitosa!");
  } else {
    reject("Algo salió mal.");
  }
});

promesa
  .then((mensaje) => {
    console.log(mensaje); // "¡Operación exitosa!"
  })
  .catch((error) => {
    console.error(error); // "Algo salió mal."
  });
```

En este ejemplo, la promesa se resuelve exitosamente si `exito` es `true`, y se rechaza si es `false`.

### Ejemplo de la Vida Real: Autenticación de Usuario 🔐

En una aplicación web, podrías necesitar verificar las credenciales de un usuario cuando intenta iniciar sesión. Este proceso normalmente involucra una solicitud a un servidor para comprobar el nombre de usuario y la contraseña.

```js
function autenticarUsuario(usuario, contraseña) {
  return new Promise((resolve, reject) => {
    // Simulación de verificación
    setTimeout(() => {
      if (usuario === "admin" && contraseña === "1234") {
        resolve("Autenticación exitosa");
      } else {
        reject("Credenciales incorrectas");
      }
    }, 1000);
  });
}

autenticarUsuario("admin", "1234")
  .then((mensaje) => {
    console.log(mensaje); // Imprime: "Autenticación exitosa"
  })
  .catch((error) => {
    console.error(error); // Imprime: "Credenciales incorrectas"
  });
```

### Explicación

- Simulación de verificación: El `setTimeout` simula el tiempo de espera para la respuesta del servidor. En un entorno real, reemplazarías esto con una solicitud HTTP.
- Resolve/Reject: Si las credenciales son correctas, la promesa se resuelve con un mensaje de éxito. Si son incorrectas, la promesa se rechaza con un mensaje de error.

### ¿Por qué usar Promesas en este caso?

- Manejo Asíncrono: La autenticación es una operación asíncrona que depende de una respuesta del servidor. Las promesas permiten manejar este proceso de manera clara.
- Control de Errores: Con `catch`, puedes capturar errores de manera centralizada, lo que hace que tu código sea más robusto y fácil de mantener.
- Código Limpio y Legible: Las promesas ayudan a evitar el anidamiento de callbacks, lo que mejora la legibilidad del código.

## Uso de fetch para Peticiones HTTP 🌐

`fetch` es una función nativa de JavaScript que realiza peticiones HTTP y devuelve una promesa. Es una herramienta crucial para interactuar con APIs, y es más fácil de usar que las alternativas más antiguas, como `XMLHttpRequest`.

### Ejemplo Básico con `fetch`

```js
fetch("https://api.ejemplo.com/usuarios")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // Procesa los datos obtenidos
  })
  .catch((error) => {
    console.error("Hubo un problema con la petición:", error);
  });
```

### ¿Cómo Funciona `fetch`?

- `fetch` **Retorna una Promesa**: La promesa devuelta por `fetch` se resuelve en el objeto `Response` que representa la respuesta HTTP. Para acceder a los datos reales, necesitas procesar esta respuesta con métodos como `.json()` para obtener el contenido en formato JSON.
- **Manejo de Errores**: Aunque `fetch` solo rechaza la promesa si hay un fallo en la red, aún debes manejar los errores HTTP manualmente, verificando la propiedad `ok` de la respuesta.

### Importancia de `fetch`

- **Simplicidad**: `fetch` hace que las peticiones HTTP sean fáciles de escribir y leer, utilizando promesas para manejar la asincronía.
- **Compatibilidad con Moderno JavaScript**: A diferencia de `XMLHttpRequest`, `fetch` es completamente compatible con las características modernas de JavaScript, como `async/await`.
- **Flexibilidad**: `fetch` es altamente configurable, permitiendo ajustar cabeceras, métodos HTTP, cuerpos de petición, y más.

## Consumiendo Promesas 🍽️

Para manejar el resultado de una promesa, utilizamos los métodos `.then()`, `.catch()`, y `.finally()`.

### `.then()` para el Caso de Éxito

El método `.then()` se utiliza para manejar el resultado exitoso de una promesa.

```js
promesa.then((mensaje) => {
  console.log(mensaje); // Imprime: "¡La operación fue exitosa!"
});
```

### `.catch()` para el Caso de Error

El método `.catch()` se utiliza para manejar cualquier error que ocurra durante la ejecución de la promesa.

```js
promesa
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error); // Imprime: "Ocurrió un error."
  });
```

### `.finally()` para el Caso Final

El método `.finally()` se ejecuta al final, sin importar si la promesa se resolvió o fue rechazada.

```js
promesa
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Operación completada.");
  });
```

En este caso, `"Operación completada."` se imprimirá siempre, independientemente del resultado de la promesa.

## Conclusión 🎯

Las promesas en JavaScript son una herramienta poderosa para manejar operaciones asíncronas de manera clara y manejable. Facilitan la gestión de código asíncrono, permitiendo una mayor flexibilidad y legibilidad, especialmente cuando se trabaja con múltiples tareas asíncronas. `fetch` es un excelente ejemplo de cómo las promesas hacen que las interacciones con APIs sean más limpias y eficientes, brindando un enfoque moderno y poderoso para el desarrollo web.
