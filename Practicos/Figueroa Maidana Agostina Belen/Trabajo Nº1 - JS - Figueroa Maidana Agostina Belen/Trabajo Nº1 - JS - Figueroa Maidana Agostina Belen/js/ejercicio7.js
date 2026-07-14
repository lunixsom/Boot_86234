/*
  ============ EJERCICIO 7: PAGO EN CUOTAS ============
  Pedir al usuario que ingrese el importe de su compra.
  Pedir además la cantidad de cuotas en las que desea pagar.

  Calcular el importe de cada cuota teniendo en cuenta que el interés por realizar el pago en cuotas es del 20% sobre el importe total de la compra.

  Mostrar por consola el importe total de la compra, el interés aplicado, y el importe de cada cuota.
*/

const montoCompra = +prompt("Ingrese el importe de su compra:");
const cuotasCompra = +prompt("¿En cuantas cuotas desea pagar?");
const interes = 0.20;

const interesAplicado = montoCompra * interes;
const montoConInteres = montoCompra + interesAplicado;
const montoFinalCuotas = montoConInteres / cuotasCompra;

console.log(`El interes aplicado en su compra es de: $${interesAplicado.toFixed(2)}`);
console.log(`El importe total a abonar es de: $${montoConInteres.toFixed(2)}`);
console.log(`Se realizara el pago en ${cuotasCompra} cuotas y el importe final de cada una de ellas será de: $${montoFinalCuotas.toFixed(2)}`);
