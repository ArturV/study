/*
1. Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir jį pa'alert'ins jį :)
2. Ir ne visos funkcijos turi parametrus - sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.
3. Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).
4. Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę. Jei primiršot array - pasižiūrėkite čia.
5. Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch.
6. Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita - gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).
*/

//1
function nameAlert() {
  const input = prompt("iveskite vardas");
  alert(input);
}

//nameAlert();

// 2
function generateRandomNumber(min, max) {
  //let random = (Math.random() * 10) | 0;
  let random = (Math.random() * (max - min) + min) | 0;
  console.log("Random [1..5]: ", random);
}
generateRandomNumber(1, 6);

// 3

function NameLength(name, surname) {
  const length = name.length + surname.length;
  console.log("Paduotu zodziu ilgis: ", length);
  return name.length + surname.length;
}

NameLength("Petras", "Mezenas");

//4

/*
const getSymbol = (input) => {
  const abc = []; // abc masyvas
  abc[0] = "a";
  abc[1] = "b";
  abc[2] = "c";
  abc[3] = "d";
  abc[4] = "e";
  abc[5] = "f";
  abc[6] = "g";
  abc[7] = "h";

  input = abc;
  console.log(input);
};
getSymbol(2);
*/

function getLetterByIndex(index) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  console.log(alphabet[index]);
  return alphabet[index];
}
getLetterByIndex(2);

//5

function calculate(n1, n2, operator) {
  switch (operator) {
    case "sum":
      return n1 + n2;
    case "sub":
      return n1 - n2;

    case "div":
      return n1 / n2;

    case "multi":
      return n1 * n2;
  }
}

console.log(calculate(10, 5, "multi"));

//6

function getRandomeNumber() {
  const generatedNumber = Math.floor(Math.random() * 10 + 1);
  console.log("Random number: ", generatedNumber);
  return generatedNumber;
}

//getRandomeNumber();

function squareNum(number) {
  console.log(Math.pow(number, 2));
  return Math.pow(number, 2); // keliame laipsniu: Math.pow
}

squareNum(getRandomeNumber());
