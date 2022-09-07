for (let age = 10; age < 19; age = age + 1) { // age++ yra lygu age+1
    console.info(age);
}

let productCount = 5;
while (productCount >= 0) {
    console.log(`Produktu kiekis: ${productCount}`)
    productCount--;
}

//

let productCategories = 5;

do {
    console.log(`Vis dar neisparduotos: ${productCategories}`)
    productCategories--;
} while (productCategories >= 0);