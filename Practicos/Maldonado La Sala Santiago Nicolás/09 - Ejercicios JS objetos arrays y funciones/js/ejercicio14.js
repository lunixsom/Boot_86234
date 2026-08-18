// Ejercicio 14: Parámetros por defecto
//
// Creá una función llamada "crearSaludo" que reciba:
//   - nombre (requerido)
//   - idioma (opcional, por defecto "es")
//
// La función debe retornar:
//   - "es" → "Hola, [nombre]!"
//   - "en" → "Hello, [nombre]!"
//   - "pt" → "Olá, [nombre]!"
//   - cualquier otro → "Hi, [nombre]!"
//
// Llamala así y mostrá cada resultado:
//   crearSaludo("Lucía")          → usa el idioma por defecto
//   crearSaludo("John", "en")
//   crearSaludo("Pedro", "pt")
//   crearSaludo("Ali", "fr")

function crearSaludo(nombre, idioma = "es") {
    return idioma === "es" ? `Hola, ${nombre}!` :
           idioma === "en" ? `Hello, ${nombre}!` :
           idioma === "pt" ? `Olá, ${nombre}!` :
           `Hi, ${nombre}!`;
}

crearSaludo("Lucía");
crearSaludo("John", "en");
crearSaludo("Pedro", "pt");
crearSaludo("Ali", "fr");

console.log(crearSaludo("Lucía"));
console.log(crearSaludo("John", "en"));
console.log(crearSaludo("Pedro", "pt"));
console.log(crearSaludo("Ali", "fr"));