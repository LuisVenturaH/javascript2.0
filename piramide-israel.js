/**
 * Pedir al usuario un numero por consola y dibujar un triangulo de manera que se muestre
 * tal que asi
 * 
 * si el usuario introduce 4 el resultado por consola sera
 * 
 * *
 * **
 * ***
 * ****
 */

let numero = 5;
for (let i = 0; i < numero; i++) {
    let linea = "";

    for (let k = 0; k < numero - i - 1; k++) {
        linea += " ";
    }

    linea += "**";

    for (let j = 0; j < i*2; j++) {
        linea += "*";
    }

    console.log(linea);
}    