// let dias = 
// ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
//             ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

// let resultado;

// for (let j = 0; j < dias.length; j++)  {
//     for (let i = 0; i < dias[j].length; i++) {
//         resultado += dias[i][j];
//         console.log(resultado);
//     }
// }


let lista = [7, 5, 13, 1, 4, 58, 98, 101, 3];

for (i = 0; i < lista.length-1; i++) {
    if (lista[i] > lista[i+1]) {
    let nuevaLista = lista[i];
    lista[i] = lista[i+1];
    lista[i+1] = nuevaLista;
    console.log(nuevaLista);
}
}


