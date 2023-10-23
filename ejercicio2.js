/**
 Ejercicio 2
Escriba un algoritmo que lea dos numeros y la operación a realizar, y retorne el valor
de la operacion correcta segun el nombre de la funcion
Por ejemplo:
El usuario introduce 7 luego un 3 y luego suma y debe devolver 10
El usuario introduce 8, luego 3 y luego resta y debe devolver 5
 *
Las operaciones permitidas son: suma, resta, producto y división.
 */

let readline = require("readline-sync");
 let num1 = Number(readline.question("Introduce un primer numero: "));
 let num2 = Number(readline.question("Introduce un segundo numero: "));
 let operacion = readline.question("¿Cual operacion quieres realizar: suma, resta, producto o division? ").toLowerCase();

 if (operacion == "suma") {
    console.log("La " + operacion + " de " + num1 + " más " + num2 + " es: " + (num1 + num2));
 }
 else if (operacion == "resta") {
    console.log("La " + operacion + " de " + num1 + " menos " + num2 + " es: "+ (num1 - num2));
 }
 else if (operacion == "producto") {
    console.log("El " + operacion + " de " + num1 + " por " + num2 + " es: " + (num1 * num2));
}
else if (operacion == "division") {
    console.log("La " + operacion + " de " + num1 + " entre " + num2 + " es: " + (num1 / num2));
}
else {
    console.log("Has introducido un valor o una operación incorrecta");
}
