/*
1. Sukurkite funkciją, į kurią būtų paduotas vietas parametras - n. 
Jis pasakys kokio dydžio L raidė turi būti (ji sudaryta iš daug mažų L raidžių).
t.y. jei kviesite funkciją fn(4), tai turėtų atspausdinti tokį rezultatą:
L
L
L
L L L L
*/
const inputNumber = +prompt("Iveskite skaiciu");

const fn = (number) => {
  for (let index = 0; index < number - 1; index++) {
    const paragraph = document.createElement("p");
    paragraph.textContent = "L";

    const writeLvertical = document
      .querySelector("#place-vertical")
      .append(paragraph);
  }

  for (let ind = 0; ind < number; ind++) {
    const writeLhorizontal = document
      .querySelector("#place-horizontal")
      .append("L  ");
  }
};

fn(inputNumber);

/*
2. Sukurkite panašią funkciją, kuri atspausdintų C raidę.
t.y. jei kviesite funkciją fc(5), tai turėtų atspausdinti tokį rezultatą:
CCCCC
C
C
C
CCCCC

*/

/*
const fc = (number2) => {
  const divC = document.querySelector("#c");

  for (let i = 0; i < number2; i++) {
    divC.textContent = "CC";
    // divC.innerHTML = "<p>x</p>h";
  }
};

fc(inputNumber);
*/

function drawC(event) {
  const size = Number(event.target.value);
  const outputElement = document.getElementById("output");

  if (size < 3) {
    outputElement.innerHTML = "C letter size must be at least 3";
    return;
  }

  let output = "";
  for (i = 0; i < size; i++) {
    output += "C";
  }
  output += "<br>";
  for (i = 0; i < size - 2; i++) {
    output += "C<br>";
  }
  for (i = 0; i < size; i++) {
    output += "C";
  }
  outputElement.innerHTML = output;
}

document.getElementById("size").addEventListener("input", drawC);
//eof

const kubiloKaina = 50.25;
const pricelocal = document.querySelector("#kubilo-kaina").append(kubiloKaina);

//3 Sukurkite input (be mygtuko), į kurį įrašius vardą ir nulipus nuo input
//(t.y. blur event), vardas atsiras po apačia, tvarkingame sąraše (su kableliais):
//Pvz.: Petras, Jonas, Mantas, Antanas.

/*
const inputNames = document.querySelector("#names");

inputNames.addEventListener(
  "blur",
  (event) => {
    event.target.style.background = "green";
    event.target.body.append = "done";
  },
  true
);
*/

function addNameToList(event) {
  const name = event.target.value.trim();
  const outputElement = document.getElementById("output");
  if (name) {
    outputElement.innerText += `${name}, `;
  }
}

document.getElementById("names").addEventListener("blur", addNameToList);

//4 Sukurkite formą su dviem inputais, kurie paims skaičius. Suvedus duomenis -
// turi alert'int skaičių, kuris arčiausiai 100. Pvz.: fn(101, 81) grąžins 101.

const numberOne = +document.querySelector("#number1").value;
const numberTwo = +document.querySelector("#number2").value;

const check = (numberFirst, numberSecond) => {
  const fixNumber = 100;
  numberFirst = numberOne;
  numberSecond = numberTwo;

  if (fixNumber - numberFirst < fixNumber - numberSecond) {
    alert(numberFirst);
  } else {
    alert(numberSecond);
  }
};

check(numberOne, numberTwo);

//5 Sukurkite programą, kurioje pakrovus puslapį susigeneruoja skaičius tarp 1 ir 5.
// Vartotojas turi formą su vienu input - gali spėti skaičių. Atspėjus - išmeta alert(atspejai), kitaip alert(neatspejai).

let randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber);

function guessNumber(event) {
  event.preventDefault();
  const guessedNumber = Number(document.getElementById("guess").value);
  if (randomNumber === guessedNumber) {
    alert("Atspėjai");
  } else {
    alert("Neatspėjai");
  }
}

document.querySelector("form").addEventListener("submit", guessNumber);

//6 Pakoreguokite penktą pratimą, kad skaičiuotų iš kelinto karto atspėjai ir tai parašytų alert'e.

/*

let counter = 0;
let randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber);

function guessNumber(event) {
  event.preventDefault();
  counter++;
  const guessedNumber = Number(document.getElementById('guess').value);
  if (randomNumber === guessedNumber) {
    alert(`Atspėjai iš ${counter} karto`);
  }
  else {
    alert("Neatspėjai");
  }
}

document.querySelector('form').addEventListener('submit', guessNumber);

*/
