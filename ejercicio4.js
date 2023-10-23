/**
 Ejercicio 4
 Cree un algoritmo que reciba 3 numeros y, si el primero de ellos
 es negativo, retorne el producto de los 3, si no lo es, retornara
 la suma. Si no se introducen tres numeros validos, retornara un string
 que diga Has introducido uno o varios caracteres no validos
 */

 let readline = require("readline-sync");
let num1 = Number(readline.question("Introduce un primer numero: "));
let num2 = Number(readline.question("Introduce un segundo numero: "));
let num3 = Number(readline.question("Introduce un tercer numero: "));


if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Has introducido uno o varios caracteres no validos")
}
else if (num1<0) {
    console.log("El primer numero es negativo, por lo que debemos multiplicar, dando como resultado " + num1*num2*num3)
}
else {
    console.log("El primer numero es positivo, por lo que debemos sumar, dando como resultado " + (num1 + num2 + num3))
}
