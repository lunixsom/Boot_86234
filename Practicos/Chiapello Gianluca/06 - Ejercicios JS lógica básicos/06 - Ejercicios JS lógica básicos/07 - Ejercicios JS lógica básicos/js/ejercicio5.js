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
let ganancia = 0.40;
let descuento = 0.10;
const iva = 1.21;

/*A y B*/ 

let precioConIVA = precioProducto * iva;
let montoGanancia = precioConIVA * ganancia;
let precioFinal = precioConIVA + montoGanancia;
let montoDescontado = precioFinal * descuento;
let precioConDescuento = precioFinal - montoDescontado;

console.log(`El precio original es de: ${precioProducto}`);
console.log(`El precio con IVA es: ${precioConIVA}`);
console.log(`El precio final es: ${precioFinal}`);
console.log(`El precio final con descuento es: ${precioConDescuento}`);

console.log(`El precio final sin descuento es: ${precioFinal}`);
console.log(`El descuento es de: ${montoDescontado}`);
console.log(`El precio final es: ${precioConDescuento.toFixed(2)}`);