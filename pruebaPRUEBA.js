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