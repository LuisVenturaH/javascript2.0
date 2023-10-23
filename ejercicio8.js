/**
 *  Ejercicio 8
 *  Crea un algoritmo que reciba el sueldo de un trabajador y
 *  aplique un incremento del 15% si el sueldo es inferior a 1000€.
 *  El algoritmo debera retornar el nuevo salario.
 */

let readline = require("readline-sync");

let salario = readline.question("Introduce el salario: ");

if (salario <= 1000) {
console.log("El salario es inferior a mil euros, por lo que se incrementa en 15%. El nuevo salario es: " + (salario*1.15))
}
else {
    console.log("Tu salario es: " + salario)
}