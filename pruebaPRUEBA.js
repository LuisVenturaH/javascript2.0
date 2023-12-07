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