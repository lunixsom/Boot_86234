/*
  ============ EJERCICIO 7: PAGO EN CUOTAS ============
  Pedir al usuario que ingrese el importe de su compra.
  Pedir además la cantidad de cuotas en las que desea pagar.

  Calcular el importe de cada cuota teniendo en cuenta que el interés por realizar el pago en cuotas es del 20% sobre el importe total de la compra.

  Mostrar por consola el importe total de la compra, el interés aplicado, y el importe de cada cuota.
*/

let importe = 1000;
let cuotas = 12;


let interes = importe * 0.20;
let precioInteres = importe + interes;
let precioCuota =  precioInteres / cuotas;



console.log(`El importe total de la compra es de: $${precioInteres}`);
console.log(`El interés es de: $${interes}`);
console.log(`El precio de cada cuota es de: $${precioCuota}`);

