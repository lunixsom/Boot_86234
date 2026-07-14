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

const ingresoMensual = 880000;
const alquiler = 300000;
const comida = 130000
const transporte = 2000;
const servicios = 230000;
const entretenimiento = 5000;

const totalMensual = alquiler + comida + transporte + servicios + entretenimiento;
const dineroSobrante = ingresoMensual - totalMensual;
const porcentajeGastado = (totalMensual * 100 ) / ingresoMensual

const quiereVerResumen = confirm("¿Deseás ver el resumen de tu presupuesto mensual?");
console.log(quiereVerResumen);

console.log(`Ingreso mensual: $${ingresoMensual}`);
console.log(`Total de gastos: $${totalMensual}`);
console.log(`Dinero restante: $${dineroSobrante}`);
console.log(`Porcentaje gastado: ${porcentajeGastado.toFixed(2)}%`);
console.log(`¿El usuario quiso ver el resumen?:${quiereVerResumen}`);

alert(`Ingreso Mensual: ${ingresoMensual}\nGasto total: $${totalMensual}\nDinero restante: $${dineroSobrante}\nPorcentaje gastado: ${porcentajeGastado.toFixed(2)}%`);