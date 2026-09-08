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



let formulario = document.querySelector("#form-registro");

let nombre = document.querySelector("#nombre");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let errorNombre = document.querySelector("#error-nombre");
let errorEmail = document.querySelector("#error-email");
let errorPassword = document.querySelector("#error-password");

let exito = document.querySelector("#exito");

function validarNombre() {
    let valor = nombre.value;
    if (valor === "" || valor.length < 3) {
    nombre.classList.remove("valido");
    nombre.classList.add("error");
    errorNombre.textContent = "El nombre debe tener al menos 3 caracteres";
    errorNombre.classList.add("visible");
    } else {
    nombre.classList.add("valido");
    errorNombre.classList.remove("visible");
    }
}
nombre.addEventListener("blur", validarNombre);

function validarEmail() {

    let valor = email.value;
    if (valor === "" || !valor.includes("@") || !valor.includes(".")) {
    email.classList.remove("valido");
    email.classList.add("error");
    errorEmail.textContent = "Ingresá un email válido";
    errorEmail.classList.add("visible");
    } else {
    email.classList.remove("error");
    email.classList.add("valido");

    errorEmail.classList.remove("visible");
    }
}
email.addEventListener("blur", validarEmail);
function validarPassword() {
    let valor = password.value;

    if (valor === "" || valor.length < 8) {
    password.classList.remove("valido");
    password.classList.add("error");
    errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres";
    errorPassword.classList.add("visible")
    } else {
        password.classList.remove("error");
        password.classList.add("valido")
        errorPassword.classList.remove("visible")
    }
}
password.addEventListener("blur", validarPassword);
formulario.addEventListener("submit", function(event) {
event.preventDefault();
validarNombre();
    validarEmail();
    validarPassword();
    if (
        nombre.classList.contains("valido") &&
        email.classList.contains("valido") &&
        password.classList.contains("valido")
    ) {
    formulario.style.display = "none";
    exito.classList.add("visible");
    }

});