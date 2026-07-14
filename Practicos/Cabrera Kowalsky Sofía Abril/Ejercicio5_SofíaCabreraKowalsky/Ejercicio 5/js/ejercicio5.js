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

const precioProducto = 1000;

const precioConIva = precioProducto * 1.21;

console.log(`El precio con IVA es: $${precioConIva}`);

const ganancia = precioConIva * 0.40;

console.log(`La ganancia es de: $${ganancia}`);

const precioFinalSinDescuento = precioConIva + ganancia;

console.log (`El precio final sin descuento es: $${precioFinalSinDescuento}`);

const descuento = precioFinalSinDescuento * 0.10;

console.log (`El descuento es de: $${descuento}`)

const precioFinalConDescuento = precioFinalSinDescuento - descuento;

console.log (`El precio final es: $${precioFinalConDescuento}`)
