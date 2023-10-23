/*
 *  Ejercicio 5
 *  Construir un algoritmo que reciba un numero entero y retorne
 *  un string que nos indique si es positivo, negativo o nulo.
 *  Debes tener en cuenta la opcion de que no se introduzca un
 *  numero.
 */

let readline = require("readline-sync");

let entero = Number(parseInt(readline.question("Introduzca un numero entero: ")));

if (isNaN(entero)) {
    console.log("Has introducido un caracter no valido")
}
else if (entero < 0) {
    console.log("Has introducido un numero negativo: " + entero)
}
else {
    console.log("Has introducido un numero positivo: " + entero)
}