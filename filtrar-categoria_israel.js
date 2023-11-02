/**
 * Funcion que recibe un listado de productos y una categoria, debe devolver
 * array con los productos que son de la categoria del parametro d entrada.
 * 
 * Ejemplo
 * 
 * filtrarPorCategoria(productos, "deporte"); debe devolver producto con nombre "bicicleta";
 */

const productos = [
    {
        nombre: "bicileta",
        stock: 2,
        categoria: "deporte",
        precio: 1000,
        valoracion: 4.8,
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
        precio: 499,
        valoracion: 4.2
    }
];

function filtrarPorCategoria(productos, categoria) {
    const resultado = [];

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].categoria == categoria) {
            resultado.push(productos[i]);
        }
    }

    return resultado;
}

console.log(filtrarPorCategoria(productos, "deporte"));
console.log(filtrarPorCategoria(productos, "videojuegos"));
console.log(filtrarPorCategoria(productos, "hogar"));
