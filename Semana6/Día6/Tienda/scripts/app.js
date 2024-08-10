import { getProducts } from "./dataService.js";
import Card from "./card.js";

const app = async () => {
  //ref. de <main class="col-12 row" id="main">
  const main = document.getElementById('main');
  //products es un array donde c/item es un obj
  const products = await getProducts();
  console.table(products);
  //recordemos que aquí según los items que tenga va a iterar y ejecutar el callback 1 x 1
  products.forEach((prod) => {
    const divCol = document.createElement('div');
    //vamos a agregarle clases a ese nuevo div que contenga las clases para que las tarjetas se muestren responsive
    divCol.setAttribute("class", "col-12 col-md-6 col-lg-4"); //<div class="col-12 col-md-6 col-lg-4">
    //a crear c/tarjeta
    const productCard = Card(prod);
    divCol.appendChild(productCard);
    main.appendChild(divCol);
  });
}
app();