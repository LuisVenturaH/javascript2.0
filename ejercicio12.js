/**
 *  Ejercicio 12
 *  Construir algoritmo que te permita calcular la temperatura
 *  teniendo en cuenta el numero de sonidos emitidos por un grillo en un
 *  minuto, es una funcion que depende de la temperatura. Como resultado
 *  de esto, es posible determinar el nivel de temperatura haciendo uso
 *  de un grillo como termometro. La formula es:
 *  T = N / 4 + 40, donde T es la temperatura en grados
 *  centigrados y N es el numero de sonidos emitidos por segundo.
 *
 *  Como el aparato para medir los sonidos puede fallar, tener en cuenta que si
 *  el numero de sonidos es 0, es un error y debe de retornar error.
 */

let readline = require("readline-sync");

let sonido = readline.question("Introduce la cantidad de sonido emitido por el grillo: ");
let temperatura = sonido / 4 + 40;

if (sonido <= 0) {
    console.log("Has introducido un valor igual o menor a 0, por lo que se puede calcular la temperatura")
}
else {
console.log("La temperatura es: " + temperatura + " grados centigrados");
}