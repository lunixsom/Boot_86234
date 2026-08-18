/*
  ============ EJERCICIO OPCIONAL: PRESUPUESTO PARA PINTAR UNA HABITACIÓN ============

  Pedir al usuario que ingrese:

  - El largo de la habitación
  - El ancho de la habitación
  - La altura de las paredes
  - El precio de un litro de pintura

  - Crear otra variable llamada `rendimientoPorLitro` y asignarle el valor de 6, que representa la cantidad de metros cuadrados que se pueden pintar con un litro de pintura.

  Calcular:

  - El perímetro de la habitación
  - La cantidad de metros cuadrados de pared
  - La cantidad de litros de pintura necesarios
  - El costo total de la pintura

  Fórmulas sugeridas:

  perímetro = 2 x (largo + ancho)
  metrosCuadradosPared = perímetro x altura
  litrosNecesarios = metrosCuadradosPared / rendimientoPorLitro
  costoTotal = litrosNecesarios x precioPorLitro

  Mostrar por consola:

  Perímetro de la habitación: 18 metros
  Metros cuadrados de pared: 45 m2
  Litros necesarios: 7.5
  Costo total de pintura: $37500

  Antes de mostrar el alert(), usar confirm():

  ¿Deseás ver el resumen del presupuesto?

  Guardar la respuesta en una variable llamada `quiereVerResumen`.

  Mostrar por consola el valor de esa variable.

  Importante:
  Todavía no hace falta usar if/else.
  El confirm() solamente se guarda como true o false.

  Extra:
  Redondear los litros necesarios y el costo total a dos decimales.
*/
const largo = +prompt("Ingrese el largo de la habitacion");

const ancho = +prompt("Ingrese el ancho de la habitacion");

const altura = +prompt("Ingrese la altura de las paredes");

const litro = +prompt("indique el precio de litro de pintura");

const rendimientoPorLitro = 6;

const perimetro = 2 * ( largo + ancho);
console.log(`El perimetro de la habitacion es de ${perimetro} metros`);

const metrosCuadradosPared = perimetro * altura;
console.log(`Los metros cuadrados por pared son de ${metrosCuadradosPared} m2`);

const litrosNecesarios = metrosCuadradosPared / rendimientoPorLitro
const litNecesarios = Math.round(litrosNecesarios * 100) / 100;
console.log(`Los litros necesarios para pintar son de ${litNecesarios} litros por pared`);

const costoTotal = litrosNecesarios * litro 
const costTotal = Math.round(costoTotal * 100) / 100;
console.log(`El costo total de la pintura es de $${costTotal}`)

let resumen = confirm("Desesa ver el resumen de la compra?")

console.log(resumen)