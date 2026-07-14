/*
  Ejercicio 8: Acceso con rol
  ============================
  Crear dos variables: `rol` y `estaActivo`.

  Un usuario puede acceder al panel si:
    - Su rol es "admin", Y
    - Su cuenta está activa

  const rol = "admin";
  const estaActivo = true;

  Resultado esperado:
    Acceso permitido.

*/

let rol = prompt("Ingrese su rol (admin, usuario, invitado):");
let estaActivo = confirm("¿Está su cuenta activa? (Aceptar = Sí, Cancelar = No)");

if (rol === "admin" && estaActivo) {
  console.log("Acceso permitido.");
} else {
  console.log("Acceso denegado.");
} 