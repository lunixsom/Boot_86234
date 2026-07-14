/* 
========= Ejercicio 4: Promedio de notas =========
  
Crear 7 variables:

let nota1 = 8;
let nota2 = 7;
let nota3 = 10;
let nota4 = 9;
let nota5 = 6;
let nota6 = 8;
let nota7 = 7;


Calcular el promedio de las cinco notas.

Mostrar por consola:
  El promedio es: X.XX

Extra: Buscar en internet cómo redondear el resultado a dos decimales y mostrar el resultado redondeado por consola.

*/

//Creo las variables
const nota1 = 9;
const nota2 = 4;
const nota3 = 8;
const nota4 = 8;
const nota5 = 7;
const nota6 = 7;
const nota7 = 5;

//Saco el promedio
const promedio = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7;

//Muestro resultado
console.log(`El promedio de las notas es ${promedio.toFixed(2)}`);

