const titulo = document.querySelector("#titulo");
titulo.textContent = "Equipo de trabajo";

const descripcion = document.querySelector("#descripcion");
descripcion.innerHTML = "Conocé a nuestro equipo. <strong>Somos 3 integrantes.</strong>";

const tarjeta1 = document.querySelector("#tarjeta-1");
tarjeta1.classList.add("destacado");

const tarjeta3 = document.querySelector("#tarjeta-3");
tarjeta3.classList.add("inactivo");

const nombres = document.querySelectorAll(".nombre");
nombres.forEach(nombre => {
  nombre.textContent = nombre.textContent.toUpperCase();
});

const tarjeta2 = document.querySelector("#tarjeta-2");
tarjeta2.classList.toggle("oculto");
tarjeta2.classList.toggle("oculto");
