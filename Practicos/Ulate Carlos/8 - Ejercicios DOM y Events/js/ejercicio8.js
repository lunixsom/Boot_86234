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

const formu = document.querySelector('#form-registro')
const mail = document.querySelector('#email')

const nomb = document.querySelector('#nombre')

const pass = document.querySelector('#password')
const errorNomb = document.querySelector('#error-nombre')

const errorMail = document.querySelector('#error-email')

const errorPass = document.querySelector('#error-password')

const exito = document.querySelector('#exito')

function validNombre(){
    const valor = nomb.value.trim()

    if (valor === '' || valor.length < 3 ) {
        nomb.classList.remove('valido')
        nomb.classList.add('error')
        errorNomb.classList.add('visible')
        return false;
    } else {
        nomb.classList.remove('error')
        nomb.classList.add('valido')
        errorNomb.classList.remove('visible')
        return true;
    }
}

function validEmail(){
    const valor = mail.value.trim()

    if (valor === '' || !valor.includes ('@') || !valor.includes('.')){
        mail.classList.remove('valido')
        mail.classList.add('error')
        errorMail.classList.add('visible')
        return false;
    } else {
        mail.classList.remove('error')
        mail.classList.add('valido')
        errorMail.classList.remove('visible')
        return true;
    }
}

function validPass(){
    const valor = pass.value.trim()

    if (valor === '' || valor.length < 8){
        pass.classList.remove('valido')
        pass.classList.add('error')
        errorPass.classList.add('visible')
        return false;
    } else {
        pass.classList.remove('error')
        pass.classList.add('valido')
        errorPass.classList.remove('visible')
        return true;
    }
}

formu.addEventListener('submit', event => {
    event.preventDefault();
    const esValidNomb = validNombre()
    const esValidMail = validEmail()
    const esValidPass = validPass()

    if (esValidNomb && esValidMail && esValidPass){
        exito.classList.add('visible')
        formu.style.display = 'none'
    }
})


nomb.addEventListener('blur', validNombre)
mail.addEventListener('blur', validEmail)
pass.addEventListener('blur', validPass)

