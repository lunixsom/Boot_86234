const botonesAcordeon = document.querySelectorAll(".acordeon-btn");

botonesAcordeon.forEach(boton => {
  boton.addEventListener("click", () => {
    const contenido = boton.nextElementSibling;

    botonesAcordeon.forEach(otroBoton => {
      if (otroBoton !== boton) {
        otroBoton.classList.remove("abierto");
        otroBoton.nextElementSibling.classList.remove("abierto");
      }
    });

    boton.classList.toggle("abierto");
    contenido.classList.toggle("abierto");
  });
});
