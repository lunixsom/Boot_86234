/*
  Ejercicio 13: Calculadora de envío
  =====================================
  Variables de base:
    const totalCompra = 45000;
    const esClientePremium = true;
    const pesoEnvio = 3;

  Calcular el costo de envío según estas reglas:
    - Si el cliente es premium                          → envío gratis
    - Si no es premium y la compra supera 50000         → envío gratis
    - Si no es premium y el peso es mayor a 5 kg        → "Envío: $2000"
    - En cualquier otro caso                            → "Envío: $800"

  Mostrar el resultado por consola.

  Requisitos técnicos:
    - Evaluar las condiciones en el orden correcto (de más específica a más general)
    - Usar && y || según corresponda
    - Usar template literal en los mensajes con costo
*/

let total = parseInt(prompt("Ingrese el total de su compra: "));
let clienteP = prompt("¿Es cliente premium? (si o no): ").toLowerCase();
let pesoE = parseInt(prompt("Ingrese el peso del envio (kg): "));

if (clienteP == "si"){
  clienteP = true;
} else if (clienteP == "no"){
  clienteP = false;
}

if (clienteP == true){
  console.log("Envio gratis.");
} else if (total > 50000){
  console.log("Envio gratis.");
} else if (pesoE > 5){
  console.log("Envio: $2000");
} else {
  console.log("Envio: $800");
}
