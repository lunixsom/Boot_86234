const botonesTab = document.querySelectorAll(".tab-btn");
const contenidos = document.querySelectorAll(".tab-contenido");

botonesTab.forEach(boton => {
  boton.addEventListener("click", () => {
    botonesTab.forEach(btn => btn.classList.remove("activo"));
    contenidos.forEach(contenido => contenido.classList.remove("activo"));

    boton.classList.add("activo");

    const tabId = boton.dataset.tab;
    const contenidoActivo = document.querySelector(`#${tabId}`);
    contenidoActivo.classList.add("activo");
  });
});
