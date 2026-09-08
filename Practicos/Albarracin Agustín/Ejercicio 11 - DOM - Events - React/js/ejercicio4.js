const MAXIMO = 10;

let contador = 0;

const valorSpan = document.querySelector("#valor");
const btnSumar = document.querySelector("#btn-sumar");
const btnRestar = document.querySelector("#btn-restar");
const mensaje = document.querySelector("#mensaje");

function actualizarEstado() {
  valorSpan.textContent = contador;
  btnRestar.disabled = contador === 0;
  btnSumar.disabled = contador === MAXIMO;

  if (contador === 0) {
    mensaje.textContent = "Mínimo alcanzado";
  } else if (contador === MAXIMO) {
    mensaje.textContent = "Máximo alcanzado";
  } else {
    mensaje.textContent = "";
  }
}

btnSumar.addEventListener("click", () => {
  if (contador < MAXIMO) {
    contador++;
    actualizarEstado();
  }
});

btnRestar.addEventListener("click", () => {
  if (contador > 0) {
    contador--;
    actualizarEstado();
  }
});

actualizarEstado();
