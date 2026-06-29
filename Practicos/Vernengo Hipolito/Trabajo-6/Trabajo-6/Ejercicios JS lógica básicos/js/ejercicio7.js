/*
  ============ EJERCICIO 7: PAGO EN CUOTAS ============
  Pedir al usuario que ingrese el importe de su compra.
  Pedir además la cantidad de cuotas en las que desea pagar.

  Calcular el importe de cada cuota teniendo en cuenta que el interés por realizar el pago en cuotas es del 20% sobre el importe total de la compra.

  Mostrar por consola el importe total de la compra, el interés aplicado, y el importe de cada cuota.
*/

//Pedimos que ingrese los valores
const importe = Number(prompt("Ingrese el importe de su compra"));
const cuotas = Number(prompt("Ingrese la cantidad de cuotas con las que desea pagar"));

//Realizamos los calculos
const calcularInteres = importe * 1.20;
const importeCuotas = calcularInteres / cuotas;

//Mostramos por pantalla los resultados
console.log("Importe original de la compra es: " + importe.toFixed(2)); 
console.log("Importe con intereses: " + calcularInteres.toFixed(2));
console.log("Importe a pagar de cada cuota: " + importeCuotas.toFixed(2));