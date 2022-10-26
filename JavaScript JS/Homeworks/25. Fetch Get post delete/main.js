import { getProducts } from "./modules/getProducts.js";
import { renderProducts } from "./modules/renderProducts.js";
/*
Pratika: Fetch'inam su GET/POST/DELETE
Base URL = https://golden-whispering-show.glitch.me

1. Pasirašykite GET, kuris atsisiųs visus produktus ir atvaizduos vieną šalia kito (4 per eilutę):

2. Kitame puslapyje pasirašykite formą, kuri pridės produktą. Pridėjus, išmes alert'ą, kad sėkmingai
 pridėtas ir nukreips (redirect) į pirminį produktų atvaizdavimo puslapį.

3. Padarykite, kad paspaudus delete mygtuką - back-end'ui būtų išsiunčiamas Fetch Delete Request 
(baseURL + /:id). T.y. į url turėsite paduoti produkto ID parametrą (pvz.: DELETE baseURL/1 ištrins pirmą įrašą).

4. Padarykite, kad ištrynus produktą - puslapis persikrautų. Taip nėra labai efektyvu - pagalvokite,
 kokiais kitais būdais galima būtų pasiekti šį rezultatą? Hint: gavus success message iš back-end'o filtruoti duomenis ir ištrinti su front-end'u irgi.

*/

let products = await getProducts();

const onProductDelete = (deletedId) => {
  console.log(products);
  products = products.filter((product) => product.id !== deletedId);

  renderProducts(products);
};

renderProducts(products);

export { onProductDelete };
