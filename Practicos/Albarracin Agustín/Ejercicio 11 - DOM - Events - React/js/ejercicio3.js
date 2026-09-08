const productos = document.querySelectorAll(".producto");

productos.forEach(producto => {
  const id = producto.dataset.id;
  const categoria = producto.dataset.categoria;
  const precio = producto.dataset.precio;
  console.log(`id: ${id} | categoría: ${categoria} | precio: ${precio}`);
});

const productosArray = Array.from(productos);
const electronicos = productosArray.filter(producto => producto.dataset.categoria === "electronica");

const resultado = document.querySelector("#resultado");
resultado.textContent = `Hay ${electronicos.length} productos de electrónica`;

let productoMasCaro = null;
let precioMaximo = 0;

productosArray.forEach(producto => {
  const precio = Number(producto.dataset.precio);
  if (precio > precioMaximo) {
    precioMaximo = precio;
    productoMasCaro = producto;
  }
});

if (productoMasCaro) {
  productoMasCaro.classList.add("destacado");
}
