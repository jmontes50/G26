//createElement: me va a permitir crear elementos que representen elementos del HTML

//document.createElement("EtiquetaHTML")
const imagen = document.createElement("img");
//solamente existe dentro de JS como un objeto
console.log(imagen);

const novedades = document.getElementById("novedades");
//appendChild(un elemento), agrega un elemento como hijo de otro elemento
//elementoPadre.appendChild(nuevoElementoHijo)
novedades.appendChild(imagen);