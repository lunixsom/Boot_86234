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

crearSaludo = (nombre, idioma = "es") => {
  if (idioma === "es") {
    return `Hola, ${nombre}!`
  } else if (idioma === "en") {
    return `Hello, ${nombre}!`
  } else if (idioma === "pt") {
    return `Olá, ${nombre}!`
  } else {
    return `Hi, ${nombre}!`
  }
}

console.log(crearSaludo("Lucía"))
console.log(crearSaludo("John", "en"))
console.log(crearSaludo("Pedro", "pt"))
console.log(crearSaludo("Ali", "fr"))