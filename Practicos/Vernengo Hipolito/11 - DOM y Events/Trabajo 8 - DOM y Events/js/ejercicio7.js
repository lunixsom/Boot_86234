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


const listaHTML = document.getElementById("lista");
const contadorHTML = document.getElementById("contador");
const buscadorHTML = document.getElementById("buscador");

renderLista(paises);

buscadorHTML.addEventListener("input", () =>{
  const texto = buscadorHTML.value.toLowerCase();

  const filtrarPais = paises.filter((pais) =>{
    if(pais.toLowerCase().includes(texto)){
      return true;
    }
  })

  renderLista(filtrarPais);
})


function renderLista(array){
  listaHTML.innerHTML = "";

  array.forEach((pais)=>{
    listaHTML.innerHTML += `<li>${pais}</li>`
  })

  contadorHTML.textContent = `${array.length} paises`;

  if(array.length === 0){
    contadorHTML.textContent = "No se encontraron resultados";
  }
}

