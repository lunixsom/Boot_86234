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

let ingresos = 1500000;
let alquiler = 380000;
let comida = 200000;
let transporte = 30000;
let servicios = 30000;
let entrenamiento = 30000;

let gastoMensual = alquiler + comida + transporte + servicios + entrenamiento;
let restanteDelMes = ingresos - gastoMensual; 
let porcentajeEnGastos = (gastoMensual / ingresos) * 100;


console.log(`El ingreso mensual es de: $${ingresos}`);
console.log(`El total de gastos es de: $${gastoMensual}`);
console.log(`El porcentaje del dinero utilizado es de: ${porcentajeEnGastos.toFixed(2)}%`);
console.log(`El dinero restante es: $${restanteDelMes}`);
let quiereVerResumen = true;
console.log(`¿Quiere ver el resumen?: ${quiereVerResumen}`);



