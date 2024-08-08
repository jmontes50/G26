// const main = document.querySelector('main');
// console.log(main);
//createElement: me va a permitir crear elementos que representen elementos del HTML

//document.createElement("EtiquetaHTML")
//creando <img> que no esta dentro del dom, del html
const imagen = document.createElement("img");
//solamente existe dentro de JS como un objeto
imagen.src = "https://t2.ea.ltmcdn.com/es/posts/8/6/7/la_alimentacion_del_pinguino_20768_600.jpg";
console.log(imagen);

const novedades = document.getElementById("novedades");
//appendChild(un elemento), agrega un elemento como hijo de otro elemento
//elementoPadre.appendChild(nuevoElementoHijo)
//estamos agregando la silla a la habitación
//estamos colocando el elemento como el último hijo de un elemento padre
novedades.appendChild(imagen);