// Ejercicio 9: Lista dinámica de contactos
//
// Abrí ejercicio9.html. Hay un formulario para agregar contactos, un buscador
// y una lista vacía. Vas a construir toda la lógica desde cero.
//
// El estado de la app vive en este array (no en el DOM):
//
//   let contactos = [
//     { id: 1, nombre: "Ana García",    email: "ana@email.com"    },
//     { id: 2, nombre: "Bruno López",   email: "bruno@email.com"  },
//     { id: 3, nombre: "Camila Torres", email: "camila@email.com" },
//     { id: 4, nombre: "Diego Romero",  email: "diego@email.com"  }
//   ];
//
// 1. Al cargar la página, renderizá todos los contactos.
//    Cada contacto se muestra como un <li> con nombre, email y un botón "✕".
//    Mostrá el contador: "4 contactos"
//    TIP: creá una función renderContactos(lista) que reciba el array filtrado
//         y reconstruya el DOM. La vas a llamar varias veces.
//
// 2. AGREGAR CONTACTO:
//    Al hacer click en "Agregar":
//    a) Leé los valores de #input-nombre y #input-email
//    b) Validá que ninguno esté vacío — si están vacíos, no hagas nada
//    c) Creá un nuevo objeto con un id único y agregalo al array contactos
//    d) Limpiá los inputs y volvé a renderizar
//    TIP: para generar un id único podés usar Date.now()
//
// 3. ELIMINAR CONTACTO:
//    Al hacer click en el botón "✕" de un contacto:
//    a) Obtené el id del contacto desde el atributo data-id del botón
//    b) Filtrá el array para quitar ese contacto
//    c) Volvé a renderizar
//    TIP: usá event delegation — agregá el listener al <ul>, no a cada botón.
//         Verificá con e.target.closest(".btn-eliminar") si el click fue en ese botón.
//
// 4. BUSCAR EN TIEMPO REAL:
//    Al escribir en el buscador, filtrá el array contactos por nombre
//    y renderizá solo los que coincidan. Actualizá el contador.
//    Si no hay resultados, mostrá: "No se encontraron contactos"
//
// IMPORTANTE: el array contactos es siempre la fuente de verdad.
//             Nunca leas el estado desde el DOM — siempre desde el array.

let contactos = [
  { id: 1, nombre: "Ana García", email: "ana@email.com" },
  { id: 2, nombre: "Bruno López", email: "bruno@email.com" },
  { id: 3, nombre: "Camila Torres", email: "camila@email.com" },
  { id: 4, nombre: "Diego Romero", email: "diego@email.com" }
];

const inputNombre = document.getElementById("input-nombre");
const inputEmail = document.getElementById("input-email");
const btnAgregar = document.getElementById("btn-agregar");
const buscador = document.getElementById("buscador");
const listaEl = document.getElementById("lista-contactos");
const contador = document.getElementById("contador");

function renderContactos(lista) {
  listaEl.innerHTML = "";

  if (lista.length === 0) {
    contador.textContent = "No se encontraron contactos";
  } else {
    contador.textContent = `${lista.length} contactos`;
  }

  lista.forEach((contacto) => {
    const li = document.createElement("li");
    li.className = "contacto";
    li.innerHTML = `
      <div class="info">
        <span class="nombre">${contacto.nombre}</span>
        <span class="email">${contacto.email}</span>
      </div>
      <button class="btn-eliminar" data-id="${contacto.id}">✕</button>
    `;
    listaEl.appendChild(li);
  });
}

renderContactos(contactos);

btnAgregar.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  const email = inputEmail.value.trim();

  if (nombre === "" || email === "") {
    return;
  }

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

listaEl.addEventListener("click", (e) => {
  const boton = e.target.closest(".btn-eliminar");
  if (!boton) return;

  const id = Number(boton.dataset.id);
  contactos = contactos.filter((contacto) => contacto.id !== id);

  renderContactos(filtrarContactos());
});

function filtrarContactos() {
  const texto = buscador.value.toLowerCase();
  return contactos.filter((contacto) =>
    contacto.nombre.toLowerCase().includes(texto)
  );
}

buscador.addEventListener("input", () => {
  renderContactos(filtrarContactos());
});