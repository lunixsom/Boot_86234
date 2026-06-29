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

//Pedimos que ingrese los valores
const ingresoMensual = Number(prompt("Ingreso mensual:"));
const alquiler = Number(prompt("gasto en alquiler:"));
const comida = Number(prompt("Gasto en comida:"));
const transporte = Number(prompt("Gasto en transporte:"));
const servicios = Number(prompt("Gasto en servicios:"));
const entretenimiento = Number(prompt("Gasto en entretenimiento"));

//Realizamos los calculos
const gastosMensuales = alquiler + comida + transporte + servicios + entretenimiento;
const dineroRestante = ingresoMensual - gastosMensuales;
const porcentajeGastos = (gastosMensuales / ingresoMensual ) * 100;

//Preguntamos si quiere ver resumen
const quiereVerResumen = confirm("Deseas ver el resumen de tus gastos y presupuesto mensual?");

//Mostramos los resultados en consola y alert()
console.log("Ingreso mensual: $" +ingresoMensual);
console.log("Total de gastos: $" + gastosMensuales);
console.log("Dinero restante: $" + dineroRestante);
console.log("Porcentaje gastado: " + porcentajeGastos.toFixed(2) + "%");
console.log("El usuario quiso ver el resumen?: true")

alert(`Resumen de tu presupuesto mensual: \n
  Ingreso mensual: $${ingresoMensual}\n
  Total de gastos: $${gastosMensuales}\n
  Dinero restante: $${dineroRestante}
  Porcentaje gastado: ${porcentajeGastos.toFixed(2)}%`);

