/*
  ========= Ejercicio 2: Par o impar =========

  Pedir al usuario que ingrese un número entero usando prompt().
  Guardar el valor en una variable llamada `numero`.

  - Si el número es par, mostrar por consola:
    "El número X es par."

  - Si el número es impar, mostrar por consola:
    "El número X es impar."

  Pista: usá el operador módulo (%) para determinar si es par o impar.
  Recordá convertir el prompt() a número con parseInt().

  Ejemplo con numero = 8:
    El número 8 es par.

  Ejemplo con numero = 7:
    El número 7 es impar.
*/

const numero = +prompt("Ingrese un numero entero: ");

if (numero % 2 === 0 ) {
  console.log(`El numero ${numero} es par.`);
} else {
  console.log(`El numero ${numero} es impar.`);
}