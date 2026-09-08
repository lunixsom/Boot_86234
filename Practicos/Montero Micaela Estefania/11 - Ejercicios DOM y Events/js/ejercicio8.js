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

const form = document.querySelector("#form-registro");
const nombreInput = document.querySelector("#nombre");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const errorNombre = document.querySelector("#error-nombre");
const errorEmail = document.querySelector("#error-email");
const errorPassword = document.querySelector("#error-password");

const exitoDiv = document.querySelector("#exito");

// Funcion para validar el campo nombre
function validarNombre() {
    const nombre = nombreInput.value.trim();
    if (nombre === "") {
        nombreInput.classList.add("error");
        nombreInput.classList.remove("valido");
        errorNombre.textContent = "El nombre no puede estar vacío.";
        errorNombre.classList.add("visible");
        return false;
    } else if (nombre.length < 3) {
        nombreInput.classList.add("error");
        nombreInput.classList.remove("valido");
        errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
        errorNombre.classList.add("visible");
        return false;
    } else {
        nombreInput.classList.remove("error");
        nombreInput.classList.add("valido");
        errorNombre.classList.remove("visible");
        return true;
    }
}

// Funcion para validar el campo email
function validarEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailInput.classList.add("error");
        emailInput.classList.remove("valido");
        errorEmail.textContent = "El email no puede estar vacío.";
        errorEmail.classList.add("visible");
        return false;
    } else if (!emailRegex.test(email)) {
        emailInput.classList.add("error");
        emailInput.classList.remove("valido");
        errorEmail.textContent = "El email debe ser válido.";
        errorEmail.classList.add("visible");
        return false;
    } else {
        emailInput.classList.remove("error");
        emailInput.classList.add("valido");
        errorEmail.classList.remove("visible");
        return true;
    }
}

// Funcion para validar el campo password
function validarPassword() {
    const password = passwordInput.value.trim();
    if (password === "") {
        passwordInput.classList.add("error");
        passwordInput.classList.remove("valido");
        errorPassword.textContent = "La contraseña no puede estar vacía.";
        errorPassword.classList.add("visible");
        return false;
    } else if (password.length < 8) {
        passwordInput.classList.add("error");
        passwordInput.classList.remove("valido");
        errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres.";
        errorPassword.classList.add("visible");
        return false;
    } else {
        passwordInput.classList.remove("error");
        passwordInput.classList.add("valido");
        errorPassword.classList.remove("visible");
        return true;
    }
}

// Listeners para validacion en blur
nombreInput.addEventListener("blur", validarNombre);
emailInput.addEventListener("blur", validarEmail);
passwordInput.addEventListener("blur", validarPassword);

// Listener para validacion en submit
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombreValido = validarNombre();
    const emailValido = validarEmail();
    const passwordValido = validarPassword();

    if (nombreValido && emailValido && passwordValido) {
        exitoDiv.classList.add("visible");
        form.style.display = "none";
    }
});