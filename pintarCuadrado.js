
// Pedir por consola un numero y crear un array de longitud de numero introducido que
// contenga *. Ejemplo, se introduce un 2, debe obtener ['*', '*']

let readline = require("readline-sync");

let numero = Number(readline.question("Introduce un numero: "));

let linea = [];

for (i=0; i<numero; i++) { //No pongo la longitud, lentgh, porque la longitud la da el usuario al introducir el numero.
    linea[i] = '*'}
    console.log(linea);

// Ahora haremos el mismo ejericio, creando una nueva linea, y solo se marcará con asterisco el primer y el ultimo elemento



// Version de Luis (otro)

/*Solo el primer y ultimo elemento del arry el resto espacio*/
let numero=Number(readline.question("Dime la dimensión del array: "));
let lista=[];
for(i=0;i<numero;i++){
    if(i==0||i==numero-1){
        lista[i]='*';
    }else{
        lista[i]=' ';
    }
}
console.log(lista);


