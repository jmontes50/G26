// const main = document.querySelector('main');
// console.log(main);
//createElement: me va a permitir crear elementos que representen elementos del HTML

//document.createElement("EtiquetaHTML")
//creamos la silla aparte, afuera en un taller
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

//Modificando atributos
imagen.setAttribute("alt", "pinguino tomando sol");
imagen.style.width = "400px";

//si intentamos obtener algo que todavia no existe, no lo vamos a encontrar, es importante tener en cuenta que se esta renderizando y si al momento de buscar algo eso existe
const primicia = document.getElementById("primicia");
console.log("primicia", primicia);

///////////
const olimpiadas = document.getElementById('olimpiadas');
//no deja de ser un string, me puede traer problemas porque hasta que lo añada no existe
olimpiadas.innerHTML = `
    <p id="primicia">
        Turco gana 2da medalla de plata en tiro
    </p>
`;

//creamos un elemento
let divDeportes = document.createElement('div');
//le llenamos de html como string
divDeportes.innerHTML = `
    <p id="futbol">Partidos de hoy</p>
    <p id="voley">Semifinales</p>
    <p id="velero">Perú medalla de bronce</p>
`;
//añadimos el elemento ya llenito a un elemento que ya existe dentro del HTML como olimpiadas
olimpiadas.appendChild(divDeportes);

