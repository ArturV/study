// JS String, Number ir Boolean metodai

const userName = "Petras";

console.log(userName.charAt(0)); // grazins: P
console.log(userName.toUpperCase()); // grazins: PETRAS
console.log(userName.toUpperCase().charAt(1)); // grazins: E

// boolean

const isLegalAge = true;

console.log(isLegalAge);
console.log(isLegalAge.toString());

// Number

//1 Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją alert()
//ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).

// 2 Pakoreguok pirmą pratimą, kad alert taip pat ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur).
// metodas toFixed()

const milkPrice = 2.0;
const milkPriceCents = milkPrice.toFixed(2);
console.log(milkPriceCents);

const asTrue = Number.isInteger(milkPrice);

if (asTrue) {
  // alert(`Nereikes centu, Kaina: ${milkPriceCents}`);
  console.log(`Nereikes centu, Kaina: ${milkPriceCents}`);
} else {
  //alert(`krapstyk centus, Kaina: ${milkPriceCents}`);
  console.log(`krapstyk centus, Kaina: ${milkPriceCents}`);
}

//3 Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML): viename įvedame kainą
//su trim skaičias po kablelio, antrame - degalų kiekį, su vienu skaičiu po kablelio
//(HTML naudojame step="0.1" atributą pasakyti kiek skaičių po kablelio vartotojas gali paduoti).
//Pavyzdžiui: 1.399Eur x 5.1L. Pateikus duomenis - vartotojui apačioje turi išmesti kainą h1 laukelyje
//(sukuriame su JS), su dviem skaičiais po kablelio (pvz. 7.13 Eur).

const createHeader = document.createElement("h1");
const inputPrice = +document.querySelector("#price").value;
const inputFuel = +document.querySelector("#fuel").value;
const button = document.querySelector("#calculate");

const getPrice = (price, fuel) => {
  return (price * fuel).toFixed(2);
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  getPrice(inputPrice, inputFuel);
  console.log(getPrice());
  createHeader.append(getPrice());
});

// string

/*

tekstas1.includes(tekstas2) <- tikrina ar tekstas2 yra tekstas1 viduje (grąžina boolean reikšmę);
tekstas.slice() <- apkarpo tekstą pagal paduodamus parametrus (t.y. nukerpa pradžią ar/ir galą);
tekstas.trim() <- ištrina priekyje teksto padėtus tarpelius;
tekstas.toUpperCase(), tekstas.toLowerCase() <- didina/mažina teksto kapitalizaciją (pvz. "a" => "A").
tekstas.repeat(skaičius) <- atkartoja tekstą tiek kartų, kiek nurodo skaičius.
tekstas.split(parametras) <- padalina tekstą į kelias dalis (pagal paduotą parametrą) ir grąžina array (pvz. per tarpelį: "BMW AUDI".split(" ") => ["BMW", "AUDI"]).

*/

// Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių.
//Pirma, patikrink ar skaičius sveikas (jei ne - alert). Jei sveikas, po apačia
//sukurk h1 elementą kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.

const buttonGo = document.querySelector("#button-go");

buttonGo.addEventListener("click", (e) => {
  e.preventDefault();

  const inputNumber = +document.querySelector("#repeat-number").value; // turi buti viduje, kad gautu duomenis
  const inputName = document.querySelector("#client-name").value;

  console.log(`traukiam: ${inputNumber}`);

  let isInteger = Number.isInteger(inputNumber);
  const createH1 = document.createElement("h1");

  if (isInteger === true) {
    let i = 0;
    while (i < inputNumber) {
      createH1.textContent = inputName;
      document.body.append(createH1);

      console.log(inputName);
      console.log(isInteger);
      i++;
    }
  } else {
    console.log(isInteger);
    alert("Skaicius nera sveikas");
  }
});

/*
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = e.target.elements.fullname.value.trim();
  const userName = document.createElement("h1");
  userName.textContent = fullName.split(" ")[0];
  const userSurName = document.createElement("h1");
  userSurName.textContent = fullName.replace(userName.textContent, "");
  document.body.append(userName, userSurName);
});
*/
