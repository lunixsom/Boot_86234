/*
  Ejercicio 6: Estación del año
  ==============================
  Pedir al usuario que ingrese el número de `mes` con un valor del 1 al 12.

  Mostrar la estación del año correspondiente (hemisferio sur):
    - Meses 12, 1, 2  → "Verano"
    - Meses 3, 4, 5   → "Otoño"
    - Meses 6, 7, 8   → "Invierno"
    - Meses 9, 10, 11 → "Primavera"
    - Otro valor      → "Mes inválido"

  const mes = 7;

  Resultado esperado:
    Invierno

  Requisitos técnicos:
    - Usar if / else if / else
    - Usar || (OR) para agrupar los meses de cada estación
*/

const numeroMes = parseInt(prompt("Ingrese un mes del 1 al 12:"));

console.log(`El número del mes ingresado es ${numeroMes}, corresponde a:`);

if ( numeroMes === 12 || numeroMes === 1 || numeroMes === 2 ) {
  console.log("Verano");
} else if ( numeroMes === 3 || numeroMes === 4 || numeroMes === 5 ) {
  console.log("Otoño");
} else if ( numeroMes === 6 || numeroMes === 7 || numeroMes === 8 ) {
  console.log("Invierno");
} else if ( numeroMes === 9 || numeroMes === 10 || numeroMes === 11 ) {
  console.log("Primavera");
} else {
  console.log("Mes inválido");
}