/*
  ============ EJERCICIO 7: PAGO EN CUOTAS ============
  Pedir al usuario que ingrese el importe de su compra.
  Pedir además la cantidad de cuotas en las que desea pagar.

  Calcular el importe de cada cuota teniendo en cuenta que el interés por realizar el pago en cuotas es del 20% sobre el importe total de la compra.

  Mostrar por consola el importe total de la compra, el interés aplicado, y el importe de cada cuota.
*/

let importe = 5000;
let cuotas = 6;
let interes = 0.20;

const montoInteres = importe * interes;
const importeTotal = importe + montoInteres;
const valorCuota = importeTotal / cuotas;

console.log(`El importe total de la compra es de: ${importeTotal}`);
console.log(`El interés aplicado es de: ${montoInteres}`);
console.log(`El importe de cada cuota es de: ${valorCuota}`);
