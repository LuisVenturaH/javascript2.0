/**
 * Crear una funcion que recibe como parametros un array de numeros y un numero
 * La funcion tiene que devolver la posicion del numero dentro del array
 * o no existe si numero no esta en el array.
 * 
 * array = [1, 2, 3, 4];
 * 
 * si numero = 2 -> debe devolver 1;
 * si numero 5 -> debe devolver "no existe";
 * 
 */


let array1 = [3, 6,  15, 18, 10];
let numero1 = 18;
let array2 = [1, 2, 3, 4, 5, 6];
let numero2 = 8;
let array3 = [21, 61, 41, 51, 31];
let numero3 = 61;

function datos (array, numero) {
    let numeroDado = 0;
         for (i = 0; i < array.length; i++){
            if(array[i] == numero){
            numeroDado = numero;  
            }  
        }  return `El numero es ${numeroDado}, su posicion dentro del array es ${i}`;
        
    } 
    // return `No existe ${numero} dentro del array`;


console.log(datos(array1, numero1));
console.log(datos(array2, numero2));
console.log(datos(array3, numero3));