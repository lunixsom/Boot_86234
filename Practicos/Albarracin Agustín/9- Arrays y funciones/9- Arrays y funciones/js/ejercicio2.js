// Ejercicio 2: Modificar un array
//
// Define un array colores con estos elementos:
//
//   "rojo", "verde", "azul"
//
// Realizá estas operaciones EN ORDEN y mostrá el array después de cada una:
//   1. Agregá "amarillo" al final
//   2. Agregá "blanco" al principio
//   3. Eliminá el último elemento
//   4. Eliminá el primer elemento
//
// Resultado esperado:
//   [ 'rojo', 'verde', 'azul', 'amarillo' ]
//   [ 'blanco', 'rojo', 'verde', 'azul', 'amarillo' ]
//   [ 'blanco', 'rojo', 'verde', 'azul' ]
//   [ 'rojo', 'verde', 'azul' ]
//
// TIP: Investiga los métodos unshift, shift, pop y push para agregar o eliminar elementos de un array.


const colores = ["rojo", "verde", "azul"];

colores.push("amarillo");
console.log(colores);

colores.unshift("blanco");
console.log(colores);

colores.pop(amarillo);
console.log(colores);

colores.shift(blanco);
console.log(colores);

// Ahora se que unshift, shift y pop agrega y elimina elementos de un array. Unshift agrega al principio, shift elimina del principio, pop elimina del final y push agrega al final. Anotacion propia para recordarlo :D 