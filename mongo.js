const {MongoClient} = require("mongodb");
const mysql = require("mysql2");

const MongoUrl = "mongodb://127.0.0.1:27017";
const mongoClient = new MongoClient(MongoUrl);
let mongoDatabase;

const mysqlConnection = mysql.createConnection({
    host: "localhost",  
    user: "root", 
    password: "Lv++2023+", 
    database: "polo_digital" 
});

//  ************* FUNCIONES PARA MIGRAR DATOS *************  \\

// FUNCION PARA MIGRAR CLIENTES
async function migrarClientes(){
    const collection = mongoDatabase.collection("clientes");
    const clientes = await collection.find().toArray();
    if (clientes.length > 0) {
        console.log("La colección clientes ya existe!!")
    }
    else{
        console.log("Colección clientes creada satisfactoriamente!!")
    }
    // ***************** EXTRACT
    mysqlConnection.query(`SELECT * FROM clientes`, async (error, result, fields)=>{
        if(error){
            throw error;
        }
    // ***************** TRANSFORM
    let transformaClientes = [];
    for (let i = 0; i < result.length; i++){
        transformaClientes.push({
            razon_social: result[i].razon_social,
            cif: result[i].cif,
            sector: result[i].sector,
            telefono: result[i].telefono,
            numero_empleados: result[i].numero_empleados
        });
    }
        // ***************** LOAD DEBES COMPLETAR EL LOAD
    })

}


// FUNCION PARA MIGRAR EMPLEADOS
async function migrarEmpleados(){
    const collection = mongoDatabase.collection("empleados");
    const empleados = await collection.find().toArray();

    if (empleados.length > 0) {
        console.log("La colección empleados ya existe!!");
        return true;
    } 
    else {
        console.log("Colección empleados migrada satisfactoriamente")
    }
    
    // ***************** EXTRACT
        return new Promise((resolve, reject)=>{
            mysqlConnection.query(`SELECT nombre, apellidos, telefono, salario, email, password FROM empleados
    JOIN usuarios ON empleados.usuario_id = usuarios.id`, async (error, result, fields)=>{
        if(error){
            throw error;
        }

    // ***************** TRANSFORM
    let transformaEmpleados = [];
    for (let i = 0; i < result.length; i++){
        transformaEmpleados.push({
            nombre: result[i].nombre,
            apellidos: result[i].apellidos,
            telefono: result[i].telefono,
            salario: result[i].salario,
            usuario: {
                email: result[i].email,
                password: result[i].password
            }
        });
    }

    //***************** LOAD
    await collection.insertMany(transformaEmpleados);

    });
})
}

// FUNCION PARA MIGRAR EMPLEADOS_CLIENTES
async function migrarEmpleadosClientes(){
    const collection = mongoDatabase.collection("empleados_clientes");

    const empleados_clientes = await collection.find().toArray();

    if(empleados_clientes.length > 0){
        console.log("La colección empleados_clientes ya existe!!");
        return true;
    }
    else {
        console.log("Colección empleados_clientes migrada satisfactoriamente")
    }

    // ***************** EXTRACT
    return new Promise((resolve, reject)=>{
        mysqlConnection.query(`SELECT nombre, apellidos, usuario_id, cliente_id, empleados_clientes.telefono, dni, 
        usuarios.email, usuarios.password, clientes.razon_social,
        clientes.cif, clientes.sector FROM empleados_clientes
        JOIN usuarios 
        ON empleados_clientes.usuario_id = usuarios.id
        JOIN clientes
        ON empleados_clientes.cliente_id = clientes.id`, async (error, result, fields)=>{
    if(error){
        throw error;
    }

    // ***************** TRANSFORM
let transformaEmpleadosClientes = [];
for (let i = 0; i < result.length; i++){
    transformaEmpleadosClientes.push({
        nombre: result[i].nombre,
        apellidos: result[i].apellidos,
        usuario: {
            email: result[i].email,
            password: result[i].password
        },
        cliente: {
            razon_social: result[i].razon_social,
            cif: result[i].cif,
            sector: result[i].sector
        },
        telefono: result[i].telefono,
        dni: result[i].dni
    });
}
    //***************** LOAD
await collection.insertMany(transformaEmpleadosClientes);

});
})    
}

// FUNCION PARA MIGRAR USUARIOS

async function migrarUsuarios(){
    const collection = mongoDatabase.collection("usuarios");

    const usuarios = await collection.find().toArray();

    if(usuarios.length > 0){
        console.log("La colección usuarios ya existe!!");
        return true;
    }
    else{
        console.log("Colección usuarios creada satisfactoriamente!!");
    }

    // *********** EXTRACT
    return new Promise((resolve, reject)=>{
        mysqlConnection.query(`SELECT * FROM usuarios`, async (error, result, fields)=>{
            if(error){
                throw error;
            }

    // ********** TRANSFORM
    let transformarUsuarios = [];
    for (let i = 0; i < result.length; i++){
        transformarUsuarios.push({
            email: result[i].email,
            password: result[i].password
        });
    } 
    // ********** LOAD
    await collection.insertMany(transformarUsuarios);
        })
    })
    
}

// Desde aquí la funcion princial (Main)
async function main() {
    try {
        // Conectar con MongoDB
        await mongoClient.connect();
        console.log("Conectado a MongoDB");

        // Conectar con MySQL
        await new Promise((resolve, reject) => {
            mysqlConnection.connect((error) => {
                if (error) {
                    console.error(`Error al conectar con MySQL: ${error.message}`);
                    reject(error);
                } else {
                    console.log("Conectado a MySQL");
                    resolve();
                }
            });
        });

        // Realizar operaciones con MongoDB
        mongoDatabase = mongoClient.db("polo_digital");
        await migrarEmpleados();
        await migrarEmpleadosClientes();
        await migrarUsuarios();
        // await migrarEventos();
       

        // Realizar operaciones con MySQL
        console.log("Ejecutando desde base de datos");
    } catch (error) {
        console.error(error);
    } finally {
        // Cerrar conexiones
        await mongoClient.close();
        mysqlConnection.end();
    }
}

main();