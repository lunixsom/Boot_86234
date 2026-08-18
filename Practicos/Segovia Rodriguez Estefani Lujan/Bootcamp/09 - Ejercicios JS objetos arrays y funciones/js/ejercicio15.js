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

function obtenerPares(numeros) {
    return numeros.filter(num => num % 2 === 0);
}

function invertirArray(array) {
    return array.slice().reverse();
}

function contarOcurrencias(array, elemento) {
    return array.filter(item => item === elemento).length;
}

function contarLetras(texto, letra) {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            contador++;
        }
    }

    return contador;
}

console.log("Pares:", obtenerPares(numeros));
console.log("Invertido:", invertirArray(numeros));

const letra = "a";
console.log(`Ocurrencias de "${letra}":`, contarOcurrencias(letras, letra));

const texto = "JavaScript es un lenguaje muy divertido";
console.log("Cantidad de 'a':", contarLetras(texto, "a"));
console.log("Cantidad de 'e':", contarLetras(texto, "e"));
