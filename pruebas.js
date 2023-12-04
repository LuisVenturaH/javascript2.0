//   let array = [6, 8, 6, 1, 0, 6];
//   let nuevoArray = [];
//   let suma = 0;
//   let maximo = -Infinity;
//   let minimo = Infinity;

// for (let i = 0; i < array.length; i++) {
// if (array[i] == 0) {
//   break;
// }
// nuevoArray.push(array[i]);
// suma += array[i];
//   if (array[i] > maximo) {
//     maximo = array[i];
//   }
//   if (array[i] < minimo) {
//     minimo = array[i];
//   }
// }
// const media = suma / nuevoArray.length;

//   const objeto = {
//     average: media,
//     max: maximo,
//     min: minimo,
// }

// console.log(objeto);

// let array = [6, 6, 6, 1, 0, 6];
// let nuevoArray = [];
// let suma = 0;
// let maximo = -Infinity; // Inicializar con valor negativo
// let minimo = Infinity; // Inicializar con valor positivo

// for (let i = 0; i < array.length; i++) {
//   if (array[i] == 0) {
//     break; // Salir del bucle cuando se encuentra un 0
//   }
//   nuevoArray.push(array[i]);
//   suma += array[i];

//   if (array[i] > maximo) {
//     maximo = array[i];
//   }
//   if (array[i] < minimo) {
//     minimo = array[i];
//   }
// }

// const media = nuevoArray.length === 0 ? 0 : suma / nuevoArray.length;

// const objeto = {
//   average: media,
//   max: maximo,
//   min: minimo,
// };

// console.log(objeto);

function adivinarContrasena(array, password) { 
  let count = 1;
  password = "eureka";
  array = ["hola", "hola", "eureka"];
for (let i = 0; i < array.length; i++) {
  if (array[i] == password){
    console.log("Contraseña correcta, bienvenido");
    console.log(count);
    return; // Sale del programa
  } 
  else  {
    console.log("Contraseña incorrecta, intentelo de nuevo");
    console.log(count);
    count++;
  }  
     console.log("Has agotado tus intentos");
     console.log(count);
     break;
  }
}