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


const numero1 = 10;
const numero2 = 5;

//Realizo las operaciones
const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicación = numero1 * numero2;
const division = numero1 / numero2;
const modulo = numero1 % 2;

//Muestro por pantalla las operaciones
console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicacion: ${multiplicación}`);
console.log(`Division: ${division}`);
console.log(`Modulo: ${modulo}`);
