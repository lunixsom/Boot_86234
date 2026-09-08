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

const form = document.querySelector("#form-registro")

const nombre = document.querySelector("#nombre")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

const errorNombre = document.querySelector("#error-nombre")
const errorEmail = document.querySelector("#error-email")
const errorPassword = document.querySelector("#error-password")

const exito = document.querySelector("#exito")

// Funcion generica para marcar un campo como invalido
function marcarError(input, mensajeEl, texto) {
  input.classList.remove("valido")
  input.classList.add("error")
  mensajeEl.textContent = texto
  mensajeEl.classList.add("visible")
}

// Funcion generica para marcar un campo como valido
function marcarValido(input, mensajeEl) {
  input.classList.remove("error")
  input.classList.add("valido")
  mensajeEl.classList.remove("visible")
}

// Cada validador devuelve true/false y aplica las clases correspondientes
function validarNombre() {
  const valor = nombre.value.trim()

  if (valor === "") {
    marcarError(nombre, errorNombre, "El nombre no puede estar vacío")
    return false
  }
  if (valor.length < 3) {
    marcarError(nombre, errorNombre, "El nombre debe tener al menos 3 caracteres")
    return false
  }
  marcarValido(nombre, errorNombre)
  return true
}

function validarEmail() {
  const valor = email.value.trim()
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (valor === "") {
    marcarError(email, errorEmail, "El email no puede estar vacío")
    return false
  }
  if (!regexEmail.test(valor)) {
    marcarError(email, errorEmail, "El email no tiene un formato válido")
    return false
  }
  marcarValido(email, errorEmail)
  return true
}

function validarPassword() {
  const valor = password.value

  if (valor === "") {
    marcarError(password, errorPassword, "La contraseña no puede estar vacía")
    return false
  }
  if (valor.length < 8) {
    marcarError(password, errorPassword, "La contraseña debe tener al menos 8 caracteres")
    return false
  }
  marcarValido(password, errorPassword)
  return true
}

// Validacion en blur 
nombre.addEventListener("blur", validarNombre)
email.addEventListener("blur", validarEmail)
password.addEventListener("blur", validarPassword)

// Validacion en submit 
form.addEventListener("submit", (e) => {
  e.preventDefault()

  const nombreValido = validarNombre()
  const emailValido = validarEmail()
  const passwordValido = validarPassword()

  if (nombreValido && emailValido && passwordValido) {
    form.style.display = "none"
    exito.classList.add("visible")
  }
})