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

let rol = prompt("Ingrese su rol: (admin o usuario)").toLowerCase();
let activo = prompt("¿Esta activo? (si o no)").toLowerCase();

if (rol != "admin" && rol != "usuario"){
  console.log("Rol Incorrecto. ");
} 
if (activo != "si" && activo != "no"){
  console.log("Estado Incorrecto");
}

if (activo == "si"){
  activo = true;
} else if (activo == "no"){
  activo = false;
}
if (rol == "admin" && activo == true){
  console.log("Acceso permitido. ");
} else {
  console.log("Acceso Denegado. ");
}

/* const rol = "admin";
const estaActivo = true;

if (rol === "admin" && estaActivo){
  console.log("Acceso permitido.");
} else {
  console.log("Acceso denegado.");
} */