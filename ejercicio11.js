/**
 *  Ejercicio 11
 *  En una tienda efectuan un descuento a los clientes dependiendo de la cantidad
 *  de la compra. El descuento se basa en lo siguiente:
 *
 *  Si el monto es menor que 500€ -> No hay descuento
 *  Si el monto está comprendido entre 500€ y 1.000€ inclusive –> 5% descuento
 *  Si el monto está entre 1.000€ y 7.000€ inclusive -> 10% descuento
 *  Si el monto está entre 7.000€ y 15.000€ inclusive -> 20% descuento
 *  Más de 15.000€ -> 25% descuento
 *
 *  El algoritmo recibira la cantidad y retornara el precio final aplicandole el
 *  descuento correspondiente.
 */

let readline = require("readline-sync");
let monto = Number(readline.question("Introduce el monto: "));
let noDescuento = 499;
let cincoDescuento = 1000;
let diezDecuento = 7000;
let veinteDescuento = 15000;
let maxDescuento = 15000.1;


if (monto <= noDescuento) {
    console.log("No tienes descuentos");
} 
else if (monto >= noDescuento && monto <= cincoDescuento) {
    console.log("Tienes un descuento del 5%. El precio sin descuento es " + monto + "€. El descuento a aplicar es " + (monto*0.05) + "€. El precio final es de " + (monto*0.95) + " €");
} 
else if (monto >= cincoDescuento && monto <= diezDecuento) {
    console.log("Tienes un descuento del 10%. El precio sin descuento es " + monto + "€. El descuento a aplicar es " + (monto*0.10) + "€. El precio final es de " + (monto*0.9) + " €");
} 
else if (monto >= diezDecuento && monto <= veinteDescuento) {
    console.log("Tienes un descuento del 20%. El precio sin descuento es " + monto + "€. El descuento a aplicar es " + (monto*0.20) + "€. El precio final es de " + (monto*0.80) + " €");
} 
else if (monto >= maxDescuento) {
    console.log("Tienes un descuento del 25%. El precio sin descuento es " + monto + "€. El descuento a aplicar es " + (monto*0.25) + "€. El precio final es de " + (monto*0.75) + " €");
} 
else {
    console.log("No has introducido un número");
}