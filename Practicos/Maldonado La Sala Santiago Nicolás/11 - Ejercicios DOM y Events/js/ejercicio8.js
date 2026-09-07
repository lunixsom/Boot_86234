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

const form = document.getElementById("form-registro");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const exito = document.getElementById("exito");

const errorNombre = document.getElementById("error-nombre");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarNombre() {
  if (nombre.value.trim().length === 0) {
    nombre.classList.remove("valido");
    nombre.classList.add("error");
    errorNombre.textContent = "El nombre no puede estar vacío";
    errorNombre.classList.add("visible");
    return false;
  }
  if (nombre.value.trim().length < 3) {
    nombre.classList.remove("valido");
    nombre.classList.add("error");
    errorNombre.textContent = "El nombre debe tener al menos 3 caracteres";
    errorNombre.classList.add("visible");
    return false;
  }
  nombre.classList.remove("error");
  nombre.classList.add("valido");
  errorNombre.classList.remove("visible");
  return true;
}

function validarEmail() {
  if (email.value.trim().length === 0) {
    email.classList.remove("valido");
    email.classList.add("error");
    errorEmail.textContent = "El email no puede estar vacío";
    errorEmail.classList.add("visible");
    return false;
  }
  if (!regexEmail.test(email.value.trim())) {
    email.classList.remove("valido");
    email.classList.add("error");
    errorEmail.textContent = "El email debe tener un formato válido";
    errorEmail.classList.add("visible");
    return false;
  }
  email.classList.remove("error");
  email.classList.add("valido");
  errorEmail.classList.remove("visible");
  return true;
}

function validarPassword() {
  if (password.value.length === 0) {
    password.classList.remove("valido");
    password.classList.add("error");
    errorPassword.textContent = "La contraseña no puede estar vacía";
    errorPassword.classList.add("visible");
    return false;
  }
  if (password.value.length < 8) {
    password.classList.remove("valido");
    password.classList.add("error");
    errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres";
    errorPassword.classList.add("visible");
    return false;
  }
  password.classList.remove("error");
  password.classList.add("valido");
  errorPassword.classList.remove("visible");
  return true;
}

nombre.addEventListener("blur", validarNombre);
email.addEventListener("blur", validarEmail);
password.addEventListener("blur", validarPassword);

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombreValido = validarNombre();
  const emailValido = validarEmail();
  const passwordValido = validarPassword();

  if (nombreValido && emailValido && passwordValido) {
    exito.classList.add("visible");
    form.style.display = "none";
  }
});
