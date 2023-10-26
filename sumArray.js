/* 
Has un algoritmo que sume todos los números de un array
*/

const lista = [12, 12, 5, 1, 9, 7, 12, 54, 45];
let resultadoSuma = 0;
let resultadosPares= 0;
let resultadosImpares = 0;
let resultadoProducto = 1;


for (let i=0; i <lista.length; i++) {
    
   resultadoSuma += lista[i]; // Es lo mismo que decir: resultado = resultado + lista[i];
}

console.log(`La suma de todos los numeros es ${resultadoSuma}`);

// Has quese  multiplique los números del array

for (let i=0; i <lista.length; i++) {

   resultadoProducto *= lista[i] // Es lo mismo que: resultadoProducto = resultadoProducto * lista[i];
}

console.log(`El producto de todos los numeros del array es ${resultadoProducto}`);

// Para sumar solo los pares

for (let i=0; i <lista.length; i++) {
   if (lista[i] % 2 == 0) {
      resultadosPares += lista[i]   //Es lo mismo que: resultadosPares = resultadosPares + lista[i];
   }
}
console.log(`La suma de los numeros pares del array es ${resultadosPares}`);
 

// Para sumar solo los impares

for (let i=0; i<lista.length; i++) {
   if (lista[i] %2 != 0) {
      resultadosImpares += lista[i]  //Es lo mismo que resultadosImpares = ResultadosImpares + lista[i]
   }
}
   console.log(`La suma de todos los numeros impares es ${resultadosImpares}`);

// for (let i = 0; i < lista.length; i++)
//     if (lista[i] % 2 == 1) {
//         resultadosImpares += lista[i];
//     }
// console.log(`La suma de todos los numeros impares es ${resultadosImpares}`);    