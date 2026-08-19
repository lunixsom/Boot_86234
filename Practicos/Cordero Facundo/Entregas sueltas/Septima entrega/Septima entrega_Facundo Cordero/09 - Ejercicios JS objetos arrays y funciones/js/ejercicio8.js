// Ejercicio 8: Modificar un objeto
//
// Partí de este objeto producto con estas propiedades:
//
//     name         => "Auriculares",
//     price        => 15000,
//     stock        => 10,
//     active       => true,
//     descripción  => "Auriculares inalámbricos con cancelación de ruido"
//
// Realizá estas operaciones EN ORDEN y mostrá el objeto después de cada una:
//   1. Cambiá el precio a 12000
//   2. Reducí el stock en 3 unidades
//   3. Agregá una nueva propiedad "marca" con valor "Sony"
//   4. Eliminá la propiedad "active"
//   5. Agregar una nueva propiedad "category" con valor "Electrónica"
//   6. Agregar una propiedad "specs" que será otro objeto con estas propiedades:
//      color: "Negro", weight: "200g", wireless: true, batteryLife: "20h"
//   7. Mostrar el valor de la propiedad "batteryLife" dentro de specs
//   8. Mostrar el valor de la propiedad "color" dentro de specs
//
// Resultado esperado:
//   1. { name: 'Auriculares', price: 12000, stock: 10, active: true, descripción: 'Auriculares inalámbricos con cancelación de ruido' }
//   2. { name: 'Auriculares', price: 12000, stock: 7, active: true, descripción: 'Auriculares inalámbricos con cancelación de ruido' }
//   3. { name: 'Auriculares', price: 12000, stock: 7, active: true, descripción: 'Auriculares inalámbricos con cancelación de ruido', marca: 'Sony' }
//   4. { name: 'Auriculares', price: 12000, stock: 7, descripción: 'Auriculares inalámbricos con cancelación de ruido', marca: 'Sony' }
//   5. { name: 'Auriculares', price: 12000, stock: 7, descripción: 'Auriculares inalámbricos con cancelación de ruido', marca: 'Sony', category: 'Electrónica' }
//   6. { name: 'Auriculares', price: 12000, stock: 7, descripción: 'Auriculares inalámbricos con cancelación de ruido', marca: 'Sony', category: 'Electrónica', specs: { color: 'Negro', weight: '200g', wireless: true, batteryLife: '20h' } }
//   7. "20h"
//   8. "Negro" 

// TIP: para eliminar una propiedad usá: delete objeto.propiedad

const producto = {
    name: "Auriculares",
    price: 15000,
    stock: 10,
    active: true,
    descripción: "Auriculares inalámbricos con cancelación de ruido"
};

producto.price = 12000;
console.log("1.", producto);

producto.stock -= 3; 
console.log("2.", producto);

producto.marca = "Sony";
console.log("3.", producto);

delete producto.active;
console.log("4.", producto);

producto.category = "Electrónica";
console.log("5.", producto);

producto.specs = {
    color: "Negro",
    weight: "200g",
    wireless: true,
    batteryLife: "20h"
};
console.log("6.", producto);

console.log("7.", producto.specs.batteryLife);

console.log("8.", producto.specs.color);