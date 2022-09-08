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

// pratybos ciklai 1. Padaryk, kad kompiuteris 10 kartų paconsole'intų tavo vardą

for (let nameCount = 1; nameCount <= 10; nameCount++) {
    console.log("Arturas");
}

// pratybos ciklai 2. Pakoreguok pirmą pratimą, kad tiek vardas, tiek kiek kartų kartos - būtų kintamieji. 
//3. Prie savo vardo atspaudink ir  raidę, t.y. kelintas ciklas yra

let inputName = prompt("iveskite varda");
let inputQty = prompt("iveskite kiek kartu kartojam");

while (inputQty) {
    console.log(`${inputQty}. ${inputName}`)
    inputQty--;
}

// pratybos 4 Parašyk for loopą, kuris atspaudins nuo 10 iki 1 countdown konsolėje.
for (let i = 10; i > 0; i--) {
    console.log(i);
}

//** JS math pratybos */

const random1 = Math.random(); // math.random [0,1)
const random2 = Math.random() * 10; // math.random 
const random3 = Math.floor(Math.random() * 10); // math.random [0,9]
const random4 = Math.floor(Math.random() * 10) + 1; // math.random [0,10]

console.log(random1);
console.log(random2);
console.log(random3);

// 0908 paskaita 
const userAgreements = [true, false, true, false, true, true];

for (let i = 0; i < userAgreements.length; i++) {
    console.info(userAgreements[i]); // isvedame masyvo elementus
}


