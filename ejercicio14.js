/**
 *  Ejercicio 14
 *  Construir un algoritmo que resuelva el problema que tienen unos surtidores
 *  de gasolina, que registran lo que surten en galones, pero el precio de la
 *  gasolina se fija en litros. El algoritmo debe calcular e retornar el precio
 *  que hay q cobrarle al cliente.
 *
 *  Precio gasolina = 1.333 euros / litro
 *  1 galon = 3,78541 litros
 */


let readline = require("readline-sync");
let precioLitro = 1.333;
let precioGalon = (3.78541*precioLitro);

let cantidadSuministro = readline.question("Introduce la cantidad suministrada: ");

console.log("La cantidad suministrada ha sido: " + cantidadSuministro + " litros. La cantidad suministrada en galones ha sido: " 
+ ((precioLitro*cantidadSuministro)/precioGalon) + 
" galones. El precio a cobrar al cliente es: " + (cantidadSuministro*precioLitro) + " €.");
