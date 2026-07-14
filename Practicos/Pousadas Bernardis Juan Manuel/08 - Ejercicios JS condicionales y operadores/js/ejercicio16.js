/*
  Ejercicio 16: Calculadora con operador
  ========================================
  Pedir al usuario que ingrese 2 números y un operador matemático, luego mostrar el resultado de la operación.
  Crear tres variables: `numero1`, `operador` y `numero2`.

  Realizar la operación matemática indicada por `operador` y mostrar el resultado.

  const numero1 = 10;
  const operador = "*";
  const numero2 = 5;

  Resultado esperado:
    10 * 5 = 50

  Operadores posibles: "+", "-", "*", "/"

  Si el operador no existe:
    Operador no reconocido.

  Si el operador es "/" y numero2 es 0:
    No se puede dividir por cero.

  Requisitos técnicos:
    - Usar switch / case para seleccionar la operación
    - Verificar la división por cero dentro del case "/"
    - Usar template literal para mostrar el resultado: "10 * 5 = 50"
*/

let num1 = parseInt(prompt("Ingrese el primer numero: "));
let operador = prompt("Ingrese el operador (+, -, *, /): ");
let num2 = parseInt(prompt("Ingrese el segundo numero: "));

switch (operador) {
  case "+":
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  case "-":
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  case "*":
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    break;
  case "/":
    if (num2 == 0){
      console.log("No se puede dividir por cero.");
    } else {
      console.log(`${num1} / ${num2} = ${num1 / num2}`);
    }
    break;
  default:
    console.log("Operador no reconocido.");
}
