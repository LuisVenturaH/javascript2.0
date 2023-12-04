const {MongoClient} = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
let db;
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Lv++2023+",
    database: "polo_digital"
})
connection.connect(function(error){
    if(error){
        return console.log(`error: ${error.message}`)
    }
    console.log("Conectado a MySQL");
})

async function migrar_usuarios(){
    const collection = db.collection("usuarios");
    connection.query("SELECT email, password FROM usuarios", function(error, result, fields){
        if(error){
            return console.error(`error: ${error.message}`)
        }
    })   
}

async function main() {
    await client.connect();
    
    console.log("Conectado a MongoDB");

    // Use base de datos de polo_digital
    db = client.db("polo_digital");

    await migrar_usuarios()
    //await migrar_clientes() Crear función

    const collection = db.collection("usuarios"); // Esto selecciona la tabla usuarios
    
    // Busca información dentro de la colección
    const result = await collection.find().toArray();

    console.log(result);
    
    return true;

    }

    main()
        .then(()=>{
            console.log("Completado")
        }).catch((error)=>{
            console.error(error);
        }).finally(()=>{
            client.close();
        })