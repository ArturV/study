// functions & methoods

//1 Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds").
//Pvz: fn(3) => "180 seconds".

const fn = (number) => {
  return number * 60;
};

console.log(fn(3));

//2 Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno (skaičių,
//metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos). Pvz: fn(20) => 7300.

const fnDays = (number) => {
  return number * 365;
};

console.log(fnDays(20));

//3 Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių – ji grąžintų jo kvadratą.
//Pvz.: fn(5) -> 25

const quadrat = (number) => {
  return Math.pow(number, 2); // ARBA number**2;
};

console.log(quadrat(5));

// 4 Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų trikampio plotą
// ((aukštis * plotis) / 2) Pvz: fn(10, 10) -> 50

const plot = (height, weight) => {
  return (height * weight) / 2;
};

console.log(plot(10, 10));

// 5 Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę.
//pvz. Paduodu: "Petras", grąžina "s".

const lastLetter = () => {
  const text = "Petras";
  console.log(text.slice(-1)); // arba: const fn = (text) => text.charAt(text.length - 1);
};

lastLetter();

// 6. Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis. T.y. "Petras" -> "sartep"

const reverseWord = (str) => {
  let newWord = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newWord += str[i];
  }

  console.log(newWord.toLowerCase());

  return newWord.toLowerCase();
};

reverseWord("Petras");

// arba: const fn = (text) => text.split("").reverse().join("").toLowerCase();

//7 Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.
//pvz: [-1, -100, -5, 10, 0, 11] -> "-1"

const arr = [-1, -100, -5, 10, 0, 11];

const fnArray = (arr) =>
  console.log(arr.filter((x) => x < 0).sort((a, b) => b - a)[0]);

fnArray(arr);

//8 Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random
//skaičių (nuo 1 - 10)), kiek parametre nurodyta. T.y. "3" => [1, 6, 3].

const howManyNumbersToGenerate = 3;
let array = [];

for (let i = 0; i < howManyNumbersToGenerate; i++) {
  const randomNumber = (1 + Math.random() * 10) | 0;
  array.push(randomNumber);
}

console.log(array);

//9 Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value ar skaičių
//suma didesnė už 100 ar mažesnė (ir lygi).Pvz.: fn(10, 50) -> true

const isBiggerThanHundred = (n1, n2) => {
  const fix = 100;

  if (n1 + n2 <= fix) {
    console.log("true");
  } else {
    console.log("false");
  }
};

isBiggerThanHundred(10, 50);

// 10 Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium) bei grąžina
//array išrykiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka.
//Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}, {name: „Kasparas“, age: 20}]) ->
//[{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}]

const fn2 = (array) =>
  array
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .sort((a, b) => a.age - b.age);

//11 Parašykite funkciją, į kurią padavus datą, pasakys ar išeiginė ar ne (visos išeiginės turi būti saugomos array.)
//Pvz.: fn(new Date(2020, 12, 25)) -> true

function isItHoliday(date) {
  const holidays = ["2020-01-01", "2020-05-25"];
  return holidays.some(
    (holiday) => new Date(holiday).getDate() === date.getDate()
  );
}

console.log(isItHoliday(new Date("2020-05-25")));

//12 Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3

const missingNumber = (array) =>
  array.find((x, i) => x + 1 !== array[i + 1]) + 1;

// OBJEKTAI

//1. Pasakykite skaičių kiek vyrų yra tarp šių duomenų (t.y. console'log skaičių).
console.log(data.filter((person) => person.gender === "Male").length);

//2. Sukurkite masyvą, kuriuose būtų id visų žmonių, kurie turi automobilius naujesnius nei 2000 metai.
console.log(
  data.filter((person) => person.car_year > 2000).map((person) => person.id)
);

//3. Sukurkite masyvą visų žmonių, kurių marškinių dydžiai XS arba S; ir surūšiuokite šį masyvą pagal vardus, A-Z tvarka (alfabetiškai).
console.log(
  data
    .filter((person) => person.shirt_size === "XS" || person.shirt_size === "S")
    .sort((a, b) => (a.first_name > b.first_name ? 1 : -1))
);

//4. Pakoreguokite trečią pratimą, kad masyve matytųsi tik id, vardas bei marškinių dydis.
console.log(
  data
    .filter((person) => person.shirt_size === "XS" || person.shirt_size === "S")
    .map((person) => ({
      id: person.id,
      first_name: person.first_name,
      shirt_size: person.shirt_size,
    }))
    .sort((a, b) => (a.first_name > b.first_name ? 1 : -1))
);
