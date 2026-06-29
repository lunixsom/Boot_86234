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

const distancia = parseFloat(prompt("Ingrese la cantidad de kilómetros que va a viajar:"));
const rendimiento = parseFloat(prompt("Ingrese cuántos kilómetros recorre el vehículo con 1 litro de combustible:"));
const precioLitro = parseFloat(prompt("Ingrese el precio del litro de combustible:"));
const cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas que viajan:"));
const litrosNecesarios = distancia / rendimiento;
const costoTotal = litrosNecesarios * precioLitro;
const costoPorPersona = costoTotal / cantidadPersonas;
console.log(`Kilómetros del viaje: ${distancia} km`);
console.log(`Rendimiento del vehículo: ${rendimiento} km por litro`);
console.log(`Litros necesarios: ${litrosNecesarios.toFixed(2)}`);
console.log(`Costo total del combustible: $${costoTotal.toFixed(2)}`);
console.log(`Costo por persona: $${costoPorPersona.toFixed(2)}`);
alert(`Kilómetros del viaje: ${distancia} km\nRendimiento del vehículo: ${rendimiento} km por litro\nLitros necesarios: ${litrosNecesarios.toFixed(2)}\nCosto total del combustible: $${costoTotal.toFixed(2)}\nCosto por persona: $${costoPorPersona.toFixed(2)}`);
