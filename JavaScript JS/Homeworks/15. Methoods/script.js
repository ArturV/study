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
