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
connection.query("select * from usuarios", function(error, result, fields) { 
    if (error) {
        return console.error(`error: ${error.message}`);
    }
    // console.log(result); // Esto lista los objetos dentro de la tabla usuarios
    
  
    // Ordenar los datos de la tabla, propiedad nombre, alfabeticamente

    // PENDIENTE POR HACER
    // for (let j = 0; j < result.length; j++) {
    //     for (let i = 0; i < j; i++) {
    //         if (result[i].Nombre > result[i + 1].Nombre) {
    //             let aux = result[i];
    //             result[i] = result[i + 1];
    //             result[i + 1] = aux;
               
    //         } 
    //     } 
    // }
    // console.log(result)
    // HASTA AQUI HE LLEGADO CON EL ORDENAR POR NOMBRE
    
 
    
});

connection.query("select * from empleados", function(error, result, fields) {
    if (error) {
        console.error(`error: ${error.message}`)
    }

    
    
    // Mostrar el salario mas alto.
for (let j = 0; j < result.length; j++) {
    for (let i: 0; i < result.length; i++)
    if (result[i].Salario > result[i + 1].Salario) {

        console.log(result[i].Salario)  
    }
}

 

}) 





// Cerrar conexión

connection.end(function(error) {
    if (error) {
        return console.error(`error: ${error.message}`)
    }
    console.log("Desconectado de MySQL!!!");
});
