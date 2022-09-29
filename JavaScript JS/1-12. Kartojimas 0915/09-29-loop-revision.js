for (let i = 0; i < 100; i++) {
  const isOddNumber = i % 2 === 1;

  if (isOddNumber) {
    // console.log(i);
  }
}

// ----------------

let i = 80;

while (i > 0) {
  const isDalinta5 = i % 5 === 0;

  if (isDalinta5) {
    console.log(i);
  }
  i--;
}

// -------------------

const names = ["Tomas", "Jonas", "Aiste", "Karolina", "Adomas"];

names.forEach((name, i) => {
  // forEach istraukia masyvo elementus ( istraukiam masyvo elementus )
  // masyvo elementai istraukiam
  if (i % 2 === 0) {
    // grazina kas antra varda
    console.log(name);
  }
});

//---------

const userNumber = +prompt("labas");
const randomNumber = Math.round(Math.random() * 1_000); // apvalina matematiskai  5.5 bus 6, 5.4 bus 5

console.log(randomNumber);

alert(Math.ceil(userNumber / randomNumber) ** 2); // apvalina i didesne puse pvz: 10.1 bus 11 ; **2 - pakeliam kvadratu
