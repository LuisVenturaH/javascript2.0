/**
 *  Ejercicio 6
 *  Crea un algoritmo que reciba un numero y determine si,
 *  el numero es 0, el numero es par o el numero es impar.
 *  Pista: para determinar el resto de una división, se usa la operación módulo %.
 */

let readline = require("readline-sync");

let numero = readline.question("Introduce un numero: ");

if (isNaN(numero) || numero == "") {
    console.log("Has introducido un caracter no valido")
}
else if (numero == 0) {
    console.log("Has introducido el numero cero")
}
else if (numero % 2) {
    console.log("Has introducido un número impar")
}
else {
     console.log("Has introducido un numero par")
}