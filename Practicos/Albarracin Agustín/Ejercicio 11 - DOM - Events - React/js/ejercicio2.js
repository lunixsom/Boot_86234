let tareas = ["Estudiar DOM", "Practicar eventos", "Hacer el proyecto", "Repasar array methods"];

const lista = document.querySelector("#lista");

tareas.forEach(tarea => {
  const li = document.createElement("li");
  li.textContent = tarea;
  lista.appendChild(li);
});

lista.firstElementChild.remove();

const nuevoLi = document.createElement("li");
nuevoLi.textContent = "Repasar HTML semántico";
lista.insertBefore(nuevoLi, lista.firstElementChild);
