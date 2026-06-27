/*

Pedir al usuario que ingrese una cantidad de horas.

Calcular cuántos segundos equivalen a esa cantidad de horas.
Calcular cuántos minutos equivalen a esa cantidad de horas.

Ejemplo:

const horas = 3;

3 horas equivalen a 10800 segundos.
3 horas equivalen a 180 minutos.

*/


const horas = prompt("Ingrese las horas a calcular")

console.log(`Las horas a calcular son: ${horas}`)

const min = horas * 60;

console.log(`${horas} horas equivalen a ${min} minutos `)

const seg = horas * 60 * 60;

console.log(`${horas} horas equivalen a ${seg} segundos`)