/*
  ============ EJERCICIO 9: CALCULADORA DE VIAJE ============

  Pedir al usuario que ingrese:

  - La cantidad de kilómetros que va a viajar
  - Cuántos kilómetros recorre el vehículo con 1 litro de combustible
  - El precio del litro de combustible
  - La cantidad de personas que viajan

  Calcular:

  - Cuántos litros de combustible necesita para el viaje
  - Cuánto dinero gastará en combustible
  - Cuánto debería pagar cada persona si dividen el gasto en partes iguales

  Mostrar por consola:

  Kilómetros del viaje: 300 km
  Rendimiento del vehículo: 12 km por litro
  Litros necesarios: 25
  Costo total del combustible: $27500
  Costo por persona: $6875

  Mostrar también el resultado final usando alert().

  Extra:
  Redondear los litros necesarios y el costo por persona a dos decimales.
*/

const kilometros = +prompt("Indique los kilometros a Viajar");

const klmViaja = +prompt("Cuantos kilometros recorre  el vehiculo con 1 litro de combustible?");

const combustible = +prompt("Indique el precio del litro del combustible");

const personas = +prompt("Cuantas personas viajan en el vehiculo?");

console.log(`Los kilometros a viajar son: ${kilometros} Km `)

console.log(`El rendimiento es de: ${klmViaja} Km por litro`)

const kmViaje = kilometros / klmViaja;

const viajeKm = Math.round(kmViaje * 100) / 100;
console.log(`Los litros necesarios para el viaje son ${viajeKm}L`)


const gastoGas = combustible * kmViaje;
const gastoCombustible = Math.round(gastoGas * 100) / 100;
console.log(`El costo total del combustible para el viaje es de $${gastoCombustible}`)


const pagoPersona = gastoGas / personas

const costoPersona = Math.round(pagoPersona * 100) / 100;
console.log(`El precio por persona para cubrir el gasto de combusitble es de $${costoPersona} por persona`)


alert(`Los kilometros a viajar son ${kilometros} km ,  con un rendimiento de ${klmViaja} km por litro. Para completar el viaje van a ser necesarios ${viajeKm} litros, el cual va a tener un costo de $${gastoCombustible} y cada persona debera pagar $${costoPersona} `)