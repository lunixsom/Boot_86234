/*
  ========= Ejercicio 1: Mayoría de edad =========

  Pedir al usuario que ingrese su edad usando prompt().
  Guardar el valor en una variable llamada `edad`.

  - Si la edad es mayor o igual a 18, mostrar por consola:
    "Eres mayor de edad."

  - SIEMPRE, al final del programa, mostrar por consola independientemente de la edad ingresada el mensaje:
    "Gracias por usar el programa."

  Pista: recordá que prompt() devuelve un string. Usá parseInt() para convertirlo a número.

  Ejemplo con edad = 20:
    Eres mayor de edad.
    Gracias por usar el programa.

  Ejemplo con edad = 15:
    Gracias por usar el programa.
*/


let edad = parseInt(prompt("¿Cuántos años tenes?"));

if (edad >= 18) {
    alert("Eres mayor de edad.");
} else {
    alert("Eres menor de edad.");
}

alert("Gracias por usar el programa.");

