/*
  Ejercicio 12: Clasificación de triángulo
  ==========================================
  Crear tres variables: `lado1`, `lado2`, `lado3`.

  Clasificar el triángulo según sus lados:
    - Los tres iguales          → "Equilátero"
    - Exactamente dos iguales   → "Isósceles"
    - Los tres diferentes       → "Escaleno"

  const lado1 = 5;
  const lado2 = 5;
  const lado3 = 8;

  Resultado esperado:
    Isósceles

  Requisitos técnicos:
    - Verificar primero el equilátero (caso más restrictivo)
    - Verificar el isósceles con || (cualquier par de lados puede ser igual)
    - Usar === para comparar los lados
*/

const lado1 = 1;
const lado2 = 5;
const lado3 = 4;


if (lado1 === lado2 && lado1 === lado3){

  console.log("El triangulo es equilátero");

} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){

  console.log("El triangulo es isóseles");

} else {

  console.log("El triangulo es escaleno");

}