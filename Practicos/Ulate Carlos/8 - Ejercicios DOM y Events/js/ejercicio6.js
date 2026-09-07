// Ejercicio 6: Acordeón
//
// Abrí ejercicio6.html. Hay 4 preguntas frecuentes. Cada una tiene:
//   - Un <button class="acordeon-btn"> con el título de la pregunta
//   - Un <div class="acordeon-contenido"> con la respuesta (oculto por defecto)
//
// Implementá el comportamiento del acordeón:
//
// 1. Al hacer click en un botón:
//    a) Si el panel estaba CERRADO → abrilo (agregá clase "abierto" al botón Y al contenido)
//    b) Si el panel estaba ABIERTO → cerralo (quitá la clase "abierto" de ambos)
//    TIP: classList.toggle("abierto") maneja los dos casos en una sola línea.
//         Aplicalo tanto al botón como al contenido hermano.
//
// 2. COMPORTAMIENTO EXCLUSIVO (solo uno abierto a la vez):
//    Antes de abrir un panel, cerrá todos los demás.
//    TIP: seleccioná todos los botones y contenidos con querySelectorAll,
//         recorrelos con forEach y quitales la clase "abierto" a todos.
//         Después aplicá toggle solo al clickeado y su contenido.
//
// Para navegar del botón clickeado a su contenido hermano:
//   TIP: el contenido está justo después del botón dentro del mismo padre.
//        Podés acceder con: boton.nextElementSibling


const btnAcord = document.querySelectorAll('.acordeon-btn')

const itmAcord = document.querySelectorAll('.acordeon-contenido')

function toggleAcordeon() {
    const estabaAbierto = this.classList.contains('abierto')

    btnAcord.forEach((actv) => {
        actv.classList.remove('abierto')
    })
    itmAcord.forEach((activ) => {
        activ.classList.remove('abierto')
    })

    if (!estabaAbierto) {
        this.classList.toggle('abierto')
        this.nextElementSibling.classList.toggle('abierto')
    }
}

btnAcord.forEach((boton) => {
    boton.addEventListener('click', toggleAcordeon)

})