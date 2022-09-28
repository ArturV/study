/*Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi būti vienas input laukelis, kur 
žmogus įrašo savo amžių, o JS apskaičiuoja kainą ir išmeta ją h1 elemente. Standartinis bilietas – 6eu, 
iki 16 metų – 50proc nuolaida, 1/3 nuolaida vyresniems nei 60. Variable turi būti aprašyti viršuj, kad 
būtų lengva keist.

jei amzius tarp 18 ir 30, tačiau, jei neturi kriminalinio 
įrašo. Sukurk programą, kuri su input + radio button pasakytų ar tam žmogui gali reikėti eiti į kariuomenę
 (h2 elemente)
*/

const price = 6;
const discount33 = (price / 3).toFixed(2);
const discount50 = price / 2;
const formData = document.querySelector("form");
const pushPrice = document.querySelector("#price-cost");
const pushArmy = document.querySelector("#army");

//formData.addEventListener("submit", getPrice);
//formData.addEventListener("submit", getArmy);

formData.addEventListener("submit", (event) => {
  const inputAge = document.querySelector("input[name=age]").value;
  getPrice(event, inputAge);
  getArmy(event, inputAge);
});

function getPrice(event, inputAge) {
  event.preventDefault();
  //const inputAge = document.querySelector("input[name=age]").value;

  if (inputAge > 0 && inputAge <= 16) {
    console.log(discount50);
    document.querySelector("#price-cost").textContent = discount50;
  } else if (inputAge >= 60) {
    console.log(discount33);
    document.querySelector("#price-cost").textContent = discount33;
  } else {
    console.log(price);
    pushPrice.textContent = price + " Eu"; // per kintamaji (pushPrice) arba kaip 30 ir 27 eilutese
  }
}

function getArmy(event, inputAge) {
  event.preventDefault();
  getPrice(event);
  const getArmyStatus = document.getElementById("radio");
  // const inputAge = document.querySelector("input[name=age]").value;

  if (getArmyStatus.checked === false && inputAge >= 18 && inputAge <= 30) {
    pushArmy.textContent = "Go to army";
  } else pushArmy.textContent = "Not Go to army";
}
