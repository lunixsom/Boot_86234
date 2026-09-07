/*
========= Ejercicio 5: Precio final con IVA, ganancia y descuento =========

Crear una variable llamada `precioProducto`, otra variable llamada `ganancia` y una variable descuento con los valores que se detallan a continuación:

A. Calcular el precio final sumando un IVA del 21% al precio original, sumarle la ganancia del 40%, y mostrar el resultado por consola. 
B. Luego, calcular el precio final con un descuento del 10% y mostrar el resultado por consola.

Mostrar por consola:

El precio original es: $1000 * 1.21
El precio con IVA es: $1210
El precio final es: $1694
El precio final con descuento es: $1524.6

Calcular:
- El monto descontado
- El precio final

Mostrar por consola:
El precio final sin descuento es: $1694
El descuento es de: $169.4
El precio final es: $1524.6

Extra: Redondear el precio final a dos decimales y mostrarlo por consola.

*/

const iva = 1.21;
const ganancia = 1.40;
const descuento = 10;

const precioProducto = 1000;
const precioIva = (1000 * iva);
const precioFinal = (precioIva * ganancia);
const precioFinalDescuento = (precioFinal - (precioFinal * descuento / 100)); 
const valorDescontado = (precioFinal * descuento / 100);

console.log(`El precio orignal es: ${precioProducto}`);
console.log(`El precio con IVA es: ${precioIva}`);
console.log(`El precio final es: ${precioFinal}`);
console.log(`El precio final con descuento es: ${precioFinalDescuento.toFixed(2)}`);

console.log(`El precio final sin descuento es: ${precioFinal}`);
console.log(`El descuento es: ${valorDescontado.toFixed(2)}`);
console.log(`El precio final es: ${precioFinalDescuento.toFixed(2)}`);

