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

let kmViaje = parseFloat(prompt("La cantidad de kilómetros que va a viajar: "));
let kmXLitro = parseFloat(prompt("Cuántos kilómetros recorre el vehículo con 1 litro de combustible: "));
let precioLitro = parseFloat(prompt("El precio del litro de combustible: "));
let personas = parseFloat(prompt("La cantidad de personas que viajan: "));

let litrosNecesarios = kmViaje / kmXLitro;
let totalCombustible = litrosNecesarios * precioLitro;
let costoPersona = totalCombustible / personas;

console.log(`Kilometros del viaje: ${kmViaje}`);
console.log(`Rendimiento del vehículo: ${kmXLitro}km por litro`);
console.log(`Litros necesarios: ${litrosNecesarios}`);
console.log(`Costo del combustible: $${totalCombustible}`);
console.log(`Kilometros del viaje: $${costoPersona}`);

alert(`
Resumen del viaje:
Kilometros del viaje: ${kmViaje}
Rendimiento del vehículo: ${kmXLitro}km por litro
Litros necesarios: ${litrosNecesarios}
Costo del combustible: $${totalCombustible.toFixed(2)}
Kilometros del viaje: $${costoPersona.toFixed(2)}
`);