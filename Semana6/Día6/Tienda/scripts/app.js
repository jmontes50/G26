import { getProducts } from "./dataService.js";

const app = async () => {
  const products = await getProducts();
  console.table(products);
}
app();