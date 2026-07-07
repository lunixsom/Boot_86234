/*
  ============ EJERCICIO 7: PAGO EN CUOTAS ============
  Pedir al usuario que ingrese el importe de su compra.
  Pedir además la cantidad de cuotas en las que desea pagar.

  Calcular el importe de cada cuota teniendo en cuenta que el interés por realizar el pago en cuotas es del 20% sobre el importe total de la compra.

  Mostrar por consola el importe total de la compra, el interés aplicado, y el importe de cada cuota.
*/

let importeCompra = parseFloat(prompt("Ingrese el importe de su compra:"));
let cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas en las que desea pagar:"));

let interes = importeCompra * 0.20;
let importeTotal = importeCompra + interes;
let importeCuota = importeTotal / cantidadCuotas;

console.log("Importe total de la compra: $" + importeTotal.toFixed(2));
console.log("Interés aplicado: $" + interes.toFixed(2));
console.log("Importe de cada cuota: $" + importeCuota.toFixed(2));