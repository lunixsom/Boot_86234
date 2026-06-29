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



const kilometrosViaje = parseFloat(prompt("Ingrese la cantidad de kilómetros que va a viajar:"));
const rendimientoVehiculo = parseFloat(prompt("Ingrese cuántos kilómetros recorre el vehículo con 1 litro de combustible:"));
const precioLitroCombustible = parseFloat(prompt("Ingrese el precio del litro de combustible:"));
const cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas que viajan:"));

const litrosNecesarios = kilometrosViaje / rendimientoVehiculo;
const costoTotalCombustible = litrosNecesarios * precioLitroCombustible;
const costoPorPersona = costoTotalCombustible / cantidadPersonas;

console.log(`Kilómetros del viaje: ${kilometrosViaje} km`);
console.log(`Rendimiento del vehículo: ${rendimientoVehiculo} km por litro`);
console.log(`Litros necesarios: ${litrosNecesarios.toFixed(2)}`);
console.log(`Costo total del combustible: $${costoTotalCombustible.toFixed(2)}`);
console.log(`Costo por persona: $${costoPorPersona.toFixed(2)}`);

const mensajeFinal = alert(`Kilómetros del viaje: ${kilometrosViaje} km\nRendimiento del vehículo: ${rendimientoVehiculo} km por litro\nLitros necesarios: ${litrosNecesarios.toFixed(2)}\nCosto total del combustible: $${costoTotalCombustible.toFixed(2)}\nCosto por persona: $${costoPorPersona.toFixed(2)}`);