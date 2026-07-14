/*

Pedir al usuario que ingrese una cantidad de horas.

Calcular cuántos segundos equivalen a esa cantidad de horas.
Calcular cuántos minutos equivalen a esa cantidad de horas.

Ejemplo:

const horas = 3;

3 horas equivalen a 10800 segundos.
3 horas equivalen a 180 minutos.

*/

const ingresoHoras = +prompt("Ingrese una cantidad de horas:");

const horasEnSegundos = ingresoHoras * 3600;
const horasEnMinutos = ingresoHoras * 60;

console.log(`La cantidad de horas ingresadas es: ${ingresoHoras}`);
console.log(`${ingresoHoras} horas equivalen a ${horasEnSegundos} segundos`);
console.log(`${ingresoHoras} horas equivalen a ${horasEnMinutos} minutos`);