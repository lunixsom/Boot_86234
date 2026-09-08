// Ejercicio 8: Formulario con validación
//
// Abrí ejercicio8.html. Hay un formulario de registro con tres campos:
// nombre, email y contraseña.
//
// Implementá la validación completa:
//
// VALIDACIÓN EN BLUR (al salir del campo):
//
// 1. Campo "nombre":
//    - No puede estar vacío
//    - Debe tener al menos 3 caracteres
//    Si hay error: agregá clase "error" al input y mostrá el mensaje en #error-nombre
//    Si es válido: agregá clase "valido" y ocultá el mensaje de error
//
// 2. Campo "email":
//    - No puede estar vacío
//    - Debe contener "@" y "."
//    TIP: podés usar includes("@") o una regex simple: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//
// 3. Campo "password":
//    - No puede estar vacío
//    - Debe tener al menos 8 caracteres
//
// VALIDACIÓN EN SUBMIT:
//
// 4. Agregá un listener al evento "submit" del formulario.
//    Usá preventDefault() para evitar que recargue la página.
//    Validá los tres campos. Si alguno falla, mostrá sus errores y NO enviés.
//    Si todos son válidos:
//      - Mostrá el <div#exito> (agregale la clase "visible")
//      - Ocultá el formulario
//
// TIP: para mostrar u ocultar los mensajes de error:
//      error.classList.add("visible")    →  muestra el mensaje
//      error.classList.remove("visible") →  lo oculta
//
// TIP: para marcar un campo como válido o inválido:
//      input.classList.add("error")      →  borde rojo
//      input.classList.add("valido")     →  borde verde
//      (acordate de quitar la clase contraria antes de agregar la nueva)

const formRegistro = document.querySelector("#form-registro");
const inputNombre = document.querySelector("#nombre");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const errorNombre = document.querySelector("#error-nombre");
const errorEmail = document.querySelector("#error-email");
const errorPassword = document.querySelector("#error-password");
const divExito = document.querySelector("#exito");

function marcarValido(input, error) {
  input.classList.remove("error");
  input.classList.add("valido");
  error.classList.remove("visible");
}

function marcarError(input, error, mensaje) {
  input.classList.remove("valido");
  input.classList.add("error");
  error.textContent = mensaje;
  error.classList.add("visible");
}

function validarNombre() {
  if (inputNombre.value.trim() === "") {
    marcarError(inputNombre, errorNombre, "El nombre no puede estar vacío");
    return false;
  } else if (inputNombre.value.trim().length < 3) {
    marcarError(inputNombre, errorNombre, "El nombre debe tener al menos 3 caracteres");
    return false;
  } else {
    marcarValido(inputNombre, errorNombre);
    return true;
  }
}

function validarEmail() {
  if (inputEmail.value.trim() === "") {
    marcarError(inputEmail, errorEmail, "El email no puede estar vacío");
    return false;
  } else if (!inputEmail.value.includes("@") || !inputEmail.value.includes(".")) {
    marcarError(inputEmail, errorEmail, "Ingresá un email válido");
    return false;
  } else {
    marcarValido(inputEmail, errorEmail);
    return true;
  }
}

function validarPassword() {
  if (inputPassword.value.trim() === "") {
    marcarError(inputPassword, errorPassword, "La contraseña no puede estar vacía");
    return false;
  } else if (inputPassword.value.length < 8) {
    marcarError(inputPassword, errorPassword, "La contraseña debe tener al menos 8 caracteres");
    return false;
  } else {
    marcarValido(inputPassword, errorPassword);
    return true;
  }
}

inputNombre.addEventListener("blur", validarNombre);
inputEmail.addEventListener("blur", validarEmail);
inputPassword.addEventListener("blur", validarPassword);

formRegistro.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombreOk = validarNombre();
  const emailOk = validarEmail();
  const passwordOk = validarPassword();

  if (nombreOk && emailOk && passwordOk) {
    formRegistro.style.display = "none";
    divExito.classList.add("visible");
  }
});
