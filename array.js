let coleccion = [5, 7, 10, 13, 2, 1, 1, 3];
let otracoleccion = [];

// console.log(coleccion[0]);
// console.log(coleccion[3]);
// console.log(coleccion.length);

// console.log[3] = 2;
// console.log(coleccion);

// console.log(coleccion[coleccion.length -1]);

// for (let i = 0; i < coleccion.length; i++) {
//     console.log(coleccion[i]);
// }

// otracoleccion[0] = coleccion[7];
// console.log(otracoleccion);
console.log(coleccion.reverse());
console.log(coleccion.sort((a, b) => a - b));

// Reversr de un array

for (let i = 0; i < coleccion.length ; i++) {
    let auxiliar = coleccion[i];
    coleccion[i] = coleccion[coleccion.length -i - 1];
    coleccion[coleccion -i -1] = auxiliar;
}


