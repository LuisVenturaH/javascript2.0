let listado = [ 1, 5, 12, 8, 7, 23, 8, 2 ];

function esMayor(a, b) {
    return a > b;
}

function esMenor(a, b) {
    return a < b;
}

function procesar(elementos, callback) {
    let numero = elementos[0];

    for (let i = 1; i < elementos.length; i++) {
        if (callback(elementos[i], numero)) {
            numero = elementos[i];
        }
    }

    return numero;
}

// muestra el mayor
console.log(procesar(listado, esMayor));
// muestra el menor
console.log(procesar(listado, esMenor));