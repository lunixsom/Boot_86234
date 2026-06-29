/*
  ============ EJERCICIO 7: PAGO EN CUOTAS ============
  Pedir al usuario que ingrese el importe de su compra.
  Pedir además la cantidad de cuotas en las que desea pagar.

  Calcular el importe de cada cuota teniendo en cuenta que el interés por realizar el pago en cuotas es del 20% sobre el importe total de la compra.

  Mostrar por consola el importe total de la compra, el interés aplicado, y el importe de cada cuota.
*/

const importe = 25000;
const cuotas = 5;

const interes = 20;
const importeTotal = importe * (1 + interes / 100);
const importeDeCadaCuota = importeTotal / cuotas;

console.log(`Total de la compra es de $${importe}`);
console.log(`El interes aplicado a las cuotas es del ${interes}%, por lo cual el importe total es de: ${importeTotal}`);
console.log(`El importe de cada cuota es de: ${importeDeCadaCuota}`)
