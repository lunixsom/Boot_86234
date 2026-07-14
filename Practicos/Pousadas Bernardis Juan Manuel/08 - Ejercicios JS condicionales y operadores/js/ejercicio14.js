/*
  Ejercicio 14: Sistema de descuentos por categoría
  ===================================================
  Crear dos variables: `categoria` (string) y `precioOriginal` (number).

  Aplicar el descuento según la categoría del producto:
    - "electronica" → 10% de descuento
    - "ropa"        → 20% de descuento
    - "alimentos"   → 5% de descuento
    - Otra categoría → 0% de descuento

  const categoria = "ropa";
  const precioOriginal = 5000;

  Resultado esperado:
    Categoría: ropa
    Descuento: 20%
    Precio final: 4000

  Requisitos técnicos:
    - Usar switch / case para seleccionar el porcentaje de descuento
    - Guardar el porcentaje en una variable `descuento`
    - Calcular el `precioFinal` fuera del switch
    - Mostrar los tres valores con template literals
*/

let categoria = prompt("Ingrese la categoria (electronica, ropa, alimentos): ").toLowerCase();
let precioO = parseInt(prompt("Ingrese el precio original: "));
let descuento;

switch (categoria) {
  case "electronica":
    descuento = 10;
    break;
  case "ropa":
    descuento = 20;
    break;
  case "alimentos":
    descuento = 5;
    break;
  default:
    descuento = 0;
}

let precioFinal = precioO - (precioO * descuento / 100);

console.log(`Categoria: ${categoria}`);
console.log(`Descuento: ${descuento}%`);
console.log(`Precio final: ${precioFinal}`);
