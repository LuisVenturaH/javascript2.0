/* 
Has un algoritmo que sume todos los números de un array
*/

const lista = [12, 12, 5, 1, 9, 7, 12, 54, 45];
let resultado = 0;
let resultadosPares= 0;
let resultadosImpares = 0;


for (let i=0; i <lista.length; i++) {
    
   resultado += lista[i];
}

console.log(`La suma de todos los numeros es ${resultado}`);

// Para sumar solo los pares

// for (let i=0; i<lista.length; i++){
//     if(lista[i] % 2 == 0) {
//         resultadosPares += lista[i];
//     }
// }
// console.log(`La suma de todos los numeros pares es ${resultadosPares}`);    

// // Para sumar solo los impares

// for (let i = 0; i < lista.length; i++)
//     if (lista[i] % 2 == 1) {
//         resultadosImpares += lista[i];
//     }
// console.log(`La suma de todos los numeros impares es ${resultadosImpares}`);    