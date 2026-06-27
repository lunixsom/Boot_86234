/*
  ========= Ejercicio 2: Operaciones básicas =========
  
  Crear dos variables numéricas. Y asignarles cualquier valor. Por ejemplo: numero1 = 10; numero2 = 5;
  Calcular y mostrar por consola:

  - La suma
  - La resta
  - La multiplicación
  - La división
  - El módulo (resto de la división)

  Resultado esperado:

  Suma: 15
  Resta: 5
  Multiplicación: 50
  División: 2

  Realizar pruebas con diferentes valores para las variables numéricas y comprobar que los resultados son correctos.
*/

const num1 = 30;

const num2 = 40;

console.log(`El primer numero eso ${num1} y el segundo numero es ${num2}`);

console.log("Ejercicio de suma");
const suma = num1 + num2;
console.log(suma);

console.log("Ejercicio de resta");
const resta = num1 - num2;
console.log(resta);

console.log("Ejercicio de multiplicacion");
const mult = num1 * num2;
console.log(mult)

console.log("Ejercicio de division");
const div = num1 / num2;
console.log(div)

console.log("Ejercicio de modulo");
const modul = num1 % num2;
console.log(modul);