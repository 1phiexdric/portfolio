---
title: 'Notas conceptuales: ¿Qué Son los Genéricos?'
description: 'Explicacion de que son los genéricos con ejemplos de codigo en typescript'
date: '11/01/2025'
tags: ['programacion', 'POO', 'typescript']
published: true
---
## ¿Qué Son los Genéricos?
En programacion muchas veces requerimos crear componentes (como funciones, clases o estructuras de datos) que realicen la **misma lógica** con **diferentes tipos de datos**.

Por ejemplo: una funcion que invierte el orden de los elementos en un array. Esta funcion utiliza la misma logica para un *array de numeros* que para un *array de textos* o un *array de objetos*

Si se define la funciona con tipos especificos (ej: number):

```tsx
function invertir(input: Array<number>): Array<number> {
    // ... Lógica de inversión
}
```

Esta función **no puede** ser reutilizada para `Array<string>`. Se tendría que duplicar el código para cada tipo, lo que no es para nada eficiente ni mantenible.


Algunos lenguajes, como por ejemplo **typescript**, permiten el uso de los *tipos comodin*, estos serian una solucion. Solo que al utilizar un tipo generico como `any`, pierdes la seguridad, el compilador ya no puede verificar si estás llamando a la función correctamente o si estás intentando, por ejemplo, sumar un número con un texto.

---

## la mejor solucion:

Los **Genéricos** son una herramienta de la programación orientada a objetos que resuelve este problema sin sacrificar la seguridad de tipos.

### Definición

Un genérico es un **marcador de posición de tipo** (a menudo llamado **`T`** por *Type*) que se define al crear un componente (función, clase).

Esto permite escribir componentes que pueden:

1. **Trabajar con cualquier tipo de dato.**
2. **Mantener la información del tipo de dato hasta el momento de la ejecución** (o compilación).

### Implementación Conceptual

Al crear un componente, se introduce una "variable de tipo" (el genérico) usando una notación especial (comúnmente los corchetes angulares, `< >`):

```
// Función GENÉRICA
function invertir<T>(input: Array<T>): Array<T> {
    // La lógica aquí funciona para cualquier tipo T
    // ...
}

```

### Uso

Al llamar a la función, el compilador "sustituye" la `T` por el tipo real que se está pasando, lo que garantiza la seguridad en toda la ejecución.

| Código de Llamada | El Compilador Entiende | Seguridad |
| --- | --- | --- |
| `invertir<string>(["a", "b"])` | `string` se sustituye por `T` | Espera `string[]`, devuelve `string[]`. ✅ Seguro. |
| `invertir<number>([1, 2])` | `number` se sustituye por `T` | Espera `number[]`, devuelve `number[]`. ✅ Seguro. |
| `invertir([obj1, obj2])` | (El compilador infiere el tipo) | Determina el tipo de objeto. ✅ Seguro. |

### En Resumen: El Valor de los Genéricos

| Característica | Propósito |
| --- | --- |
| **Reutilización** | Escribir la lógica una sola vez para múltiples tipos. |
| **Seguridad de Tipos** | El compilador garantiza que los tipos de entrada y salida coincidan. |
| **Flexibilidad** | El componente no se compromete con un tipo específico hasta que es utilizado. |