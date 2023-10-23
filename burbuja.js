let lista = [102, 7, 1, 3, 2, 34, 3, 8, 11, 6, 9, 4, 101];


for (let j = 0; j < lista.length; j++) { // Se ha añadido un nuevo for por que al leer el array una vez solo cambia la posiciín una vez
                                        // y se requiere crear el segundo para que lo recorra varias veces.
    
    for (let i=0; i < lista.length-1; i++) {
        if (lista[i] > lista[i + 1]) {
            let auxiliar = lista[i];

            lista[i] = lista[i + 1];
            lista[i + 1] = auxiliar;
        }
    }   
}


console.log(`La nueva lista es ${lista}`);