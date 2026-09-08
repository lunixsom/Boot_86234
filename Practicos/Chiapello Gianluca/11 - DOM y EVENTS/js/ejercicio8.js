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

const inputNombre = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');

const errorNombre = document.querySelector('#error-nombre');
const errorEmail = document.querySelector('#error-email');
const errorPassword = document.querySelector('#error-password');

const form = document.querySelector('#form-registro');
const exito = document.querySelector('#exito');


function validarNombre() {
    const valor = inputNombre.value.trim();

    if (valor === '' || valor.length < 3) {
        inputNombre.classList.add('error');
        inputNombre.classList.remove('valido');
        errorNombre.textContent = 'El nombre debe tener al menos 3 caracteres';
        errorNombre.classList.add('visible');
        return false;
    } else {
        inputNombre.classList.remove('error');
        inputNombre.classList.add('valido');
        errorNombre.classList.remove('visible');
        return true;
    }
}

function validarEmail() {
    const valor = inputEmail.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (valor === '' || !regexEmail.test(valor)) {
        inputEmail.classList.add('error');
        inputEmail.classList.remove('valido');
        errorEmail.textContent = 'Ingresá un email válido';
        errorEmail.classList.add('visible');
        return false;
    } else {
        inputEmail.classList.remove('error');
        inputEmail.classList.add('valido');
        errorEmail.classList.remove('visible');
        return true;
    }
}

function validarPassword() {
    const valor = inputPassword.value;

    if (valor === '' || valor.length < 8) {
        inputPassword.classList.add('error');
        inputPassword.classList.remove('valido');
        errorPassword.textContent = 'La contraseña debe tener al menos 8 caracteres';
        errorPassword.classList.add('visible');
        return false;
    } else {
        inputPassword.classList.remove('error');
        inputPassword.classList.add('valido');
        errorPassword.classList.remove('visible');
        return true;
    }
}


inputNombre.addEventListener('blur', validarNombre);
inputEmail.addEventListener('blur', validarEmail);
inputPassword.addEventListener('blur', validarPassword);


form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nombreOk = validarNombre();
    const emailOk = validarEmail();
    const passwordOk = validarPassword();

    if (nombreOk && emailOk && passwordOk) {
        form.style.display = 'none';
        exito.classList.add('visible');
    }
});