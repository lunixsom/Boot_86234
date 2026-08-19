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

const crearSaludo = (nombre, idioma) =>{
    switch(idioma){
        case "es": 
            console.log( `Hola, ${nombre}`);
            break;
        
        case "en":
            console.log(`Hello, ${nombre}`);
            break;

        case "pt":
            console.log( `Ola, ${nombre}`);
            break;

        default: 
            console.log( `Hi, ${nombre}`);
    }
};

crearSaludo("Sofia");
crearSaludo("John","en");
crearSaludo("Pepito","es");
crearSaludo("Hipolito", "pt");
crearSaludo("Juan","fr");
