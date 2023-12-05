const {MongoClient} = require("mongodb");
const mysql = require("mysql2");

const url = "mongodb://127.0.0.1:27017";
const mongoConnection = new MongoClient(url);
let mongoDatabase;


const connectionMysql = mysqlConnection.createConnection({
    host: "localhost",
    user: "root",
    password: "Lv++2023+",
    database: "polo_digital"
})

const collection = mongoDatabase.collection('clientes')
// connection.connect(function(error){
//     if(error){
//         return console.log(`error: ${error.message}`)
//     }
//     console.log("Conectado a MySQL");
// })

async function migrar_usuarios(){
    const collection = mongoDataBase.collection("clientes");
    connection.query("SELECT email, password FROM clientes", function(error, result, fields){
        if(error){
            return console.error(`error: ${error.message}`)
        }
    })   
}

async function main() {
    // Conectar mongo
    await mongoConnection.connect();
    console.log("Conectado a MongoDB");

    // Conectar MySql
    mysqlConnection.connect(function(error){
        if(error){
            return console.log(`error: ${error.message}`);
        }
        console.log("Conectado a MySQL")
    })

    // Seleccionar base de datos de polo_digital
    mongoDatabase = client.db("polo_digital");

    await migrar_usuarios()
   return true; 


    }

    main()
        .then(()=>{
            console.log("Completado")
        }).catch((error)=>{
            console.error(error);
        })
        // .finally(()=>{
        //     client.close();
        // })
        