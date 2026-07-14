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

//Pedimos que ingrese los valores
const largo = Number(prompt("Ingrese el largo de la habitacion"));
const ancho = Number(prompt("Ingrese el ancho de la habitacion"));
const altura = Number(prompt("Ingrese la altura de las paredes"));
const valorLitroPintura = Number(prompt("Ingrese el precio de un litro de pintura"));
const rendimientoPorLitro = 6;

//Realizamos los calculos
const perimetro = (largo + ancho) * 2;
const metrosCuadradosPared = perimetro * altura;
const litrosNecesarios = metrosCuadradosPared / rendimientoPorLitro;
const total = litrosNecesarios * valorLitroPintura;

//Pedimos que confirme 
const quiereVerResumen = confirm("Quieres ver el resumen del presupuesto? ");

//Mostramos por pantalla los resultados
console.log("El perimetro de la habitacion es de: " + perimetro);
console.log("Metros cuadrados de pared: " + metrosCuadradosPared);
console.log("Litros necesarios de pintura: " + litrosNecesarios.toFixed(2));
console.log("Costo total de la pintura: " + total.toFixed(2));


