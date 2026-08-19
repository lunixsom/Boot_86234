// Ejercicio 4: Recorrer un array con for
//
// Tenés este array:
//
//   const temperaturas = [22, 18, 30, 15, 27, 10, 35];
//
// Usando un bucle for clásico, mostrá cada temperatura con este formato:
//   Día 1: 22°C
//   Día 2: 18°C
//   ...
//
// Después del bucle, mostrá también:
//   - La temperatura más alta
//   - La temperatura más baja
//
// TIP: Math.max(...array) y Math.min(...array) te dan el máximo y mínimo de un array.

const temperaturas = [22, 18, 30, 15, 27, 10, 35];

for(let i = 0;   i < temperaturas.length;  i++) {

    console.log(`Dia ${i+1}: ${temperaturas[i]}°C`);

}

const maxTemp = Math.max(...temperaturas);
const minTemp = Math.min(...temperaturas);

console.log(`La temperatura más alta es: ${maxTemp}°C`);

console.log(`La temperatura más baja es: ${minTemp}°C`);
