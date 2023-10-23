/**
 *  Ejercicio 7
 *  Construir un algoritmo que reciba la cantidad de dinero entregado
 *  y el coste del producto. Debera calcular el cambio que se entregara
 *  al cliente. Debes tener en cuenta que el cliente podria entregar
 *  una cantidad de dinero insuficiente.
 */

let readline = require("readline-sync");
let coste = readline.question("Coste del producto: ");
let entregado = Number(readline.question("Dinero entregado: "));

if (coste < entregado) {
    console.log(" Coste producto: " + coste + " €. Dinero entregado: " + entregado + " €. Cantidad a devolver: " + (entregado - coste) + " €")
}
else {
console.log("No has entregado dinero suficiente. Te faltan: " + (coste - entregado) + " € para completar.")
}