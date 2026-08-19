// Ejercicio 3: Buscar en un array
//
// Tenés este array:
//
//   const nombres = ["Ana", "Bruno", "Camila", "Diego", "Elena"];
//
// Mostrá por consola:
//   1. Si "Camila" está en el array (true o false)
//   2. El índice donde se encuentra "Diego"
//   3. Si "Lucas" está en el array
//   4. El índice de "Lucas" — ¿qué devuelve cuando no existe?
//
// Resultado esperado:
//   true
//   3
//   false
//   -1

const nombres = ["Ana", "Bruno", "Camila", "Diego", "Elena"];

console.log(nombres.includes("Camila")); // 1.
console.log(nombres.indexOf("Diego")); // 2.
console.log(nombres.includes("Lucas")); // 3.
console.log(nombres.indexOf("Lucas")); // 4.
