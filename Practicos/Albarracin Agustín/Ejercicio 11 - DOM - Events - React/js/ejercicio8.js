const form = document.querySelector("#form-registro");
const inputNombre = document.querySelector("#nombre");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const errorNombre = document.querySelector("#error-nombre");
const errorEmail = document.querySelector("#error-email");
const errorPassword = document.querySelector("#error-password");
const exito = document.querySelector("#exito");

function mostrarError(input, elementoError, mensaje) {
  input.classList.remove("valido");
  input.classList.add("error");
  elementoError.textContent = mensaje;
  elementoError.classList.add("visible");
}

function mostrarValido(input, elementoError) {
  input.classList.remove("error");
  input.classList.add("valido");
  elementoError.textContent = "";
  elementoError.classList.remove("visible");
}

function validarNombre() {
  const valor = inputNombre.value.trim();
  if (valor === "") {
    mostrarError(inputNombre, errorNombre, "El nombre es obligatorio");
    return false;
  }
  if (valor.length < 3) {
    mostrarError(inputNombre, errorNombre, "El nombre debe tener al menos 3 caracteres");
    return false;
  }
  mostrarValido(inputNombre, errorNombre);
  return true;
}

function validarEmail() {
  const valor = inputEmail.value.trim();
  if (valor === "") {
    mostrarError(inputEmail, errorEmail, "El email es obligatorio");
    return false;
  }
  if (!valor.includes("@") || !valor.includes(".")) {
    mostrarError(inputEmail, errorEmail, "El email no es válido");
    return false;
  }
  mostrarValido(inputEmail, errorEmail);
  return true;
}

function validarPassword() {
  const valor = inputPassword.value.trim();
  if (valor === "") {
    mostrarError(inputPassword, errorPassword, "La contraseña es obligatoria");
    return false;
  }
  if (valor.length < 8) {
    mostrarError(inputPassword, errorPassword, "La contraseña debe tener al menos 8 caracteres");
    return false;
  }
  mostrarValido(inputPassword, errorPassword);
  return true;
}

inputNombre.addEventListener("blur", validarNombre);
inputEmail.addEventListener("blur", validarEmail);
inputPassword.addEventListener("blur", validarPassword);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombreValido = validarNombre();
  const emailValido = validarEmail();
  const passwordValido = validarPassword();

  if (nombreValido && emailValido && passwordValido) {
    form.style.display = "none";
    exito.classList.add("visible");
  }
});
