/**
 * Dada una secuencia o array de operaciones matematicas hay que determinar cual de las operaciones
 * se ha ejecutado el mayor numero de veces.
 * 
 * Por ejemplo, dada la secuencia s = [multiplicar, dividir, dividir] debe mostrar por consola 
 * que la operacion mas usada ha sido dividir
 * 
 * Solo se permite incluir codigo en la funcion contar.
 */

// const secuenciaUno = [suma, resta, resta, resta, suma, suma, suma, suma, resta, suma];
// const secuenciaDos = [resta, resta, resta, resta, suma, suma, resta, resta, suma];
const secuenciaUno = [5, 8, 9, 6, 5, 3, 7, 2 ];
const secuenciaDos = [8, 5, 6, 3, 8, 8, 21, 1];

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

let sumaFunciones = secuenciaUno[0];
function contar(secuencia) {
   
    for (let i = 1; i < secuenciaUno.length; i++) {
        if (secuenciaUno[i] == sumaFunciones) {
            sumaFunciones += i; 
        
    } 
    return sumaFunciones; 

    // for (let i = 1; i < secuenciaDos; i++) {
    //     if (secuenciaDos[i] == secuenciaResta) {
    //         secuenciaResta = secuenciaDos[i];
    //     } 
    // }return secuenciaResta;
}
}

console.log(contar(secuenciaUno)); // debe mostrar "suma"
console.log(contar(secuenciaDos)); // debe mostrar "resta"