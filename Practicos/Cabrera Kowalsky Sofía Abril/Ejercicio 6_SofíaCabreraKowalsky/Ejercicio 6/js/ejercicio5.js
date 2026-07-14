/*
  Ejercicio 5: Día de la semana
  ==============================
  Pedir al usuario que ingrese un valor de día entre 1 y 7 y almacenarla en una variable `numeroDia`.

  Mostrar el nombre del día correspondiente:
    - 1 → "Lunes"
    - 2 → "Martes"
    - 3 → "Miércoles"
    - 4 → "Jueves"
    - 5 → "Viernes"
    - 6 → "Sábado"
    - 7 → "Domingo"
    - Otro número → "Día inválido"

  Si el usuario ingresa 3, el resultado esperado es:

  Resultado esperado:
    Miércoles

  Requisitos técnicos:
    - Usar switch / case con default
    - Cubrir los 7 días más el caso default
*/
let numeroDia = parseInt(prompt("Ingresa un número del 1 al 7"));

switch(numeroDia) {
  case 1:
    alert("Lunes"); 
    break;
  
  case 2:
    alert("Martes"); 
    break;
  
  case 3:
    alert("Miércoles"); 
    break;
  
  case 4:
    alert("Jueves"); 
    break;
  
  case 5:
    alert("Viernes"); 
    break;
  
  case 6:
    alert("Sábado"); 
    break;
  
  case 7:
    alert("Domingo"); 
    break;
  
    default:
    alert("Número inválido");

  }