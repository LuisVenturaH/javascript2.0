// Sacar por consola el objeto que tiene mayor ancho y el de mayor alto de imagen.



// esta es nuestra funcion ok (then) de la promesa

function mostrar (respuesta) {
    let masAlto = 0;
    let masAncho = 0;
    
    console.log(respuesta);
    for (i = 0; i < respuesta.length; i++) {
        if (respuesta[i].width > masAncho) {
            masAncho = respuesta[i].width;
        }
    }
    console.log(`La imagen mas ancha mide ${masAncho}`);

    for (i = 0; i < respuesta.length; i++) {
        if (respuesta[i].height > masAlto) {
            masAlto = respuesta[i].height;
        }
    }
    console.log(`La imagen más alta mide ${masAlto}`);
   
} 
// esta es nuestra funcion error (catch) de la promesa

function fallo (error) {
    // console.log(error);
}

let promesa = fetch("https://api.thecatapi.com/v1/images/search?limit=10")

promesa.then((response) => response.json()).then(mostrar).catch(fallo);