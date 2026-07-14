/*

Pedir al usuario que ingrese una cantidad de horas.

Calcular cuántos segundos equivalen a esa cantidad de horas.
Calcular cuántos minutos equivalen a esa cantidad de horas.

Ejemplo:

const horas = 3;

3 horas equivalen a 10800 segundos.
3 horas equivalen a 180 minutos.

*/


//Pido al usuario que ingrese las horas
const horas = Number(prompt("Ingrese una cantidad de hora que quiera"));

//Realizo los calculos segun la hora ingresada
const minutos = horas * 60;
const segundos = minutos * 60;

//Muestro por pantalla 
console.log(`${horas} horas equivalen a ${minutos} minutos y a ${segundos} segundos`);