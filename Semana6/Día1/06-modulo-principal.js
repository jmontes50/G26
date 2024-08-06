//Si importamos algo por defecto le podemos cambiar el nombre
// import Sumatoria from "./06-secundario.js";
//al importar cosas que no sean por defecto, tenemos que traerlo entre llaves {}
//también tenemos que respetar los nombres de lo que traemos
//para utilizar alias, utilizamos as ---> francisco as pancho
// import { PI, medidas as sizes } from "./06-secundario.js";

import Sumatoria, { PI, medidas as sizes } from "./06-secundario.js";
//import * as todo from "ubicacion"

const res = Sumatoria(10, 20);

console.log(res);
// console.log({ medidas });
console.log( sizes );

console.log({ PI });