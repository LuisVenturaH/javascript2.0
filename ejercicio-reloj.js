/*
Escribe un algoritmo que, dandole un número N que representa dónde
se encuentra actualmente el
minutero en un reloj, devuelva el ángulo
formado por el minutero y la marca de las 12 en punto en el reloj.
 *
El numero no podra ser mayor que 12, si lo fuera, el algoritmo retornara
que el numero introducido es incorrecto
 */

// el angulo se calcula: (N/12) * 360. N es el numero, 12 las horas y 360 la cantidad de grado

let readline = require("readline-sync");

let numero = Number (readline.question("Introduce el numero: "));
let n = Number((numero/12) * 360);

if (numero >= 1 && numero <=12) {
    console.log("El angulo en el minutero es: " + n);
}
else {
    console.log("Has introducido un numero menor a 0 o mayor a 12")
}