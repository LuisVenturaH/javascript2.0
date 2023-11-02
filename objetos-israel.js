const productos = [
    {
        nombre: "bicileta",
        stock: 2,
        categoria: "Deporte",
        precio: 1000,
        valoracion: 4.8
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

for (let i = 0; i < productos.length; i++) {
    console.log(productos[i].nombre, productos[i].precio);
}

/**
 * Calcular la media de los valoracion de los productos en el array.
 */
let valoracion = 0;

for (let i = 0; i < productos.length; i++) {
    valoracion += productos[i].valoracion;
}

console.log(valoracion / productos.length);

/**
 * Funcion que devuelva el nombre y el stock del producto mas caro
 */

function buscarMayor(productos) {
    let posicion = 0;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].precio > mayor) {
            posicion = i;
        }
    }

    return `El nombre del producto mas caro es ${productos[posicion].nombre} 
                    y tiene en stock ${productos[posicion].stock}`;
}

console.log(buscarMayor(productos));
