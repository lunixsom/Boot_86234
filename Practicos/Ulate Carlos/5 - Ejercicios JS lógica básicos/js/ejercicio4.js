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


Calcular el promedio de las siete notas.

Mostrar por consola:
  El promedio es: X.XX

Extra: Buscar en internet cómo redondear el resultado a dos decimales y mostrar el resultado redondeado por consola.

*/


const nota2 = 9;
const nota1 = 7;
const nota3 = 6;
const nota4 = 10;
const nota5 = 8;
const nota6 = 6;
const nota7 = 9;

const suma = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7;
const promedio = suma / 7;
const promedioRedondeado = Math.round(promedio * 100) / 100;

console.log(`El promedio es: ${promedioRedondeado}`);