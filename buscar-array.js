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

let array1 = [4, 3, 18, 15, 10, 6];
let array2 = [1, 2, 3, 4, 5, 6];
let array3 = [21, 31, 41, 51, 61];
let num1 = 18;
let num2 = 8;
let num3 = 61;
let nuevoArray = [4, 6];


// function datos (array1, num1) {
//     for (let i=0; i < array1.length; i++) {
//         if (array1[i] == num1[i]) {
//             return `La posición de ${num1} dentro del array es: ${i}`;
//         }   
//     }     return `No existe el numero ${num1} dentro del array `
// }
// console.log(datos(array2, num2));

// Crea una funcion que lea un array y diga si dos numeros dados dentro otro array estan dentro del primer array


// function datos2 (array1, nuevoArray) {
//     for (let i=0; i < array1.length; i++) {
//         if (array1[i] == nuevoArray[0]) {
//             for (let j=0; j < array1.length; j++) {
//                 if (array1[j] == nuevoArray[1]);
//                 return `La posición de ${nuevoArray[0]} dentro del array es: ${i} y 
//             La posición de ${nuevoArray[1]} dentro del array es: ${j}`;
//             } 
            
//         }   
//     }     return `No existe el numero ${nuevoArray[0]} o ${nuevoArray[1]} dentro del array `
// }
// console.log(datos2(array1, nuevoArray));

function datos2 (array1, nuevoArray) {
    let resultado = ["No existe", "No existe"];
    for (let j=0; j < nuevoArray.length; j++)  {
        for (let i=0; i < array1.length; i++) {
            if (array1[i] == nuevoArray[j]) {
                resultado[j] = i;

            return `La posición de ${nuevoArray[j]} dentro del array es: ${i} y 
            La posición de ${nuevoArray[j+1]} dentro del array es: ${j}`;
            }   
        }   
    }     return `No existe el numero ${nuevoArray[j]} o ${nuevoArrayj+1} dentro del array `
}
console.log(datos2(array1, nuevoArray));