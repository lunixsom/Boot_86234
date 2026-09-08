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


const nombreHTMl = document.getElementById("nombre");
const emailHTML = document.getElementById("email");
const passwordHTML = document.getElementById("password");
const mensajeErrorNombreHTML = document.getElementById("error-nombre");
const mensajeErrorEmailHTML = document.getElementById("error-email");
const mensajeErrorPasswordHTML = document.getElementById("error-password");
const formularioHTML = document.querySelector("#form-registro");
const exitoHTML = document.getElementById("exito");


nombreHTMl.addEventListener("blur",() =>{
    const nombre = nombreHTMl.value.trim();

    if(nombre === ''){
        nombreHTMl.classList.remove("valido");
        nombreHTMl.classList.add("error");
        mensajeErrorNombreHTML.textContent = "No puede estar vacío";
        mensajeErrorNombreHTML.classList.add("visible");
    }else if (nombre.length < 3){
        nombreHTMl.classList.remove("valido");
        nombreHTMl.classList.add("error");
        mensajeErrorNombreHTML.textContent = "Debe tener al menos 3 caracteres";
        mensajeErrorNombreHTML.classList.add("visible");
    }else{
        nombreHTMl.classList.remove("error");
        nombreHTMl.classList.add("valido");
        mensajeErrorNombreHTML.textContent = '';
    }
});

emailHTML.addEventListener("blur", () =>{
    const email = emailHTML.value.trim();

    if(email === ''){
        emailHTML.classList.remove("valido");
        emailHTML.classList.add("error");
        mensajeErrorEmailHTML.textContent = "No puede estar vacio";
        mensajeErrorEmailHTML.classList.add("visible");
    }else if(!email.includes("@") || !email.includes(".")){
        emailHTML.classList.add("error");
        emailHTML.classList.remove("valido");
        mensajeErrorEmailHTML.textContent = "Debe contener '@' y '.'";
        mensajeErrorEmailHTML.classList.add("visible");
    }else{
        emailHTML.classList.remove("error");
        emailHTML.classList.add("valido");
        mensajeErrorEmailHTML.textContent = "";
    }
})

passwordHTML.addEventListener("blur", () =>{
    const password = passwordHTML.value.trim();

    if(password === ''){
        passwordHTML.classList.remove("valido");
        passwordHTML.classList.add("error");
        mensajeErrorPasswordHTML.textContent = "No puede estar vacio";
        mensajeErrorPasswordHTML.classList.add("visible");
    } else if(password.length < 8){
        passwordHTML.classList.remove("valido");
        passwordHTML.classList.add("error");
        mensajeErrorPasswordHTML.textContent = "Debe contener al menos 8 caracteres";
        mensajeErrorPasswordHTML.classList.add("visible");
    } else{
        passwordHTML.classList.remove("error");
        passwordHTML.classList.add("valido");
        mensajeErrorPasswordHTML.textContent = "";
    }
})

formularioHTML.addEventListener("submit", (event) =>{
    event.preventDefault();

    const email = emailHTML.value.trim();
    const nombre = nombreHTMl.value.trim();
    const password = passwordHTML.value.trim();

    let formulario = true;

    if(nombre === '' || nombre.length < 3){
        formulario = false;
    } 

    if(email === '' || !email.includes("@") || !email.includes(".")){
        formulario = false;
    }

    if(password === '' || password.length < 8){
        formulario = false;
    }

    if(formulario){
        exitoHTML.classList.add("visible");
        formularioHTML.style.display = "none";
    }

})





