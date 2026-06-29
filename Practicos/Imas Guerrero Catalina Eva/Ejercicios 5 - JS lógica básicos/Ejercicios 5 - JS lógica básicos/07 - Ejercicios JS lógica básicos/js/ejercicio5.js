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
let precioProducto = 1000;
let ganancia = 0.40;     // 40%
let descuento = 0.10;    // 10%

// A. Calcular precio con IVA (21%)
let precioConIVA = precioProducto * 1.21;
console.log(`El precio con IVA es: $${precioConIVA}`);

// Calcular precio final con ganancia
let precioFinal = precioConIVA * (1 + ganancia);
console.log(`El precio final es: $${precioFinal}`);

// B. Calcular precio final con descuento
let montoDescuento = precioFinal * descuento;
let precioConDescuento = precioFinal - montoDescuento;

console.log(`El precio final con descuento es: $${precioConDescuento}`);

//Detalle
console.log(`El precio final sin descuento es: $${precioFinal}`);
console.log(`El descuento es de: $${montoDescuento}`);
console.log(`El precio final es: $${precioConDescuento}`);

// Extra: redondeado a 2 decimales
console.log(`Precio final redondeado: $${precioConDescuento.toFixed(2)}`)