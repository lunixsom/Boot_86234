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
const kilometrosDelViaje = 620;
const kilometrosPorLitro = 12;
const precioPorLitro = 1500;
const cantidadDePersonas = 3;

const litrosTotales = kilometrosDelViaje / kilometrosPorLitro;
const precioTotalCombustible = litrosTotales * precioPorLitro;
const precioPorPersona = precioTotalCombustible / cantidadDePersonas;

console.log(`Kilómetros del viaje: ${kilometrosDelViaje} km`);
console.log(`Rendimiento del vehículo: ${kilometrosPorLitro} km por litro`);
console.log(`Litros necesarios: ${litrosTotales.toFixed(2)}`);
console.log(`Costo total del combustible: $${precioTotalCombustible}`);
console.log(`Costo por persona: $${precioPorPersona.toFixed(2)}`);

alert(
  `Kilómetros del viaje: ${kilometrosDelViaje} km\n` +
  `Rendimiento del vehículo: ${kilometrosPorLitro} km por litro\n` +
  `Litros necesarios: ${litrosTotales.toFixed(2)}\n` +
  `Costo total del combustible: $${precioTotalCombustible}\n` +
  `Costo por persona: $${precioPorPersona.toFixed(2)}`
);