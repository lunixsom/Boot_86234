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


const ingresoMensual = parseFloat(prompt("Ingrese su ingreso mensual:"));
const gastoAlquiler = parseFloat(prompt("Ingrese su gasto en alquiler:"));
const gastoComida = parseFloat(prompt("Ingrese su gasto en comida:"));
const gastoTransporte = parseFloat(prompt("Ingrese su gasto en transporte:"));
const gastoServicios = parseFloat(prompt("Ingrese su gasto en servicios:"));
const gastoEntretenimiento = parseFloat(prompt("Ingrese su gasto en entretenimiento:"));

const totalGastos = gastoAlquiler + gastoComida + gastoTransporte + gastoServicios + gastoEntretenimiento;
const dineroRestante = ingresoMensual - totalGastos;
const porcentajeGastado = (totalGastos / ingresoMensual) * 100;

const quiereVerResumen = confirm("¿Deseás ver el resumen de tu presupuesto mensual?");
const mensajeResumen = alert(`Ingreso mensual: $${ingresoMensual}\nTotal de gastos: $${totalGastos}\nDinero restante: $${dineroRestante}\nPorcentaje gastado: ${porcentajeGastado.toFixed(2)}%\n¿El usuario quiso ver el resumen?: ${quiereVerResumen}`);