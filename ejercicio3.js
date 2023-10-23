// ENUNCIADO: Algoritmo que lea 3 números y nos retorne el mayor, o que en caso de serlo
// nos retorne un string que diga iguales cuando los 3 sean iguales.

let readline = require("readline-sync");
 let num1 = Number(readline.question("Introduce un numero: "));
 let num2 = Number(readline.question("Instroduce un segundo numero: "));
 let num3 = Number(readline.question("Introduce un tercer numero: "));

 console.log(num1);
 console.log(num2);
 console.log(num3);

 
 if (num1 == num2 && num2== num3) {
    console.log("Los tres numeros son iguales")
 }
 else if (num1 > num2 && num1 > num3) {
    console.log("El numero " + num1 + " es el mayor de todos")
 }
 else if (num2 > num3) {
    console.log("El numero " + num2 + " es el mayor de todos")
 }
 else {
    console.log("El numero " + num3 + " es el mayor de todos")
 }
 
