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

//Pedimos que ingrese los valores
const km = Number(prompt("Cuantos kilometros va a viajar?"));
const rendimientoPorLitro = Number(prompt("Cuantos kilometros recorre el vehiculo con 1lt de combustible"));
const precioPorLitro = Number(prompt("Cuanto esta el litro de combustible"));
const cantidadPersonas = Number(prompt("Cuantas personas viajan?"));

//Realizamos los calculos
const combustibleNecesario = km / rendimientoPorLitro;
const dineroNecesario = combustibleNecesario * precioPorLitro;
const partesIguales = dineroNecesario / cantidadPersonas;

//Mostramos por pantalla
console.log("Km a recorrer: " + km);
console.log("Rendimiento del vehiculo: " + rendimientoPorLitro + "km por litro");
console.log("Combustible necesario: " + combustibleNecesario + "litros");
console.log("Costo total del viaje: $" + dineroNecesario);
console.log("Costo por persona: $" + partesIguales.toFixed(2));