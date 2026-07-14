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
 const rol = prompt("Ingrese su rol: ").toLowerCase();
  const estaActivo = confirm("¿Está activo? (Aceptar = Sí, Cancelar = No)");

  if (rol === "admin" && estaActivo) {
    console.log("Acceso permitido.");
  } else {
    console.log("Acceso denegado.");
  }