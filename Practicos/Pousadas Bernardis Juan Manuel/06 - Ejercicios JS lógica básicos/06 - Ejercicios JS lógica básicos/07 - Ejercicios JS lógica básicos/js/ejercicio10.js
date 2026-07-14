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

let ingresoMensual = parseFloat(prompt("Su ingreso mensual"));
let gastoAlquiler = parseFloat(prompt("Gasto en alquiler"));
let gastoComida = parseFloat(prompt("Gasto en comida"));
let gastoTransporte = parseFloat(prompt("Gasto en transporte"));
let gastoServicios = parseFloat(prompt("Gasto en servicios"));
let gastoEntretenimiento = parseFloat(prompt("Gasto en entretenimiento"));

let quiereVerResumen = confirm("¿Deseás ver el resumen del presupuesto?");

let totalGastos = gastoAlquiler + gastoComida + gastoEntretenimiento + gastoServicios + gastoTransporte;
let dineroRestante = ingresoMensual - totalGastos;
let porcentaje = totalGastos / ingresoMensual * 100;

console.log(`Ingreso mensual: $${ingresoMensual.toFixed(2)}`);
console.log(`Total de gastos: $${totalGastos.toFixed(2)}`);
console.log(`Dinero restante: $${dineroRestante.toFixed(2)}`);
console.log(`Porcentaje gastado: ${porcentaje}%`);
console.log(`¿El usuario quiso ver el resumen?: ${quiereVerResumen}`);

alert(`
RESUMEN DE CUENTAS:
Ingreso mensual: $${ingresoMensual.toFixed(2)}
Total de gastos: $${totalGastos.toFixed(2)}
Dinero restante: $${dineroRestante.toFixed(2)}
Porcentaje gastado: ${porcentaje}%
`)
