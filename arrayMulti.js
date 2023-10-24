const multi = [[1, 2, 3, 4] [5, 6, 7, 8]];
let resultado = 0;

// console.log(multi[0]); //fila 0
// console.log(multi[1]); //fila 1
// console.log(multi[0][0]); // fila 0, columna 0 
// console.log([0][1]); // fila 0, columna 1
// console.log([1][0]); // fila 1, columna 0

for (let j = 0; j < multi.length; j++) { //Al no incluir la variable entre multi y length se refeire al array de afuera
    for (let i = 0; i < multi[j].length; i++) { // Al incluir la variable entre multi [j] y length me refiero al de adentro
        
        resultado += multi[j][i];
    }
    
} 
//     for (let i = 0; i < multi.length[0]; i++) {
        
//         resultado == multi[i]
// }

console.log(resultado);