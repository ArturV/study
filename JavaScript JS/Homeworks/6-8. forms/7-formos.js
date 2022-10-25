//1. Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų.
//Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų).
// O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų). Parašyk programą, kuri leistų
//darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu.
// Pvz: [16] => "Jūsų bonusas: 100 eurų".

/*
const bonusCash = 50;
const bonushCash10 = bonusCash + 50;
const bonusCash20 = bonushCash10 + 100;
const stringBonus = "Jūsų bonusas: ";

const workTime = prompt("Iveskte kiek dirbate imoneje");
if (workTime < 10) {
  document.querySelector("#bonus-output").textContent = bonusCash;
} else if (workTime >= 10 && workTime < 20) {
  document.querySelector(
    "#bonus-output"
  ).textContent = `${stringBonus} ${bonushCash10}`;
} else if (workTime >= 20) {
  document.querySelector("#bonus-output").textContent = bonusCash20;
}

*/

const formData = document.querySelector("#first-form");
const formOutput = document.querySelector("#bonus-output");

formData.addEventListener("submit", (event) => {
  event.preventDefault();
  const workTime = document.querySelector("#work-time").value;
  const stringBonus = "Jūsų bonusas: ";
  let bonus = 50;
  if (workTime >= 10) {
    bonus += 50;
  }
  if (workTime >= 20) {
    bonus += 100;
  }
  document.querySelector(
    "#bonus-output"
  ).textContent = `${stringBonus} ${bonus}`;

  //arba:
  // document.getElementById('bonus-output').innerText = `Jūsų premija: ${bonus}`;
});

//2

//3
//Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi,
//o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu.

const converterData = document.querySelector("#converter");

converterData.addEventListener("submit", (event) => {
  event.preventDefault();
  const converterOutput = document.querySelector("#farenheit");
  const getCelsius = document.querySelector("#celsius").value;
  let farenheit = (getCelsius * 9) / 5 + 32;
  converterOutput.textContent = `${farenheit} F`;
});

//4
//Sukurk programą, kurioje reikia įvesti elektroninį paštą ir
//paspausti mygtuką "sutinku gauti laiškus".
//Suvedus duomenis, jei mygtukas "sutinku" nepasirinktas - išmeta -
//"Registracija nesėkminga.
//Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai
// užregistruotas".

const getEmailForm = document.querySelector("#newsletter");

getEmailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const getEmail = document.querySelector("#email").value;
  const output = document.querySelector("#output");
  const isCheckeStatus = document.querySelector("#aproove:checked") !== null;

  if (isCheckeStatus === true) {
    output.textContent = `El. paštas ${getEmail} sėkmingai užregistruotas`;
  } else {
    output.textContent = "Registracija nesekmniga";
  }
});

//5
//Sukurk programą, kurioje bus du inputai - vardas (text) ir skaičius
// (number) ir tuščias <ul>. Įrašius formoje duomenis, po apačia turi
// susikurti list itemų tiek, kiek tu parašei skaičių. List itemuose
// turi būti tavo vardas :)

function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const numberOfElements = Number(
    document.getElementById("numberOfElements").value
  );

  const list = document.getElementById("list");
  list.innerHTML = "";
  for (let i = 0; i < numberOfElements; i++) {
    const listItem = document.createElement("li");
    listItem.innerText = name;
    list.append(listItem);
  }
}

document.querySelector("form").addEventListener("submit", handleFormSubmit);

//6.
//Sukurkite formą, kurioje vienas input - skaičius, įvesti stačiakampio dydį. Po forma - tegul būna tusčias div elementas.
// Jame reikia atvaizduoi trikampį pagal įvestą input. Šis pratimas - klasika programavimo ciklų srityje, tiek atsakymų,
//tiek teorijų, tiek sąmokslo teorijų internete - daugiau nei reikia; pasibaigus ar pastrigus - būtinai pasinagrinėkite
//(gal vienas iš paaiškinimų jums atvers duris į ciklų pasaulio aiškumą).
//Pvz:
//Įvesta: 2
//Rezultatas:
//*
//**

function drawTriangle(event) {
  event.preventDefault();
  let triangleSize = Number(document.getElementById("triangleSize").value);
  const outputElement = document.getElementById("output2");

  let output = "";
  for (i = 0; i < triangleSize; i++) {
    for (j = 0; j <= i; j++) {
      output += "*";
    }
    output += "<br>";
    outputElement.innerHTML = output;
  }
}

document.querySelector("form").addEventListener("submit", drawTriangle);
