// Ejercicio 3: dataset — leer y escribir atributos data-*
//
// Abrí ejercicio3.html. El HTML tiene 4 tarjetas de productos.
// Cada tarjeta tiene atributos data-id, data-categoria y data-precio.
//
// 1. Seleccioná TODOS los elementos con clase "producto" usando querySelectorAll.
//    Recorrelos con forEach y mostrá en consola, para cada uno:
//       id: 1 | categoría: electronica | precio: 45000
//    TIP: para leer un atributo data-* usás: elemento.dataset.nombreAtributo
//         data-categoria  →  elemento.dataset.categoria
//         data-precio     →  elemento.dataset.precio
//
// 2. Usando filter (sobre un array convertido con Array.from o spread),
//    encontrá todos los productos de categoría "electronica".
//    Mostrá cuántos hay en el <div#resultado>:
//       "Hay 2 productos de electrónica"
//    TIP: Array.from(nodelist) convierte la NodeList en un array real
//         para poder usar filter, map, etc. O también: [...nodelist] hace exactamente lo mismo usando spread.
//
// 3. Encontrá el producto más caro leyendo data-precio de cada tarjeta.
//    Agregale la clase "destacado" (que ya está definida en el CSS).
//    TIP: los valores de dataset siempre son strings — necesitás convertirlos
//         a número con Number() o parseFloat() antes de comparar


const cardProducto = document.querySelectorAll(".producto");


cardProducto.forEach((atributo) =>{
    console.log(`id: ${atributo.dataset.id} | categoria: ${atributo.dataset.categoria} | precio: ${atributo.dataset.precio}`);
})



const arrayNuevo = [...cardProducto];
const resultadoHTML = document.getElementById("resultado");

const productosElectronica = arrayNuevo.filter((producto) =>{
    if(producto.dataset.categoria === "electronica"){
        return true;
    }
});

resultadoHTML.textContent = `Hay ${productosElectronica.length} productos de electronica `;


const productoMasCaro = [...cardProducto].reduce((mayor,producto) =>{
    if (Number(producto.dataset.precio) > Number(mayor.dataset.precio)){
        return producto;
    }

    return mayor;
});

productoMasCaro.classList.add("destacado");