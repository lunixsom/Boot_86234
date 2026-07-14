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

const nota1 = 4;
const nota2 = 7;
const nota3 = 10;
const nota4 = 3;
const nota5 = 7;
const nota6 = 8;
const nota7 = 6;

const promedio = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7;

console.log(`Tus calificaciones son:`);
console.log(`Nota 1: ${nota1}`);
console.log(`Nota 2: ${nota2}`);
console.log(`Nota 3: ${nota3}`);
console.log(`Nota 4: ${nota4}`);
console.log(`Nota 5: ${nota5}`);
console.log(`Nota 6: ${nota6}`);
console.log(`Nota 7: ${nota7}`);

console.log(`El promedio de ellas es: ${promedio.toFixed(2)}`);




