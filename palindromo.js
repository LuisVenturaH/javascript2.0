/*
Ejercicio Palindrome
Generar un algoritmo que nos compruebe si el string introducido es un palindromo. Se dice que un
string es palindromo cuando se puede leer igual de izquierda a derecha que de derecha a izquierda
 */

let readline = require("readline-sync");
let palabra = readline.question("Introduce una palabra o frase para comprobar si es palindromo: ");
let i = 0;
let palindromo = true;

do {
    if (palabra[i] !== palabra[palabra.length - i - 1]) {
palindromo = false;
    }
    i++;
}
while ((i < palabra.length /2) && palindromo);

console.log(palindromo);