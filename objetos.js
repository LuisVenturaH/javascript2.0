
const productos = [
    {
        nombre: "bicicleta",
        stock: 2,
        categoria: "deporte",
        precio: 1000,
        valoracion: 4.5
},

{
        nombre: "xbox",
        stock: 20,
        categoria: "videojuegos",
        precio: 350,
        valoracion: 4
},

{
        nombre: "ps5",
        stock: 1,
        categoria: "videojuegos",
        precio: 1499,
        valoracion: 4.2
    },
]

// Muestra el nombre del producto y su precio
// console.log(productos[i].nombre, productos[i].precio)

 // Calcular la media de las de las valoraciones array
//  let totalValoracion = 0;
//  for (i = 0; i < productos.length; i++ ) {
//     totalValoracion += productos[i].valoracion;   
//  }
//     console.log(totalValoracion / productos.length);


// Calcular la media de los precios de los productos en el array
// let totalPrecios = 0;
// for (i = 0; i < productos.length; i++ ) {
//    totalPrecios += productos[i].precio;  
// }
//    console.log(totalPrecios / productos.length);


// Funcion que devuelva el nombre y el stock del producto mas caro

function productoCaro(productos) {
let precioMayor = 0;    
    for (i = 0; i < productos.length; i++) {
        if (productos[i].precio > precioMayor) {
            precioMayor = productos[i].precio; 
         } 
        } 
    for(i=0; i <productos.length; i++) {
        if (productos[i].precio == precioMayor) {
            return `El producto mas caro es ${productos[i].nombre} y tiene un stock de ${productos[i].stock}`
        }
    } return "No se encuentra el producto"
}
     console.log(productoCaro(productos));

// Funcion que reciba un listado de productos y una categoria, debe devolver
// array con los productos que son de la categoria del parametro de entrada
// Ejemplo: filtrarPorCategoria(productos, "deporte"); debe devolver producto con nombre bicicleta