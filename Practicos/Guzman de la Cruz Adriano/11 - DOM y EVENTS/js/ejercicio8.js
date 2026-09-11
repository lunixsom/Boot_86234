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

const formulario = document.querySelector("#form-registro");

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const errorNombre= document.querySelector("#error-nombre");
const errorEmail = document.querySelector("#error-email");
const errorPassword = document.querySelector("#error-password");

const exito = document.querySelector("#exito");

function validarNombre(){
    const valor = nombre.value.trim();
    console.log(valor)

/*     nombre.classList.remove("error");
    errorNombre.textContent= "El nombre no puede estar vacio";
    errorNombre.classList.add("visible");
    return false; */

    if(valor.length<3){
        nombre.classList.add("error");
        errorNombre.textContent = "El nombre debe tener al menos 3 caracteres";
        errorNombre.classList.add("visible");
        return false;
    }
    
    nombre.classList.add("valido");
    errorNombre.textContent= "";
    errorNombre.classList.remove("visible");
    return true;
}

function validarEmail(){
    const valor = email.value.trim();
   

    email.classList.remove("error");
    email.classList.remove("valido");

    if(valor ===""){
        email.classList.add("error");
        errorEmail.textContent="El email no puede estar vacio";
        errorEmail.classList.add("visible");
        return false;
    }

    if(!valor.includes("@") || !valor.includes(".")){
        email.classList.add("error");
        errorEmail.textContent = "Ingresa un email valido";
        errorEmail.classList.add("visible");
        return false;
    }

    email.classList.add("valido");
    errorEmail.textContent = "";
    errorEmail.classList.remove("visible");

    return true;
}

function validarPassword(){
    const valor = password.value;
    password.classList.remove("error");
    password.classList.remove("valido");

    if(valor === ""){
        password.classList.add("error");
        errorPassword.textContent = "La contraseña no puede estar vacia";
        errorPassword.classList.add("visible");
        return false;
    }

    if(valor.length < 8){
        password.classList.add("error");
        errorPassword.textContent = "La contraseña debe contener 8 carecteres";
        errorPassword.classList.add("visible");
        return false;
    };

    password.classList.add("valido");
    errorPassword.textContent="";
    errorPassword.classList.remove("visible");
    return true;
}


nombre.addEventListener("blur",validarNombre);
email.addEventListener("blur",validarEmail);
password.addEventListener("blur",validarPassword);

formulario.addEventListener("submit",function(event){
    event.preventDefault();

    const nombreValido = validarNombre();
    const emailValido = validarEmail();
    const passwordValido = validarPassword();

    if(nombreValido && emailValido && passwordValido){
        exito.classList.add("visible");
        formulario.style.display= "none";
    }
});


