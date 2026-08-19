// Ejercicio 12: Funciones que reciben y retornan objetos
//
// Creá estas dos funciones:
//
//   1. crearUsuario(nombre, edad, email)
//      Retorna un objeto con esas tres propiedades más: activo: true
//
//   2. presentarUsuario(usuario)
//      Recibe un objeto usuario y retorna el string:
//      "[nombre] ([edad] años) — [email]"
//
// Probá con:
//   let u1 = crearUsuario("Camila", 25, "camila@mail.com");
//   let u2 = crearUsuario("Rodrigo", 31, "rodrigo@mail.com");
//
// Resultado esperado:
//   { nombre: 'Camila', edad: 25, email: 'camila@mail.com', activo: true }
//   Camila (25 años) — camila@mail.com
//   Rodrigo (31 años) — rodrigo@mail.com

function crearUsuario(nombre,edad,email){
    const usuario = {
        nombre: nombre,
        edad: edad,
        email: email,
        activo: true
    };

    return usuario;
};

function presentarUsuario(usuario){
    return `${usuario.nombre}, ${usuario.edad}, ${usuario.email}`;
};

let u1= crearUsuario("Hipolito", 22, "hvernengo@gmail.com");

console.log(presentarUsuario(u1));


