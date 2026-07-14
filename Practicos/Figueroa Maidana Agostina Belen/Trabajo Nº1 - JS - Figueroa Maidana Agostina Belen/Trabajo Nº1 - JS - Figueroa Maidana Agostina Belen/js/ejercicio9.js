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

const kilometrosViaje = +prompt("Ingrese la cantidad de kilómetros que va a viajar:");
const kilometrosVehiculo = +prompt("Ingrese la cantidad de kilómetros que recorre su vehículo con 1 litro de combustible:");
const precioCombustible = +prompt("Ingrese el precio del litro de combustible:");
const cantidadViajeros = +prompt("Ingrese la cantidad de personas que viajaran:");

const litrosCombustible = kilometrosViaje / kilometrosVehiculo;
const gastoCombustible = litrosCombustible * precioCombustible;
const divisionCombustible = gastoCombustible / cantidadViajeros;

console.log(`Kilometros del viaje: ${kilometrosViaje.toFixed(2)} km`);
console.log(`Rendimiento del vehiculo: ${kilometrosVehiculo.toFixed(2)} por litro`);
console.log(`Litros necesarios: ${litrosCombustible.toFixed(2)} litros`);
console.log(`Costo total del combustible: $${gastoCombustible.toFixed(2)}`);
console.log(`Costo por persona: $${divisionCombustible.toFixed(2)}`);

alert(
`Kilometros del viaje: ${kilometrosViaje.toFixed(2)} km
Rendimiento del vehiculo: ${kilometrosVehiculo.toFixed(2)} por litro
Litros necesarios: ${litrosCombustible.toFixed(2)} litros
Costo total del combustible: $${gastoCombustible.toFixed(2)}
Costo por persona: $${divisionCombustible.toFixed(2)}`
);
