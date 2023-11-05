const mysql = require("mysql2");    // Esto es para acceder a la carpeta de mysql y sus funciones

const connection = mysql.createConnection({ // Esyto conecta la base de datos que tengamos creada en mysql
    host: "localhost",  // Host local asignado
    user: "root",   // usuario es root
    password: "Lv++2023+",  // Contraseña dada
    database: "polo_digital" // Se Conecta a la base de datos que le asignemos. 
});

// Conectatarse al servidor de mysql local
connection.connect(function(error) {
    if (error) { 
    return console.error(`error: ${error.message}`)
}
    console.log("Conectado a MySQL");
});

// Hacer una consulta
connection.query("select * from empleados", function(error, result, fields) { 
    if (error) {
        return console.error(`error: ${error.message}`);
    }
    
    // Ordenar los datos de la tabla, propiedad nombre, alfabeticamente

    // let listaOrdenada = [];
    // for (let i = 0; i < result.length; i++) {
    //   let incluido = false;
    //   for (let j = 0; j < listaOrdenada.length; j++) {
    //     if (result[i].Nombre < listaOrdenada[j].Nombre) {
    //       for (let k = listaOrdenada.length; k > j; k-- ){
    //           listaOrdenada[k] = listaOrdenada[k -1];
    //       }
    //       listaOrdenada[j] = result[i];
    //       incluido = true;
    //       break;
    //     }
    //   }
    //   if (!incluido){
    //     listaOrdenada[listaOrdenada.length] = result[i];
    //   }
    // }
    // console.log(listaOrdenada);
 
}); // Aquí termina la busqueda de la ordenar alfabeticamentelos noombres



 // Mostrar el salario mas alto.
// connection.query("select * from empleados", function(error, result, fields) {
//     if (error) {
//         console.error(`error: ${error.message}`)
//     }

//     let salarioMayor= result[0].Salario;

//     for (let i = 1; i < result.length; i++) { 
//     if (result[i].Salario > salarioMayor) {
//         salarioMayor = result[i].Salario;
//     }
//     } console.log(salarioMayor) ;
// }) 
    // Termina el salario mas alto


//  Ordenar los apellidos de Z a A.

connection.query("select * from empleados", function(error, result, fields) {
    if (error) {
        console.error(`error: ${error.message}`)
    }

    
    let listaOrdenada = []; 
    for (let i = 0; i < result.length; i++) { 
        let incluido = false;
        for (let j = 0; j < listaOrdenada.length; j++) {
            if (result[i].Apellidos > listaOrdenada[j].Apellidos) {
                for (let k = listaOrdenada.length; k > j; k--) {
                    listaOrdenada[k] = listaOrdenada[k -1];
                }
                listaOrdenada[j] = result[i];
                incluido = true;
                break;
            }
        }
        if (!incluido) {
            listaOrdenada[listaOrdenada.length] = result[i];
        }
    }
    console.log(listaOrdenada);
}
) 
    // Termina ordenar los apellidos de Z a A.







// Cerrar conexión

connection.end(function(error) {
    if (error) {
        return console.error(`error: ${error.message}`)
    }
    console.log("Desconectado de MySQL!!!");
});
