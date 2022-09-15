/*
Pratimai
3.1. Ar atsimenat paskutinį IF-ELSE pratimą? Būtent jį efektyviau apsirašyti su Switch, pasibandykime:
Sukurkite variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui. Aprašykite Switch, 
kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam.
VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
BMW group priklauso: BMW, Mini, Rolls-Royce.

3.2. Sukurkite variable 'userInput' ir pradžioje prilyginkite 'Obuolys'. Su Switch statement apsirašyk, 
kad 'userInput' reikmšmė yra - vaisius ar daržovė. Pridėkite bent 5 kiekvienos kategorijos (trūksta idėjų?
Wiki į pagalbą: vaisiai, daržovės).

3.3. Kokia šiandien diena? Sukurkite variable 'weekDay', kuris būtų lygus skaičiui - savaitės dienai, skaičiuojant
 nuo 0 (t.y. pirmadienis - 0; antradienis - 1; trečiadienis - 2 ir t.t.). Parašykite Switch statement, kuris paimtų skaičių ir jį pakeistų (ne sukurtų naują kintamąjį, o pakeistų 'weekDay' reikšmę) į savaitės dieną žodžiu. Vėliau, atspausdink kintamąjį.

*/

// pratybos switch 3.1

const car = "Bmw";
switch (car) {
  case "Bmw":
    console.info("Priklauso BMW koncernui");
    break;

  case "Mini":
    console.info("Priklauso BMW koncernui");
    break;

  case "Rolls-Royce":
    console.info("Priklauso BMW koncernui");
    break;

  case "VW":
    console.info("Priklauso VW koncernui");
    break;
  case "Audi":
    console.info("Priklauso VW koncernui");
    break;

  case "Buggati":
    console.info("Priklauso VW koncernui");
    break;

  default:
    console.info("Nepriklauso jokiam koncernui");
    break;
}

// pratybos switch 3.2

const userInput = "Morka";

switch (userInput) {
  case "Obuolys":
    console.info("Vaisiai");
    break;
  case "Kivi":
    console.info("Vaisiai");
    break;
  case "Arbuzas":
    console.info("Vaisiai");
    break;
  case "Mango":
    console.info("Vaisiai");
    break;
  case "Morka":
    console.info("Darzoves");
    break;

  default:
    console.info("nera kategorijos");
    break;
}

// pratybos switch 3.3

const weekDay = 5;

switch (weekDay) {
  case 0:
    console.info("Pirmadienis");
    break;

  case 1:
    console.info("Antradienis");
    break;
  case 2:
    console.info("Treciadienis");
    break;
  case 3:
    console.info("Ketvirtadienis");
    break;
  case 4:
    console.info("Penktadienis");
    break;
  case 5:
    console.info("Sestadienis");
    break;
  case 6:
    console.info("Sekmadienis");
    break;

  default:
    console.info("no date");
    break;
}

// kitas sprendimas

let weekDayN = new Date().getDay();
switch (weekDayN) {
  case 0:
    weekDayN = "Sekmadienis";
    break;
  case 1:
    weekDayN = "Pirmadienis";
    break;
  case 2:
    weekDayN = "Antradienis";
    break;
  case 3:
    weekDayN = "Trečiadienis";
    break;
  case 4:
    weekDayN = "Ketvirtadienis";
    break;
  case 5:
    weekDayN = "Penktadienis";
    break;
  case 6:
    weekDayN = "Šeštadienis";
    break;
}
console.log(weekDayN);
