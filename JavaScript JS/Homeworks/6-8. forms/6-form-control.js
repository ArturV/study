// izanga - cheetsheet
/*
document.querySelector("form").addEventListener("submit", myFunction);

function myFunction(event) {
  event.preventDefault(); // padaro kad puslapis nepersikrautu
  console.log(event.target);
  console.log(event.target.elements.abc); // paimam butent abc input tipo elementa
  console.log(document.querySelector("input[name=abc]")); // - tas pats kaip 6 eiluteje

  console.log(document.querySelector("input[name=abc]").value); // - paima to elemento REIKSME
}
*/

/*
1. Sukurk input į kurį įvestum savo vardą. Submit paspaudus - išoktų alert su tavo vardu.

2. Sukurk input į kurį įvesi savo amžių. Padaryk, kad submit paspaudus, viršuj esančiame h1 
elemente atsirastų "Tavo amžius: [amžius]".

3. Sukurk du input - į vieną įrašysi savo vardą, į kitą - amžių. Jei daugiau nei 18 - išmeta h2 elemente 
"Vairuoti gali: [vardas]"; jei nėra išmeta: "Dar mokysis vairuotis: [vardas]".

4. Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi būti vienas input laukelis, kur 
žmogus įrašo savo amžių, o JS apskaičiuoja kainą ir išmeta ją h1 elemente. Standartinis bilietas – 6eu, 
iki 16 metų – 50proc nuolaida, 1/3 nuolaida vyresniems nei 60. Variable turi būti aprašyti viršuj, kad 
būtų lengva keist.

5. Kai kuriose šalyse reikia eiti į kariuomenę, jei tu tarp 18 ir 30, tačiau, jei neturi kriminalinio 
įrašo. Sukurk programą, kuri su input + radio button pasakytų ar tam žmogui gali reikėti eiti į kariuomenę
 (h1 elemente). Hint: pasirinkite su querySelector tik pažymėtą radio input (aha, yra toks CSS selektorius),
  ir perskaitykite jo reikšmę.

*/

// 1
document.querySelector("form").addEventListener("submit", getName);

function getName(event) {
  event.preventDefault();
  const inputName = document.querySelector("input[name=my-name]").value;
  //alert(document.querySelector("input[name=my-name]").value);
}

//2
document.querySelector("form").addEventListener("submit", getAge);

function getAge(event) {
  event.preventDefault();
  const inputAge = document.querySelector("input[name=age]").value;
  // alert(document.querySelector("input[name=age]").value);

  document.querySelector("span").textContent = inputAge;
  console.log(inputAge);

  //3
  if (inputAge >= 18) {
    document.querySelector("h2").innerHTML = "vairuoti gali";
  } else {
    document.querySelector("h2").textContent = "vairuoti ne gali";
  }
}

//4

const basePrice = 6;
const discount50 = basePrice / 2;
const discount33 = basePrice / 3;

//document.querySelector("form").addEventListener("submit", getClientAge);
document
  .querySelector("#teatro-forma")
  .addEventListener("submit", getClientAge);

function getClientAge(event) {
  event.preventDefault();
  const inputClientAge = document.querySelector("input[name=client-age").value;
  console.log(inputClientAge);
  return inputClientAge;
}

function getPrice() {
  getClientAge();
  if (inputClientAge > 0 && inputClientAge < 16) {
    console.log(discount50);
  } else if (inputClientAge > 60) {
    console.log(discount33);
  } else {
    console.log(basePrice);
    document.querySelector("#price-cost").textContent = basePrice.append("Eu");
  }
}

getPrice();

/*
const getClientAge = (event) => {
  event.preventDefault();
  const inputClientAge = document.querySelector("input[name=client-age]").value;
  console.log(inputClientAge);
};*/
//getClientAge();
