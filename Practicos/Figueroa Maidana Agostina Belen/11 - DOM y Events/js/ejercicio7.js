// Ejercicio 7: Buscador en tiempo real
//
// Abrí ejercicio7.html. Hay un input de búsqueda, un párrafo contador y una lista vacía.
//
// Tenés este array de países:
//
//   let paises = ["Argentina", "Brasil", "Chile", "Colombia", "Ecuador",
//                 "México", "Paraguay", "Perú", "Uruguay", "Venezuela",
//                 "Bolivia", "Costa Rica", "Cuba", "Guatemala", "Honduras",
//                 "Nicaragua", "Panamá", "República Dominicana", "El Salvador"];
//
// 1. Al cargar la página, renderizá TODOS los países como <li> dentro de <ul#lista>.
//    Mostrá en <p#contador>: "19 países"
//
// 2. Agregá un listener al evento "input" del buscador.
//    Cada vez que el usuario escribe, filtrá los países cuyo nombre INCLUYE
//    el texto ingresado (sin distinguir mayúsculas/minúsculas) y re-renderizá la lista.
//    TIP: para comparar sin importar el caso deberías convertir ambos textos a minúsculas con .toLowerCase() antes de compararlos.
//
// 3. Actualizá el contador con la cantidad de resultados visibles.
//    Si no hay resultados, mostrá: "No se encontraron países"
//
// 4. Creá una función renderLista(array) que reciba el array filtrado y
//    actualice el DOM. Llamala tanto al cargar como en cada búsqueda.
//    TIP: una función reutilizable evita duplicar la lógica de render.
//    Es posible que los resultados se acumulen en el DOM por lo que en la función deberías limpiar la lista antes de agregar los resultados filtrados.

let paises = [
  "Argentina", "Brasil", "Chile", "Colombia", "Ecuador",
  "México", "Paraguay", "Perú", "Uruguay", "Venezuela",
  "Bolivia", "Costa Rica", "Cuba", "Guatemala", "Honduras",
  "Nicaragua", "Panamá", "República Dominicana", "El Salvador"
];
const ulLista = document.querySelector("#lista");
const contadorPaises = document.querySelector("#contador");
const buscadorPais = document.querySelector("#buscador");

function renderLista(array) {

  ulLista.innerHTML = "";

  array.forEach(pais => {

    const li = document.createElement("li");
    li.textContent = pais;

    ulLista.appendChild(li);

  });
}

renderLista(paises);

contadorPaises.textContent = `${paises.length} países`;

buscadorPais.addEventListener("input", (evento) => {

  const valor = evento.target.value.toLowerCase();

  const paisesFiltrados = paises.filter(pais =>
    pais.toLowerCase().includes(valor)
  );

  renderLista(paisesFiltrados);

  if(paisesFiltrados.length === 0){
    contadorPaises.textContent = "No se encontraron países";
  } else {
    contadorPaises.textContent = `${paisesFiltrados.length} países`;
  }

})

