// Ejercicio 5: Sumar y promediar
//
// Tenés este array:
//
//   const notas = [7, 9, 5, 8, 6, 10, 4, 2, 10, 9, 5, 7];
//
// Calculá y mostrá:
//   1. La suma de todas las notas (usando un for)
//   2. El promedio redondeado a 2 decimales
//   3. Si el promedio es >= 6 → "Aprobado", si no → "Reprobado"
//
// Resultado esperado:
//   Suma: XX
//   Promedio: X.XX
//   Estado: Aprobado


const notas = [7, 9, 5, 8, 6, 10, 4, 2, 10, 9, 5, 7];
const suma = (a, b) => a + b;

const sumaNotas = notas.reduce(suma, 0);
const promedio = sumaNotas / notas.length;
const estado = promedio >= 6 ? "Aprobado" : "Reprobado";

console.log(`Suma: ${sumaNotas}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);
console.log(`Estado: ${estado}`);
