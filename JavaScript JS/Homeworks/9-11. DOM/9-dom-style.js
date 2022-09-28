document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.background = "blue";
document.querySelector("h1").style.width = "50%";
document.querySelector("h1").style.padding = "2rem 1rem";
document.querySelector("h1").style.borderRadius = "2rem";

document.querySelector("button").addEventListener("click", () => {
  document.querySelector("h1").style.color = "white";
});

//1
//H1 elemente parašykite savo vardą. Paspaudus ant vardo - tegul jūsų vardas
//atsiranda per vidurį ekrano, dvigubai didesniu font'o dydžiu ir raudona spalva.

document.querySelector("h2").append("Vardas");
document.querySelector("h2").addEventListener("click", () => {
  document.querySelector("h2").style.color = "red";
  document.querySelector("h2").style.fontSize = "50px";
  document.querySelector("h2").style.textAlign = "center";
});

//2 Išbandome ekraną. Sukurkite mygtuką su HTML. JS pasirašykite, kad mygtukas position: absolute
// ir jo lokacija - viršus, kairė. Paspaudus ant mygtuko, jis turi peršokti į apačią dešinę pusę.
// Paspaudus vėl - į viršų, kairę pusę. Ir taip šokinėti įstrižai per ekraną kiekvieno paspaudimo metu.

const buttonJump = document.querySelector("#jump-button");

buttonJump.style.cssText = "position:absolute; top:0; left:0";

let originalPosition = true; // ikelus i vidu neveiks, nesikeis reiksme, del to keliame pries f-ja

buttonJump.addEventListener("click", (event) => {
  if (originalPosition) {
    buttonJump.style.cssText = "position:absolute; bottom:0; right:0";
    originalPosition = false;
  } else {
    buttonJump.style.cssText = "position:absolute; top:0; left:0";
    originalPosition = true;
  }
});

//3 Pakoreguokite antrą pratimą, kad mygtukas suktųsi ratu - laikrodžio rodykle.

const button = document.querySelector("#jump-button-next");
button.style.cssText = "position:absolute; top:0; left:0";

let corner = 0;
const cornerStyles = [
  "position:absolute; top:0; right:0;",
  "position:absolute; bottom:0; right:0;",
  "position:absolute; bottom:0; left:0;",
  "position:absolute; top:0; left:0;",
];
function changePosition(event) {
  if (corner < cornerStyles.length) {
    event.target.style.cssText = cornerStyles[corner];
    corner++;
  }
  if (corner === cornerStyles.length) {
    corner = 0;
  }
}

button.addEventListener("click", changePosition);

//4
//Sukurkite input elementą (formos ar mygtuko nereikia), kur vartotojas galės įrašyti savo vardą.
// Kai rašo - keičiasi puslapio stilius. Jei įrašytos yra du simboliai arba mažiau - viso puslapio
//fonas raudonas. Jei daugiau nei du simboliai - puslapio fonas žalias.

const inputName = document.getElementById("name");
//const namez = document.querySelector("#name").value;

inputName.addEventListener("input", (event) => {
  const name = document.querySelector("#namez").value;
  document.body.style.backgroundColor = namez.length < 3 ? "red" : "green";
});

//5
//Sukurkite mygtuką HTML'e. O su JS pasirašykite array su keturiom spalvom (["red", "green", "blue", "yellow"]).
//Paspaudus ant mygtuko - tegul jo spalva pasikeičia į atsitiktinę spalvą

const colors = ["red", "green", "blue", "yellow"];
const colorButton = document.querySelector("#color-button");

colorButton.addEventListener("click", () => {
  const randomColor = Math.floor(Math.random() * colors.length);
  console.log(colors[randomColor]);
  colorButton.style.backgroundColor = `${colors[randomColor]}`;
});

//6

const randomRGB = document.querySelector("#rgb-button");

randomRGB.addEventListener("click", () => {
  const randomRgbColor = parseInt(1 + Math.random() * 255) | 0;
  const randomRgbColor2 = parseInt(1 + Math.random() * 255) | 0;
  const randomRgbColor3 = parseInt(1 + Math.random() * 255) | 0;
  console.log(randomRgbColor);
  randomRGB.style.backgroundColor = `rgb(${randomRgbColor},${randomRgbColor2},${randomRgbColor3})`;
});

// kitas sprend.

function generateRandomColor() {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  return `rgb(${r},${g},${b})`;
}

document
  .querySelector("#rgb-button-next")
  .addEventListener("click", (event) => {
    event.target.style.backgroundColor = generateRandomColor();
  });
