import useModal from "./modal.js";

//podemos crear una funcion que represente un elemento
const Card = (product) => {
  //desestructuración
  const { nombre, descripcion, price, imagen, id } = product;
  //crear una tarjeta de bootstrap
  const divCard = document.createElement("div"); //<div></div
  //añadir una clase a un elemento
  divCard.classList.add('card'); //<div class="card" ...></div>
  divCard.innerHTML = `
    <img class="card-img-top" src="${imagen}" alt="foto ${nombre}" />
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="fs-6 text-secondary">S/ ${price}</p>
      <p class="card-text">
        ${descripcion}
      </p>
      <button class="btn btn-primary btn-sm">Click!</button>
    </div>
  `;
  const button = divCard.querySelector('button'); //busca como si fuera CSS, en este caso seria como si buscara: button {}, directamente por la etiqueta HTML

  button.addEventListener('click', () => {
    useModal(`ID: ${id} | NOMBRE: ${nombre}`);
  });

  return divCard; //objeto
}

export default Card; //01 sólo