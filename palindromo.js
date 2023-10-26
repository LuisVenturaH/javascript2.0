/*
Ejercicio Palindrome
Generar un algoritmo que nos compruebe si el string introducido es un palindromo. Se dice que un
string es palindromo cuando se puede leer igual de izquierda a derecha que de derecha a izquierda
 */

let readline = require("readline-sync");
let palabra = "luissiul";
let i = 0;
let palindromo = true;

//HECHO CON DO WHILE
do {
    if (palabra[i] !== palabra[palabra.length - i - 1]) {
palindromo = false;
    }
    i++;
}
while ((i < palabra.length /2) && palindromo);

console.log(palindromo);

// HECHO CON BUCLE FOR

for (i=0; i<palabra.length / 2; i++ ) {
    if (palabra[i] != palabra[palabra.length -i -1]) {
        palindromo = false;
        break;
    }

} if (palindromo) {
    console.log(`"${palabra}" es un palindromo`);
} else{
console.log(`"${palabra}" no es un palindromo`)}