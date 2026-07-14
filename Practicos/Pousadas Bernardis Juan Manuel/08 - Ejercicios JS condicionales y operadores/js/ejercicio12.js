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

let l1 = parseInt(prompt("Ingrese el primer lado: "));
let l2 = parseInt(prompt("Ingrese el segundo lado: "));
let l3 = parseInt(prompt("Ingrese el tercer lado: "));

if (l1 == l2 && l2 == l3){
  console.log("Equilatero");
} else if (l1 == l2 || l1 == l3 || l2 == l3){
  console.log("Isosceles");
} else {
  console.log("Escaleno");
}
