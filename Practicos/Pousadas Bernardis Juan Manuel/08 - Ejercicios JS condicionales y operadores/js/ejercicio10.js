/*
  Ejercicio 10: Aprobación de préstamo
  =====================================
  Variables de base:
    const ingresos = 80000;
    const tieneDeudas = false;
    const antiguedadLaboral = 3;

  Un préstamo se aprueba si:
    - Los ingresos son mayores a 50000, Y
    - No tiene deudas (!tieneDeudas), Y
    - Tiene al menos 2 años de antigüedad laboral

  Mostrar por consola si el préstamo fue aprobado o rechazado.

  Realizar pruebas con distintos valores de las variables para verificar que la lógica funciona correctamente.
*/

let ingresos = parseInt(prompt("Ingrese sus ingresos: "));
let deudas = prompt("¿Tiene deudas? (si o no) ").toLowerCase();
let antiguedad = parseInt(prompt("Ingrese su antiguedad: "));

if (deudas == "si"){
  deudas = true;
} else if (deudas == "no"){
  deudas = false;
}

if (ingresos >= 50000 && deudas == false && antiguedad >= 2){
  console.log("Prestamo aprobado.")
} else {
  console.log("Prestamo rechazado.")
}