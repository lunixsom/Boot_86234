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

const formulario = document.getElementById("form-registro");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");

const errorNombre = document.getElementById("error-nombre");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");

const exito = document.getElementById("exito");

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
    const valorNombre = nombre.value.trim();

    if (valorNombre === "") {
        mostrarError(nombre, errorNombre, "El nombre es obligatorio");
        return false;
    }

    if (valorNombre.length < 3) {
        mostrarError(
            nombre,
            errorNombre,
            "El nombre debe tener al menos 3 caracteres"
        );
        return false;
    }

    mostrarValido(nombre, errorNombre);
    return true;
}

function validarEmail() {
    const valorEmail = email.value.trim();
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (valorEmail === "") {
        mostrarError(email, errorEmail, "El email es obligatorio");
        return false;
    }

    if (!formatoEmail.test(valorEmail)) {
        mostrarError(email, errorEmail, "Ingresá un email válido");
        return false;
    }

    mostrarValido(email, errorEmail);
    return true;
}

function validarPassword() {
    const valorPassword = password.value;

    if (valorPassword.trim() === "") {
        mostrarError(
            password,
            errorPassword,
            "La contraseña es obligatoria"
        );
        return false;
    }

    if (valorPassword.length < 8) {
        mostrarError(
            password,
            errorPassword,
            "La contraseña debe tener al menos 8 caracteres"
        );
        return false;
    }

    mostrarValido(password, errorPassword);
    return true;
}

nombre.addEventListener("blur", validarNombre);
email.addEventListener("blur", validarEmail);
password.addEventListener("blur", validarPassword);

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombreEsValido = validarNombre();
    const emailEsValido = validarEmail();
    const passwordEsValida = validarPassword();

    if (nombreEsValido && emailEsValido && passwordEsValida) {
        exito.classList.add("visible");
        formulario.style.display = "none";
    }
});