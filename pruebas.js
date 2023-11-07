let readline = require("readline-sync");

array = ["hola", "hola", "eureka"];
password = readline.question("Introduce una contrasena: ");  

function adivinarContrasena(array, password) { 
  

    for (let i = 0; i < array.length; i++) {
      if (array[i] != password){
        console.log("Contraseña incorrecta, intentelo de nuevo");
      } 
      else  {
        console.log("Contraseña correcta, bienvenido");
        break; // Sale del programa
      }  
         console.log("Has agotado tus intentos");
         break;
      }
    }

    module.exports = { adivinarContrasena };