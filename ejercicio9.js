/**
 *  Ejercicio 9
 *  Construir un algoritmo que reciba 5 calificaciones de un alumno y retorne el promedio
 *  junto con la palabra "aprobado" (recuerda la concatenacion y el uso de ``) si el alumno tiene un promedio
 *  mayor o igual a 5, y "no aprobado" en caso contrario.
 *  En caso de que se introdujera alguno 'no numero' el algoritmo debera retornar un string
 *  diciendo 'Debes introducir sólo números. Inténtalo de nuevo'
 */

let readline = require("readline-sync");
let nota1 = 4;
let nota2 = 5;
let nota3 = 6;
let nota4 = 7;
let nota5 = "s";
let total = nota1 + nota2 + nota3 + nota4 + nota5;
let promedio = total / 5;



if (isNaN(promedio) || promedio == "") {
console.log("Has introducido uno o varios caracteres no validos")
}
else if(promedio >= 5) {
    console.log("Tu nota promedio total es: " + promedio + ". Felicidades, has sido aprobado")
}
else {
    console.log("Tu nota promedio total es: " + promedio + ". Lo siento, no has aprobado el curso")
}

