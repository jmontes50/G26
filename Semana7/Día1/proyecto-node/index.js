//node para importar utiliza una sintaxis que se llama commonjs.
//import axios from "axios";
const axios = require('axios');

console.log("Hello World!");

axios.get('https://66b797cd7f7b1c6d8f1c4b3d.mockapi.io/productos')
.then((respuesta) => {
    console.log(respuesta);
    console.log('------------------------------------------');
    console.log(respuesta.data);
})
.catch((error) => {
    console.log(error);
})

