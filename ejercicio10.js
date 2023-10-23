/**
 *  Ejercicio 10
 *  Construir un algoritmo que reciba la categoria y el sueldo de un trabajador y
 *  calcule el aumento de sueldo correspondiente teniendo en cuenta la siguiente
 *  tabla.
 *
 *  Categoria 1 = Aumento del 15%
 *  Categoria 2 = Aumento del 10%
 *  Categoria 3 = Aumento del 6%
 *  Categoria 4 = Aumento del 3%
 *
 *  El algoritmo debera retornar el nuevo salario. Ten en cuenta que el sueldo del
 *  trabajador podria no entrar en ninguna categoria.
 */

let readline = require("readline-sync");
let salario = Number(readline.question("Introduce el salario: "));
let categoria = Number(readline.question("introduce tu categoría (entre 1 y 4): "));

if (isNaN(salario) || isNaN(categoria)) {
    console.log("Has introducido una salario o una categoria no valida.")
}
else if (categoria == 1) {
    console.log("Perteneces a la categoría 1, por lo que tienes un incremento de un 15%. Tu nuevo salario es de: " + (salario*1.15) + " €")
}
else if (categoria == 2) {
    console.log("Perteneces a la categoría 2, por lo que tienes un incremento de un 10%. Tu nuevo salario es de: " + (salario*1.10) + " €")
}
else if (categoria == 3) {
    console.log("Perteneces a la categoría 3, por lo que tienes un incremento de un 6%. Tu nuevo salario es de: " + (salario*1.06) + " €")
}
else if (categoria == 4) {
    console.log("Perteneces a la categoría 4, por lo que tienes un incremento de un 3%. Tu nuevo salario es de: " + (salario*1.03) + " €")
}
else {

    console.log("No perteneces a ninguna categoria, por lo que tu salario no se incrementa y continua siendo de: " + salario  + " €")
}