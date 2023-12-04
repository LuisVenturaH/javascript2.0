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


// let array1 = [3, 6,  15, 18, 10];
// let numero1 = 18;
// let array2 = [1, 2, 3, 4, 5, 6];
// let numero2 = 8;
// let array3 = [21, 61, 41, 51, 31];
// let numero3 = 61;

// function datos (array, numero) {
//     let numeroDado = 0;
//          for (i = 0; i < array.length; i++){
//             if(array[i] == numero){
//             numeroDado = numero;  
//             }  
//         }  return `El numero es ${numeroDado}, su posicion dentro del array es ${i}`;
        
//     } 
//     // return `No existe ${numero} dentro del array`;


// console.log(datos(array1, numero1));
// console.log(datos(array2, numero2));
// console.log(datos(array3, numero3));

// // Para encontrar el numero mas grande  de una lista
// const lista = [45, 12, 67, 89, 34, 22];
// let maximo = lista[0]; // Suponemos que el primer elemento es el máximo

// for (let i = 1; i < lista.length; i++) {
//   if (lista[i] > maximo) {
//     maximo = lista[i];
//   }
// }

// console.log('El número más alto en la lista es:', maximo);

// let array = [5, 6, 8, 89, 6, 2, 8, 6, 1];
// let suma = [];

// // Encontrar el numero mas alto
// for (let i=0; i<array.length;i++) {
//   if (array[i] > suma) {
//     suma = array[i];
//   }
// }
// console.log(suma)



let arrayNumero = [5, 2, 10, 88, 6, 99, 8, 7, 56, 1236, 478, 125, 6];
let numeroAlto = arrayNumero[0];
let numeroBajo = arrayNumero[0];
let numerosPares = [];

// SACA LA SUMA DE LOS ELEMENTOS
// let sumaElementos = 0;
// for (let i=0; i<arrayNumero.length;i++) {
//     arrayNumero[i] = sumaElementos;
//     sumaElementos++;
// }
// console.log("La suma de los elementos es: " + sumaElementos);

// SACA EL RESULTADO DE LA SUMAR TODOS LOS ELEMENTOS

let resultadoSumaElementos = arrayNumero[0];
for (let i = 1; i < arrayNumero.length; i++) {
resultadoSumaElementos += arrayNumero[i];
}
console.log("El resultado de sumar todos los elementos es: " + resultadoSumaElementos)

// SACA LA MEDIA DEL RESULTADO DE LA SUMAR TODOS LOS ELEMENTOS

let sumaResultado = arrayNumero[0];
let mediaSumaResultado = 0;
for (let i = 1; i < arrayNumero.length; i++) {
sumaResultado += arrayNumero[i];
mediaSumaResultado = sumaResultado / arrayNumero.length;
}


console.log("El media de sumar todos los elementos es: " + mediaSumaResultado)

// // SACA EL NUMERO MAS ALTO
for (let i=1; i < arrayNumero.length; i++) {
  if (arrayNumero[i] > numeroAlto) {
    numeroAlto = arrayNumero[i];
  }
}

// SACA EL NUMERO MAS BAJO
for (let i = 1; i < arrayNumero.length; i++) {
  if (arrayNumero[i] < numeroBajo) {
    numeroBajo = arrayNumero[i]
  }
}
console.log("El numero mas alto es: " + numeroAlto);
console.log("El numero mas bajo es; " + numeroBajo);

// // SACA LA CANTIDAD DE NUMEROS PARES DENTRO DEL ARRAY
// for (let i=0; i < arrayNumero.length; i++) {
//   if (arrayNumero[i] % 2 == 0) {
//     arrayNumero[i] = numerosPares;
//     numerosPares++;
//   }
// }
// console.log("La cantidad de numero pares dentro del array es: " + numerosPares);

// SACA LA SUMA DE LOS PARES DENTRO DEL ARRAY
let sumaPares = 0;
for (let i = 0; i < arrayNumero.length; i++) {
  if (arrayNumero[i] % 2 == 0) {
   sumaPares += arrayNumero[i];
  }
} 
console.log("La suma de los numeros pares es: " + sumaPares)

// SACAR EL RESULTADO DE LA SUMA DE LOS ELEMENTOS
// let num = [1, 2, 3, 4];
// let total = num[0];

// for (let i=1; i<num.length;i++) {
//   total = total + num[i];
// }
// console.log(total)


// SACAR LA SUMA DE LOS PARES
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sumaPares = 0;

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2 === 0) {
//     sumaPares += numeros[i];
//   }
// }

// console.log('La suma de los números pares en el array es:', sumaPares);
