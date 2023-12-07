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
        return true;
    }
    else{
        console.log("Colección clientes creada satisfactoriamente!!")
    }
    // ***************** EXTRACT
    return new Promise((resolve, reject)=>{

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
        // ***************** LOAD
    await collection.insertMany(transformaClientes);
    })
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

// FUNCION PARA MIGRAR SALA
async function migrarSalas(){
    const collection = mongoDatabase.collection("salas");
    const salas = await collection.find().toArray();
    if (salas.length > 0){
        console.log("La colección sala ya existe!!");
        return true;
    }
    else{
        console.log("Colección sala creada satisfactoriamente!!");
    }

    // *************** EXTRACT
return new Promise((resolve, reject)=>{
    mysqlConnection.query(`SELECT nombre, superficie, planta, precio, tipo, clientes.id, clientes.razon_social FROM salas
    JOIN clientes 
    ON salas.cliente_id = clientes.id`, async (error, result, fields)=>{
        if(error){
            throw error;
        }
     // ***************** TRANSFORM    
     let transformaSalas = [];
     for (let i = 0; i < result.length; i++){
        transformaSalas.push({
            nombre: result[i].nombre,
            superficie: result[i].superficie,
            plata: result[i].planta,
            precio: result[i].precio,
            tipo: result[i].tipo,
            cliente: {
                razon_social:  result[i].razon_social,
            }
        })
     }
      // ***************** LOAD
    await collection.insertMany(transformaSalas);    
    })
})
}

// FUNCION MIGRAR EVENTOS
async function migrarEventos(){
    const collection = mongoDatabase.collection("eventos");
    const eventos = await collection.find().toArray();
    if (eventos.length > 0){
        console.log("La colección eventos ya existe!!");
        return true;
    }
    else{
        console.log("Colección eventos migrada satisfactoriamente!!");
    }
    // ************* EXTRACT
    return new Promise((resolve, reject)=>{
        mysqlConnection.query(`SELECT eventos.nombre_evento, eventos.tipo, salas.nombre, fecha_inicio, fecha_final, clientes.razon_social, aforo FROM eventos
        JOIN salas
        ON salas.id = eventos.sala_id
        JOIN clientes
        ON clientes.id = eventos.cliente_id`, async (error, result, fields)=>{
            if(error){
                throw error;
            }
    // ************* TRANSFORM
    let transformaEventos = [];
    for (let i = 0; i < result.length; i++){
        transformaEventos.push({
            nombre_evento: result[i].nombre_evento,
            tipo: result[i].tipo,
            sala:{
                nombre: result[i].nombre
            },
            fecha_inicio: result[i].fecha_inicio,
            fecha_final: result[i].fecha_final,
            cliente: {
                razon_social: result[i].razon_social,
            },
            aforo: result[i].aforo
        });
    }
    // ************ LOAD
    await collection.insertMany(transformaEventos);
        });
    })
}

// FUNCION PARA MIGRAR INVENTARIO
async function migrarInventario(){
    const collection = mongoDatabase.collection("inventario");
    const inventario = await collection.find().toArray();
    if (inventario.length > 0){
        console.log("La colección inventario ya existe!!");
        return true;
    }
    else{
        console.log("colección inventario migrada satisfactoriamente!!");
    }

    // ************* EXTRACT
    return new Promise((resolve, reject)=>{
        mysqlConnection.query(`SELECT nombre, referencia, tipo, estado, marca, clientes.razon_social FROM inventario
        JOIN clientes
        ON clientes.id = inventario.cliente_id`, async(error, result, fields)=>{
            if (error){
                throw error;
            }
              // ************ TRANSFORM
    let transformaInventario = [];
    for (let i =0 ; i < result.length; i++){
      transformaInventario.push({
        nombre: result[i].nombre,
        referencia: result[i].referencia,
        tipo: result[i].tipo,
        estado: result[i].estado,
        marca: result[i].marca,
        cliente: {
            razon_social: result[i].razon_social,
        }
        })  
    }
         // *********** LOAD
  await collection.insertMany(transformaInventario);
    })
  })   
}

// FUNCION MIGRAR INMOBIILARIO
async function migrarMobilario(){
    const collection = mongoDatabase.collection("mobiliario");
    const mobiliario = await collection.find().toArray();
    if (mobiliario.length > 0){
        console.log("La colección mobiliario ya existe!!");
        return true;
    }
    else {
        console.log("Colección mobiliario migrada satisfactoriamente!!")
    }

    // *********** EXTRACT
    return new Promise((resolve, reject)=>{
        mysqlConnection.query(`SELECT mobiliario.nombre, mobiliario.tipo, referencia, estado, salas.nombre_sala FROM mobiliario
        JOIN salas
         ON mobiliario.sala_id = salas.id `, async(error, result, fields)=>{
            if(error){
                throw error;
            }
    // *********** TRANSFORM
    let transformaMobiliario = [];
    for (let i = 0; i < result.length; i++){
        transformaMobiliario.push({
        nombre: result[i].nombre,
        tipo: result[i].tipo,
        referencia: result[i].referencia,
        estado: result[i].estado,
        sala:{
            nombre: result[i].nombre_sala
        }
    })   
    }

    // ********* LOAD

await collection.insertMany(transformaMobiliario);
         })
    })
}

// *********** FUNCION PARA MIGRAR USUARIOS_EVENTOS
async function migrarUsariosEventos(){
    const collection = mongoDatabase.collection("usuarios_eventos");
    const usuarios_eventos = await collection.find().toArray();
    if (usuarios_eventos > 0){
        console.log("La colección usuarios_eventos ya existe!!!")
        return true;
    }
    else {
        console.log("Colección usuarios_eventos creada satisfactoriamente!!")
    }
    
    // *********** EXTRACT
    return new Promise((resolve, reject)=>{
    mysqlConnection.query(`SELECT eventos.nombre_evento, empleados.nombre_e, empleados.apellidos_e, empleados_clientes.nombre, empleados_clientes.apellidos FROM usuarios_eventos
        JOIN usuarios
        ON usuarios.id = usuarios_eventos.usuario_id
         JOIN empleados
         ON usuarios_eventos.usuario_id = usuarios.id
         JOIN eventos
         ON usuarios_eventos.evento_id = eventos.id
         JOIN empleados_clientes
         ON empleados_clientes.usuario_id = usuarios.id`, async(error, result, fileds)=>{
            if(error){
                throw error;
            }
    // ********* TRANSFORM
    let transformaUsuariosEventos = [];
    for (let i = 0; i < result.length; i++){
        transformaUsuariosEventos.push({
            nombre_evento: result[i].nombre_evento,
            usuario_empleado: {
                nombre: result[i].nombre_e,
                apellidos: result[i].apellidos_e
            },
            usuario_cliente: {
                nombre: result[i].nombre,
                apellidos: result[i].apellidos
            }
        })

    } 
    // *********** LOAD
    await collection.insertMany(transformaUsuariosEventos);
    })
  })
}


// ******************* FUNCION MAIN ******************** \\
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
        await migrarClientes();
        await migrarEmpleados();
        await migrarEmpleadosClientes();
        await migrarUsuarios();
        await migrarSalas();
        await migrarEventos();
        await migrarInventario();
        await migrarMobilario();
        await migrarUsariosEventos();

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