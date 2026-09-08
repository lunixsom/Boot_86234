let paises = [
  "Argentina", "Brasil", "Chile", "Colombia", "Ecuador",
  "México", "Paraguay", "Perú", "Uruguay", "Venezuela",
  "Bolivia", "Costa Rica", "Cuba", "Guatemala", "Honduras",
  "Nicaragua", "Panamá", "República Dominicana", "El Salvador"
];

const lista = document.querySelector("#lista");
const contador = document.querySelector("#contador");
const buscador = document.querySelector("#buscador");

function renderLista(array) {
  lista.innerHTML = "";

  if (array.length === 0) {
    contador.textContent = "No se encontraron países";
    return;
  }

  array.forEach(pais => {
    const li = document.createElement("li");
    li.textContent = pais;
    lista.appendChild(li);
  });

  contador.textContent = `${array.length} ${array.length === 1 ? "país" : "países"}`;
}

renderLista(paises);

buscador.addEventListener("input", () => {
  const busqueda = buscador.value.toLowerCase();
  const filtrados = paises.filter(pais => pais.toLowerCase().includes(busqueda));
  renderLista(filtrados);
});
