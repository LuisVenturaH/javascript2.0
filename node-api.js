
// Esto es para tener un punto de acceso entre el local host y la base de datos

let express = require("express");
const mysql = require("mysql2");    // Esto es para acceder a la carpeta de mysql y sus funciones
let app = express();


const connection = mysql.createConnection({ // Esto conecta la base de datos que tengamos creada en mysql
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

// Para obbtener listado de clientes
app.get("/clientes", function(request, response) { // Con estos parametros puedo hacer busquedas dentro de la base de datos
    connection.query("select * from clientes", function(error, result, fields) { 
    if (error) {
        response.status(400).send(`error: ${error.message}`);
        return;
    }
      response.send(result);
    });        
});

// Obtener listado de empleados y empleados clientes
app.get("/todos_empleados", function(request, response) {
    connection.promise().query("select * from empleados").then(function(result) {
        let empleados = result[0];

        connection.query("select * from empleados_clientes", function(error, result, fields){
            for (let i = 0; i < result.length; i++) {
                empleados[empleados.length] = result[i];
            }

            response.send(empleados);
        });
    }).catch(function(error) {
        response.status(400).send(`error: ${error.message}`);
    });
});

// Obtener total numero empleados de los clientes
app.get("/total_empleados", function(request, response) {
    connection.query("select * from cientes", function(error, result, fields) {
        let total = 0;

        for (let i = 0; i < result.length; i++) {
            total += result[i].Numero_empleados;
        }

        response.send({ totalEmpleados: total });
    });
})

app.listen(8000, function() {
    console.log("Server is up and running!");
});



// Por terminar la llamo con node nombre_ejercicio. (node node-api.js)
// Para verlo vamos a un navegador y escribimos: localhost:8000/hola o por Thunder
// Para detener la terminar ctrl + c