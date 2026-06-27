/*
  ============ EJERCICIO 7: PAGO EN CUOTAS ============
  Pedir al usuario que ingrese el importe de su compra.
  Pedir además la cantidad de cuotas en las que desea pagar.

  Calcular el importe de cada cuota teniendo en cuenta que el interés por realizar el pago en cuotas es del 20% sobre el importe total de la compra.

  Mostrar por consola el importe total de la compra, el interés aplicado, y el importe de cada cuota.
*/


const importe = Number(prompt("Ingrese el monto de su compra"));

const cuota = Number(prompt("Ingrese la cantidad de cuotas en las que desea pagar"));

const interes = 0.20;

const importeInteres = importe * 0.20

const importeFinal = importeInteres + importe

const pagoCuota = importeFinal / cuota

console.log(`El importe total de la compra es de: $${importe} `)

console.log(`A un plazo de ${cuota} cuotas`);

console.log(`El interes aplicado es de: $${importeInteres}`);

console.log(`El importe de cada cuota es de: $${pagoCuota}`);