let readline = require("readline-sync");


const objeto = 
    {
        Nombre: "Luis",
        Apellido: "Ventura",
        Edad: 46,
        Sexo: "Masculino",
        Nacionalidad: "Dominicana",
        array : ["Lunes", "Martes", "Miercóles", "Jueves", "Viernes", "Sabado", "Domingo"],
    };
    


// Existen dos formas de recorrer un array dentro de un objeto. 
// 1. Concatenado la variable datos con array (datos.array), a seguir:
for (i = 0; i < objeto.array.length; i++){
    console.log(objeto.array[i]);
    
}
console.log("-----------")

// 2. Guardando en una variable lo concatenado, en este caso objeto.array.

let nuevoArray = objeto.array;

for (i = 0; i < nuevoArray.length; i++) {
  
    console.log(nuevoArray[i]);
}
