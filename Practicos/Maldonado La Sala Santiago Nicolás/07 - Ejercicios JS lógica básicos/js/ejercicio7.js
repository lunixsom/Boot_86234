/*
  ============ EJERCICIO 7: PAGO EN CUOTAS ============
  Pedir al usuario que ingrese el importe de su compra.
  Pedir además la cantidad de cuotas en las que desea pagar.

  Calcular el importe de cada cuota teniendo en cuenta que el interés por realizar el pago en cuotas es del 20% sobre el importe total de la compra.

  Mostrar por consola el importe total de la compra, el interés aplicado, y el importe de cada cuota.
*/

let importe = Number (prompt ("Ingrese el imoporte de su compra:"));
let cuotas = Number (prompt ("Ingrese la cantidad de cuotas en las que desea pagar"));
const interes = 20;

const valorIntereses = ((importe * interes) / 100);
const importeIntereses = (importe + valorIntereses);
const importeCuotas = (importeIntereses / cuotas);

console.log(`El importe total de la compra es: ${importeIntereses}`);
console.log(`El interes aplicado es: ${valorIntereses}`);
console.log(`El valor de cada cuota es: ${importeCuotas}`);