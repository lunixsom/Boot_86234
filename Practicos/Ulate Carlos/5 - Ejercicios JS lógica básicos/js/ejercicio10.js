/*
  ============ EJERCICIO 10: PRESUPUESTO MENSUAL PERSONAL ============

  Pedir al usuario que ingrese:

  - Su ingreso mensual
  - Gasto en alquiler
  - Gasto en comida
  - Gasto en transporte
  - Gasto en servicios
  - Gasto en entretenimiento

  Calcular:

  - El total de gastos mensuales
  - El dinero restante al finalizar el mes
  - El porcentaje del ingreso que fue utilizado en gastos

  Antes de mostrar el resultado, usar confirm() con el siguiente mensaje:

  ¿Deseás ver el resumen de tu presupuesto mensual?

  Guardar la respuesta en una variable llamada `quiereVerResumen`.

  Mostrar por consola:

  Ingreso mensual: $500000
  Total de gastos: $350000
  Dinero restante: $150000
  Porcentaje gastado: 70%
  ¿El usuario quiso ver el resumen?: true

  Mostrar también un alert() con el resumen del presupuesto.

  Importante:
  En este ejercicio todavía no hace falta usar if/else.
  El valor de confirm() se guarda y se muestra como true o false.

  Extra:
  Redondear el porcentaje gastado a dos decimales.
*/

const ingMensual = +prompt("Ingrese su salario mensual");

const gastAlquil= +prompt("Ingrese el gasto en alquiler");

const  gastComida= +prompt("Ingrese su gasto en comida");

const gastTrans = +prompt("Ingrese el gasto en transporte");

const gastServ = +prompt("Ingrese el gasto en servicios");

const gastEntret = +prompt("Ingrese los gastos en entretenimiento");

const totalGast =    gastAlquil + gastComida + gastTrans + gastServ + gastEntret;

const dinRest = ingMensual - totalGast;

const porcenGast = (totalGast / ingMensual) * 100; 
const porcentajeGast = Math.round(porcenGast * 100) / 100;

const resumen = confirm("¿Deseás ver el resumen de tu presupuesto mensual?");

console.log(`El ingreso mensual es de $${ingMensual}`);

console.log(`El total de los gastos es de $${totalGast}`);

console.log(`El dinero restante fue de $${dinRest}`);

console.log(`El porcentaje gastado del salario mensual fue de %${porcentajeGast}`)

console.log(`El usuario quiso ver el resumen? ${resumen}`)

alert(` El usuario tiene un ingreso mensual de $${ingMensual}, teniendo un total de gastos de $${totalGast},  el dinero sobrante fue de $${dinRest}. Se utilizo un %${porcentajeGast} del salario mensual. `)