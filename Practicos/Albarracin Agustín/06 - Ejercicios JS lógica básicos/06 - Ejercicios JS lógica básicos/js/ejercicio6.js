/*

Pedir al usuario que ingrese una cantidad de horas.

Calcular cuántos segundos equivalen a esa cantidad de horas.
Calcular cuántos minutos equivalen a esa cantidad de horas.

Ejemplo:

const horas = 3;

3 horas equivalen a 10800 segundos.
3 horas equivalen a 180 minutos.

*/

const horas = 3;
const segundos = horas * 3600;
const minutos = horas * 60;
console.log(`${horas} horas equivalen a ${segundos} segundos.`);
console.log(`${horas} horas equivalen a ${minutos} minutos.`);
