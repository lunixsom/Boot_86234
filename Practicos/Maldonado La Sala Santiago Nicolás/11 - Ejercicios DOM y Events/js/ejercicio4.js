// Ejercicio 4: Contador con límite
//
// Abrí ejercicio4.html. Hay un contador con dos botones (+ y -) y un <span> que
// muestra el valor actual.
//
// Implementá la lógica completa del contador:
//
// 1. Al hacer click en "+" el valor aumenta de 1 en 1. Máximo: 10.
//    Al hacer click en "−" el valor disminuye de 1 en 1. Mínimo: 0.
//    TIP: guardá el valor actual en una variable, no lo leas del DOM cada vez.
//         Modificá la variable y luego actualizá el textContent del <span>.
//
// 2. Cuando el valor llega a 0, el botón "−" se deshabilita.
//    Cuando el valor llega a 10, el botón "+" se deshabilita.
//    TIP: boton.disabled = true  →  deshabilita el botón
//         boton.disabled = false →  lo vuelve a habilitar
//
// 3. En el <p#mensaje> mostrá:
//    - "Mínimo alcanzado" cuando el valor es 0
//    - "Máximo alcanzado" cuando el valor es 10
//    - "" (vacío) en cualquier otro caso
//
// 4. Permitir que el usuario configure el máximo.
//    Hacé que el límite sea una constante definida al inicio del archivo,
//    de forma que cambiar ese único valor ajuste todo el comportamiento.




const maximo = parseInt(prompt("ingrese el limite maximo:"));
const minimo = 0;
let valorActual = 0;

const spanValor = document.getElementById('valor');
const botonMas = document.getElementById('btn-sumar');
const botonMenos = document.getElementById('btn-restar');
const mensaje = document.getElementById('mensaje');

function actualizarContador() {
    spanValor.textContent = valorActual;
    botonMenos.disabled = valorActual <= minimo;
    botonMas.disabled = valorActual >= maximo;
    mensaje.textContent = valorActual === minimo ? "Minimo Alcanzado" : valorActual === maximo ? "Maximo Alcanzado" : "";
}   

valorActual = 0;
actualizarContador();

botonMas.addEventListener('click', () => {
    if (valorActual < maximo) {
        valorActual++;
        actualizarContador();
    }
});

botonMenos.addEventListener('click', () => {
    if (valorActual > minimo) {
        valorActual--;
        actualizarContador();
    }
});

