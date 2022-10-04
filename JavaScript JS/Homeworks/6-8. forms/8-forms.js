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

//
const kubiloKaina = 50.25;
const pricelocal = document.querySelector("#kubilo-kaina").append(kubiloKaina);
