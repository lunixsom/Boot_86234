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

let kilometros = Number (prompt ("Ingresa la cantidad de Kilometros que viajaras:"));
let kilometroLitro = Number(prompt ("Ingresa cuantos kilometros realizas con un litro de combustible:"));
let precioCombustible = Number (prompt ("Ingresa el valor del combustible:"));
let cantPersonas = Number (prompt ("Cuantas personas viajan:"));

const cantCombustible = (kilometros / kilometroLitro);
const gastoEnCombustible = (cantCombustible * precioCombustible);
const gastoPersonas = (gastoEnCombustible /cantPersonas);

console.log(`Kilometros del viaje: ${kilometros}`);
console.log(`Rendimiento del vehiculo: ${kilometroLitro}`);
console.log(`Litros necesarios: ${cantCombustible.toFixed(2)}`);
console.log(`Costo total del viaje: ${gastoEnCombustible.toFixed(2)}`);
console.log(`Costo por persona: ${gastoPersonas.toFixed(2)}`);

alert(`Kilometros del viaje: ${kilometros}`)
alert(`Rendimiento del vehiculo: ${kilometroLitro}`)
alert(`Litros necesarios: ${cantCombustible.toFixed(2)}`)
alert(`Costo total del viaje: ${gastoEnCombustible.toFixed(2)}`)
alert(`Costo por persona: ${gastoPersonas.toFixed(2)}`)