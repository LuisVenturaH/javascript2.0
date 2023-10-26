// Pedir un numero y crear una linea con asteriscos, si ponemos, por ejemplo 4, colocamos:
// *
// **
// ***
// ****

let readline = require("readline-sync");


let cantidad = Number(readline.question("introduce un numero: "));

for (let i = 0; i < cantidad; i++) {
    let asterisco = "";
    
    for (let j = 0; j < cantidad; j++) {
        if (j < i + 1) {
            asterisco += "*";
        }
    }
     console.log(asterisco);
    }


    // Codigo de María
    // let linea = Number(readline.question("introduce un numero: "));   
    // let linea = "";

    // for (let i = 0; i < cantidad; i++) {
    // linea += "*"
    // console.log(linea)
    // }


