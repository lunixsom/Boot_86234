let contactos = [
  { id: 1, nombre: "Ana García",    email: "ana@email.com"    },
  { id: 2, nombre: "Bruno López",   email: "bruno@email.com"  },
  { id: 3, nombre: "Camila Torres", email: "camila@email.com" },
  { id: 4, nombre: "Diego Romero",  email: "diego@email.com"  }
];

const listaContactos = document.querySelector("#lista-contactos");
const contador = document.querySelector("#contador");
const inputNombre = document.querySelector("#input-nombre");
const inputEmail = document.querySelector("#input-email");
const btnAgregar = document.querySelector("#btn-agregar");
const buscador = document.querySelector("#buscador");

function renderContactos(lista) {
  listaContactos.innerHTML = "";

  if (lista.length === 0) {
    contador.textContent = "No se encontraron contactos";
    return;
  }

  lista.forEach(contacto => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${contacto.nombre} - ${contacto.email}</span>
      <button class="btn-eliminar" data-id="${contacto.id}">✕</button>
    `;
    listaContactos.appendChild(li);
  });

  contador.textContent = `${lista.length} ${lista.length === 1 ? "contacto" : "contactos"}`;
}

renderContactos(contactos);

btnAgregar.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  const email = inputEmail.value.trim();

  if (nombre === "" || email === "") return;

  const nuevoContacto = {
    id: Date.now(),
    nombre: nombre,
    email: email
  };

  contactos.push(nuevoContacto);
  inputNombre.value = "";
  inputEmail.value = "";
  renderContactos(contactos);
});

listaContactos.addEventListener("click", (e) => {
  const btnEliminar = e.target.closest(".btn-eliminar");
  if (!btnEliminar) return;

  const id = Number(btnEliminar.dataset.id);
  contactos = contactos.filter(contacto => contacto.id !== id);
  renderContactos(contactos);
});

buscador.addEventListener("input", () => {
  const busqueda = buscador.value.toLowerCase();
  const filtrados = contactos.filter(contacto =>
    contacto.nombre.toLowerCase().includes(busqueda)
  );
  renderContactos(filtrados);
});
