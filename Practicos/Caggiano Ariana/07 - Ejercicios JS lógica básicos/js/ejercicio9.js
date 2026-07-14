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

const kilometrosDelViaje = 450;
const kilometrosPorLitro = 12;
const precioPorLitro = 2000;
const cantidadDePersonas = 5;

const litrosTotales = kilometrosDelViaje / kilometrosPorLitro;
const precioTotalCombustible = litrosTotales * precioPorLitro;
const divisionPorPersona = precioTotalCombustible / cantidadDePersonas;


console.log(`Kilometros del viaje: ${kilometrosDelViaje}km`);
console.log(`El rendimiento del vehiculo es de: ${kilometrosPorLitro}km por litro`);
console.log(`Los litros que se necesita son: ${litrosTotales} Litros`);
console.log(`El costo total del combustible será de: $${precioTotalCombustible}`);
console.log(`El precio del combustible por persona es de: $${divisionPorPersona}`);

