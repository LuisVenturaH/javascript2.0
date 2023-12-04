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

// function numeroRandon() {
// const numRandom = Math.floor(Math.random() * 10) + 1;
//   console.log(numRandom);  

// }



let contadorSegundos = 0;
let contadorMinutos = 0;
let contadorHora = 0;

function contarCadaSegundo(segundos, minutos, horas) {
  const intervaloSeg = setInterval(() => {
    // console.log(`Segundos: ${contadorSegundos}`);
    segundos = (segundos % 60) + 1; // Reiniciar el contador después de llegar a 60
  }, 10); // 1000 milisegundos = 1 segundo


  const intervaloMin = setInterval(() => {
    // console.log(`Minutos: ${contadorMinutos}`);
    minutos = (contadorSegundos % 60) + 1; // Reiniciar el contador después de llegar a 60
  }, 100); // 1000 milisegundos = 1 segundo


  const intervaloHora = setInterval(() => {
    // console.log(`Hora: ${contadorHora}`);
    horas = (contadorSegundos % 60) + 1; // Reiniciar el contador después de llegar a 60
  }, 1000); // 1000 milisegundos = 1 segundo


  console.log(`Segundos: ${segundos} Minutos: ${minutos}  Horas: ${horas}  `)
}

// Ejecutar el contador cada segundo
contarCadaSegundo(1, 1, 1);

