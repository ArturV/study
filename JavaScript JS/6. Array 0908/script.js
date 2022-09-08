/**Array**/

const productPrices = [5, 7, 9, 2, 4.5];

productPrices.push(8); // prideda i gala
productPrices.shift(); // istrina pirma
productPrices.pop(); // istrina paskutini
productPrices.unshift(-18); // prideda pirma. labai nenasus

//delete productPrices[2]; // istrinti 3 elementa is masyvo, nes nuo 0. bet palieka masyvo ilgi kaip buvo. geriau nenaudoti
productPrices.splice(1, 1); //istrina 2 elementa ir pakeicia masyvo ilgi. 

console.log(productPrices);

console.log("********************");

