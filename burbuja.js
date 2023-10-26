// Hacer que todos los numeros del array se ordenen de menor a mayor

let lista = [102, 7, 1, 3, 2, 34, 3, 8, 11, 6, 9, 4, 101];



for (let j=0; j<lista.length; j++) {
    for (let i=0; i<lista.length; i++) {
        if (lista[i] > lista[i + 1]) {
            let aux = lista[i];
            lista[i] = lista[i + 1];
            lista[i + 1] = aux;
        }
    }
}
console.log(`La lista ordenada es ${lista}`);

// for (let j = 0; j < lista.length; j++) { 

//     for (let i=0; i < lista.length; i++) {
//         if (lista[i] > lista[i + 1]) {
//             let auxiliar = lista[i];

//             lista[i] = lista[i + 1];
//             lista[i + 1] = auxiliar;
//         }
//     }   
// }

// console.log(`La nueva lista es ${lista}`);