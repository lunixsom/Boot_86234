// Ejercicio 15: Funciones que reciben y retornan arrays
//
// Creá estas tres funciones:
//
//   1. obtenerPares(numeros)
//      Recibe un array de números y retorna un nuevo array solo con los pares.
//
//   2. invertirArray(array)
//      Recibe un array y retorna uno nuevo con los elementos en orden inverso.
//      No modificar el array original.
//
//   3. contarOcurrencias(array, elemento)
//      Retorna cuántas veces aparece el elemento en el array.
//
// Probá con:
//   const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const letras  = ["a", "b", "a", "c", "a", "d"];
//
// Resultado esperado:
//   Pares: [ 2, 4, 6, 8, 10 ]
//   Invertido: [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
//   Ocurrencias de "a": 3
// *********Opcional:
//  Crear una función que reciba texto y una letra y retorne la cantidad de veces que aparece esa letra en el texto. Probar con un texto largo y distintas letras.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const letras = ["a", "b", "a", "c", "a", "d"];

const obtenerPares = (numeros) => {
    const pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }
    return pares;
};

const invertirArray = (array) => {
    const invertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
        invertido.push(array[i]);
    }
    return invertido;
};

const contarOcurrencias = (array, elemento) => {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            contador++;
        }
    }
    return contador;
};


console.log("Pares:", obtenerPares(numeros));
console.log("Invertido:", invertirArray(numeros));
console.log('Ocurrencias" de "a":', contarOcurrencias(letras, "a"));
