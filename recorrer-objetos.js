let readline = require("readline-sync");


let datos = [
    {
        Nombre: "Luis",
        Apellido: "Ventura",
        Edad: 46,
        Sexo: "Masculino",
        Nacionalidad: "Dominicana",

    },
    {
        Nombre: "Jamila",
        Apellido: "Arykbaeva",
        Edad: 38,
        Sexo: "Femenino",
        Nacionalidad: "Italiana",

    },
    {
        Nombre: "Nadia",
        Apellido: "Ventura",
        Edad: 15,
        Sexo: "Femenino",
        Nacionalidad: "Dominicana",
    },
    {
        Nombre: "Frida",
        Apellido: "Ventura",
        Edad: 2,
        Sexo: "Femenino",
        Nacionalidad: "Española",
    },
]

for (i = 0; i < datos.length; i++) {
    console.log("-------------------------")
    console.log("El nombre es " + datos[i].Nombre);
    console.log("El apellido es " + datos[i].Apellido);
    console.log("La edad es " + datos[i].Edad);
    console.log("El sexo es " + datos[i].Sexo);
    console.log("La nacionalidad es " + datos[i].Nacionalidad);
}