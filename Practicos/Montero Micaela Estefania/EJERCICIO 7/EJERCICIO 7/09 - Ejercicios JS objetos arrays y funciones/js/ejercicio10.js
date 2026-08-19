// Ejercicio 10: Recorrer un objeto con for...in
//
// Definir el siguiente objeto con las calificaciones de un estudiante:
//
//     propiedad: matematica, valor: 8,
//     propiedad: historia, valor: 7,
//     propiedad: ingles, valor: 9,
//     propiedad: biologia, valor: 6,
//     propiedad: programacion, valor: 10
//     propiedad: arte, valor: 10
//   };
//
// Usando un bucle for...in, mostrá cada materia con su nota:
//   matematica: 8
//   historia: 7
//   ingles: 9
//   biologia: 6
//   programacion: 10
//   arte: 10
//
// Luego mostrá la cantidad de materias.
// Mostrá también el promedio de las calificaciones.
//
// TIP: for (let clave in objeto) — dentro del bucle accedé al valor con objeto[clave]
// Para contar propiedades: Object.keys(objeto).length

const estudiante = {
    matematica: 8,
    historia: 7,
    ingles: 9,
    biologia: 6,
    programacion: 10,
    arte: 10,
}

for(let materia in estudiante){
    console.log(`${materia}: ${estudiante[materia]}`);
}

console.log(`Cantidad de materias: ${Object.keys(estudiante).length}`);

let suma = 0;
for(let materia in estudiante){
    suma += estudiante[materia];
}
console.log(`Suma de calificaciones: ${suma}`);
console.log(`Promedio de calificaciones: ${suma / Object.keys(estudiante).length}`);