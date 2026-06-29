/*
  ============ EJERCICIO 7: PAGO EN CUOTAS ============
  Pedir al usuario que ingrese el importe de su compra.
  Pedir además la cantidad de cuotas en las que desea pagar.

  Calcular el importe de cada cuota teniendo en cuenta que el interés por realizar el pago en cuotas es del 20% sobre el importe total de la compra.

  Mostrar por consola el importe total de la compra, el interés aplicado, y el importe de cada cuota.
*/

const importeCompra = 1000;
const cuotas = 5;
const interes = 20;

const montoInteres = importeCompra * interes / 100;
const totalCompra = importeCompra + montoInteres;
const importeCuota = totalCompra / cuotas;

console.log(`Importe de la compra: $ ${importeCompra}`);
console.log("Interés aplicado: $" + montoInteres);
console.log("Importe total: $" + totalCompra);
console.log("Importe de cada cuota: $" + importeCuota);