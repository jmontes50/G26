//Si importamos algo por defecto le podemos cambiar el nombre
import Sumatoria from "./06-secundario.js";
//al importar cosas que no sean por defecto, tenemos que traerlo entre llaves {}
//también tenemos que resperar los nombres de lo que traemos
import { PI, medidas } from "./06-secundario.js";

const res = Sumatoria(10, 20);

console.log(res);

console.log({ medidas });

console.log({ PI });