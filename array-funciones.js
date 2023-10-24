// Escribimos una funcion que nos devuelva la suma de todos los elementos del array


function sumar(listado) {
    let resultado = 0;
    for (let i = 0; i < listado.length; i++){
    resultado += listado[i];    
    }
    return resultado;
}


// Escribimos una funcion que nos devuelva el producto de todos los elementos del array

function multiplicar(listado) {
    let resultado = 1;
    for (let i=0; i < listado.length; i++) {
    resultado *= listado[i];
    }
    return resultado;
}


let coleccion = [5, 7, 10, 13, 2, 1, 1, 3];

// CLG de la suma
console.log(sumar(coleccion));

// CLG de la multiplicación
console.log(multiplicar(coleccion));