/*

Pedir al usuario que ingrese una cantidad de horas.

Calcular cuántos segundos equivalen a esa cantidad de horas.
Calcular cuántos minutos equivalen a esa cantidad de horas.

Ejemplo:

const horas = 3;

3 horas equivalen a 10800 segundos.
3 horas equivalen a 180 minutos.

*/

let horas = prompt ("Ingrese el una cantidad de horas:");

const segundos = (horas * 3600);
const minutos = (horas * 60);

console.log(`${horas} horas equivale a ${segundos} segundos`);
console.log(`${horas} horas equivale a ${minutos} minutos`);