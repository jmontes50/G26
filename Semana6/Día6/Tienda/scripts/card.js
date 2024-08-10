//podemos crear una funcion que represente un elemento
const Card = (product) => {
  //desestructuración
  const { nombre, descripcion, price, imagen, id } = product;
  //crear una tarjeta de bootstrap
  const divCard = document.createElement("div"); //<div></div
  //añadir una clase a un elemento
  divCard.classList.add('card'); //<div class="card" ...></div>
  divCard.innerHTML = `
    <img class="card-img-top" src="${imagen} alt="foto ${nombre}" />
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="fs-6 text-secondary">S/ ${price}</p>
      <p class="card-text">
        ${descripcion}
      </p>
      <button class="btn btn-primary btn-sm">Click!</button>
    </div>
  `;

  return divCard;
}

export default Card; //01 sólo