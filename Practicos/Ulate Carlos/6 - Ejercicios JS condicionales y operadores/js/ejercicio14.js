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


const categoria = prompt("Ingrese la categoría del producto (electronica/ropa/alimentos/otra): ");
const precioOriginal = +prompt("Ingrese el precio original del producto: ");

let descuento;

switch (categoria) {
  case "electronica":
    descuento = 0.1;
    break;
  case "ropa":
    descuento = 0.2;
    break;
  case "alimentos":
    descuento = 0.05;
    break;
  default:
    descuento = 0;
}

const precioFinal = precioOriginal - (precioOriginal * descuento);

console.log(`Categoría: ${categoria}`);
console.log(`Descuento: ${descuento * 100}%`);
console.log(`Precio final: ${precioFinal}`);
