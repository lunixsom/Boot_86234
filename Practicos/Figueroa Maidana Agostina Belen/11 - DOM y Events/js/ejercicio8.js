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


const inputNombreHTML = document.querySelector("#nombre");
const errorNombreHTML = document.querySelector("#error-nombre");
const inputEmailHTML = document.querySelector("#email");
const errorEmailHTML = document.querySelector("#error-email");
const inputPasswordHTML = document.querySelector("#password");
const errorPasswordHTML = document.querySelector("#error-password");
const formularioHTML = document.querySelector("#form-registro");
const exitoHTML = document.querySelector("#exito");


inputNombreHTML.addEventListener("blur", () => {

    if (inputNombreHTML.value === "") {
        inputNombreHTML.classList.remove("valido");
        inputNombreHTML.classList.add("error");
        errorNombreHTML.textContent = "El nombre no puede estar vacío";
        errorNombreHTML.classList.add("visible");
    } else if (inputNombreHTML.value.length < 3) {
        inputNombreHTML.classList.remove("valido");
        inputNombreHTML.classList.add("error");
        errorNombreHTML.textContent = "El nombre debe tener al menos 3 caracteres";
        errorNombreHTML.classList.add("visible");
    } else {
        inputNombreHTML.classList.add("valido");
        inputNombreHTML.classList.remove("error");
        errorNombreHTML.textContent = "";
        errorNombreHTML.classList.remove("visible");
    }
    
})

inputEmailHTML.addEventListener("blur", () => {

    if (inputEmailHTML.value === "") {
        inputEmailHTML.classList.remove("valido");
        inputEmailHTML.classList.add("error");
        errorEmailHTML.textContent = "El email no puede estar vacío";
        errorEmailHTML.classList.add("visible");
    } else if (!inputEmailHTML.value.includes("@") || !inputEmailHTML.value.includes(".")){
        inputEmailHTML.classList.remove("valido");
        inputEmailHTML.classList.add("error");
        errorEmailHTML.textContent = "El email debe contener @ y .";
        errorEmailHTML.classList.add("visible");
    }else {
        inputEmailHTML.classList.add("valido");
        inputEmailHTML.classList.remove("error");
        errorEmailHTML.textContent = "";
        errorEmailHTML.classList.remove("visible");
    }
    
})

inputPasswordHTML.addEventListener("blur", () => {

    if (inputPasswordHTML.value === "") {
        inputPasswordHTML.classList.remove("valido");
        inputPasswordHTML.classList.add("error");
        errorPasswordHTML.textContent = "La password no puede estar vacía";
        errorPasswordHTML.classList.add("visible");
    } else if (inputPasswordHTML.value.length < 8) {
        inputPasswordHTML.classList.remove("valido");
        inputPasswordHTML.classList.add("error");
        errorPasswordHTML.textContent = "La password debe tener al menos 8 caracteres";
        errorPasswordHTML.classList.add("visible");
    } else {
        inputPasswordHTML.classList.add("valido");
        inputPasswordHTML.classList.remove("error");
        errorPasswordHTML.textContent = "";
        errorPasswordHTML.classList.remove("visible");
    }
    
})

formularioHTML.addEventListener("submit", (evento) => {

    evento.preventDefault();

    let formularioValido = true;

    if (inputNombreHTML.value === "") {
        inputNombreHTML.classList.remove("valido");
        inputNombreHTML.classList.add("error");
        errorNombreHTML.textContent = "El nombre no puede estar vacío";
        errorNombreHTML.classList.add("visible");
        formularioValido = false;
    } else if (inputNombreHTML.value.length < 3) {
        inputNombreHTML.classList.remove("valido");
        inputNombreHTML.classList.add("error");
        errorNombreHTML.textContent = "El nombre debe tener al menos 3 caracteres";
        errorNombreHTML.classList.add("visible");
        formularioValido = false;
    } else {
        inputNombreHTML.classList.add("valido");
        inputNombreHTML.classList.remove("error");
        errorNombreHTML.textContent = "";
        errorNombreHTML.classList.remove("visible");
    }

        if (inputEmailHTML.value === "") {
        inputEmailHTML.classList.remove("valido");
        inputEmailHTML.classList.add("error");
        errorEmailHTML.textContent = "El email no puede estar vacío";
        errorEmailHTML.classList.add("visible");
        formularioValido = false;
    } else if (!inputEmailHTML.value.includes("@") || !inputEmailHTML.value.includes(".")){
        inputEmailHTML.classList.remove("valido");
        inputEmailHTML.classList.add("error");
        errorEmailHTML.textContent = "El email debe contener @ y .";
        errorEmailHTML.classList.add("visible");
        formularioValido = false;
    }else {
        inputEmailHTML.classList.add("valido");
        inputEmailHTML.classList.remove("error");
        errorEmailHTML.textContent = "";
        errorEmailHTML.classList.remove("visible");
    }

    if (inputPasswordHTML.value === "") {
        inputPasswordHTML.classList.remove("valido");
        inputPasswordHTML.classList.add("error");
        errorPasswordHTML.textContent = "La password no puede estar vacía";
        errorPasswordHTML.classList.add("visible");
        formularioValido = false;
    } else if (inputPasswordHTML.value.length < 8) {
        inputPasswordHTML.classList.remove("valido");
        inputPasswordHTML.classList.add("error");
        errorPasswordHTML.textContent = "La password debe tener al menos 8 caracteres";
        errorPasswordHTML.classList.add("visible");
        formularioValido = false;
    } else {
        inputPasswordHTML.classList.add("valido");
        inputPasswordHTML.classList.remove("error");
        errorPasswordHTML.textContent = "";
        errorPasswordHTML.classList.remove("visible");
    }

    if (formularioValido) {
        exitoHTML.classList.add("visible");
        formularioHTML.classList.add("oculto");
        inputNombreHTML.classList.remove("valido");
        inputEmailHTML.classList.remove("valido");
        inputPasswordHTML.classList.remove("valido");
        formularioHTML.reset();
    }

});