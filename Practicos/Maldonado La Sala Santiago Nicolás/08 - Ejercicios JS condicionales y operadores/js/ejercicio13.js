
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


const totalCompra = 45000;
const esClientePremium = false;
const pesoEnvio = 6;

const costoEnvioAlto = 2000;
const costoEnvioBase = 800;
 
if (esClientePremium === true){

  console.log("Tenes envío gratis");

} else if (!esClientePremium && totalCompra > 50000){

  console.log("Tenes envío gratis");

} else if (!esClientePremium && pesoEnvio > 5){

  console.log(`Costo de envío $${costoEnvioAlto}`)

} else {

  console.log(`Costo de envio $${costoEnvioBase}`)

}