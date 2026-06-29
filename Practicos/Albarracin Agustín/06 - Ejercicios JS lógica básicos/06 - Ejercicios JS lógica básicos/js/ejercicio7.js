/*
  ============ EJERCICIO 7: PAGO EN CUOTAS ============
  Pedir al usuario que ingrese el importe de su compra.
  Pedir además la cantidad de cuotas en las que desea pagar.

  Calcular el importe de cada cuota teniendo en cuenta que el interés por realizar el pago en cuotas es del 20% sobre el importe total de la compra.

  Mostrar por consola el importe total de la compra, el interés aplicado, y el importe de cada cuota.
*/

const importeCompra = parseFloat(prompt("Ingrese el importe de su compra:"));
const cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas en las que desea pagar:"));
const interes = 0.2;
const importeTotal = importeCompra * (1 + interes);
const importeCuota = importeTotal / cantidadCuotas;

console.log(`El importe total de la compra es: $${importeTotal.toFixed(2)}`);
console.log(`El interés aplicado es: $${(importeTotal - importeCompra).toFixed(2)}`);
console.log(`El importe de cada cuota es: $${importeCuota.toFixed(2)}`);
