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
 * 
 * Datos del uso:
* array = [4, 6, 18, 15, 10] numero = 18
 * array = [1, 2, 3, 4, 5, 6] numero = 8
 * array = [21, 31, 41, 51, 61] numero = 61
 */

let array1 = [1, 3, 18, 4, 15, 10, 6];
let array2 = [1, 2, 3, 4, 5, 6];
let array3 = [21, 31, 41, 51, 61];
let num1 = 18;
let num2 = 8;
let num3 = 61;
let nuevoArray = [4, 6];




function datos2 (array1, num1) {
    let resultado = ["No existe", "No existe"];
   
        for (let i=0; i < array1.length; i++) {
            if (array1[i] == num1) {
                resultado = i;

            return `La posición de ${num1} dentro del array es: ${i}`;
            }   
        }   
    }     return `No existe el numero ${num1} o ${num1+1} dentro del array `
// }
console.log(datos2(array1, num1));