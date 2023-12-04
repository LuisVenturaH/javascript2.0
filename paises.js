// const { response } = require("express");

const url = 'https://restcountries.com/v2/name/';

const busqueda = document.querySelector('#input');
const envio = document.querySelector('#submit');
const respuesta = document.querySelector('#respuesta');

const muestraResultados = (res) => {
    const capital = res[0].capital;
    const moneda = res[0].currencies[0].name;
    respuesta.innerHTML = `<h2>La capital es ${capital} y su moneda es ${moneda} </h2>`;
}


const recibeInfo = async () => {
    const buscaPais = busqueda.value;
    const endpoint = `${url}${buscaPais}`;

    try {
        const response = await fetch(endpoint, {cache: 'no-cache'});
        if(response.ok) {
            const jsonResponse = await response.json();

            muestraResultados(jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }
}

envio.addEventListener('click', recibeInfo);


