/*
  Ejercicio 15: Validación de formulario
  ========================================
  Variables de base:
    const nombre = "Usuario";
    const email = "user@mail.com";
    const password = "abc123";
    const passwordConfirm = "abc123";
    const aceptaTerminos = true;

  Un formulario es válido si:
    - El nombre NO está vacío (nombre !== "")
    - El email contiene "@" → usar email.includes("@")
    - La contraseña y la confirmación coinciden (son iguales)
    - El usuario aceptó los términos

  Mostrar si el formulario es válido o no.

  Requisitos técnicos:
    - Usar && para combinar las 4 condiciones
    - Guardar el resultado en una variable booleana `formularioValido`
    - Mostrar el mensaje usando esa variable
*/

let nombre = prompt("Ingrese su nombre: ");
let email = prompt("Ingrese su email: ");
let password = prompt("Ingrese su contrasena: ");
let passwordConfirm = prompt("Confirme su contrasena: ");
let aceptaTerminos = prompt("¿Acepta los terminos? (si o no): ").toLowerCase();

if (aceptaTerminos == "si"){
  aceptaTerminos = true;
} else {
  aceptaTerminos = false;
}

let formularioValido = nombre != "" && email.includes("@") && password == passwordConfirm && aceptaTerminos == true;

if (formularioValido){
  console.log("Formulario valido.");
} else {
  console.log("Formulario invalido.");
}
