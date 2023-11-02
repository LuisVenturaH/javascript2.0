let readline = require("readline-sync");


// let count = 0;

// while (count < 5) {
//     console.log("Estoy en el contador " + count)
//     count++;
// }

// for (i = 0; i < 5; i++){
//     console.log("Estoy en el contador " + i)
// }

/* Escribe un programa que use un bucle while para contar del 1 al 10 e imprima los números. */

// let i = 1;
// while (i <= 10) {
//     console.log("con while " + i)
//     i++ 
// }
// console.log("---------------------")
// // Con do while
// let j = 1
// do {
// console.log("Con do.. while " + j);
// j++
// }
// while (j <= 10);


/* Escribe un programa que use un bucle do...while para pedir al usuario un número mayor que 100 hasta que lo haga. */

let numero;
do {
  numero = readline.question("Introduce un número mayor que 100: ");
} while (numero <= 100);

console.log("¡Número válido!");
