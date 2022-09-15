//Sukurk variable 'legalAge', kuris būtų lygus 20. Antra variable 'clientAge' su bet kokiu
//skaičiumi. Pasirašyk if-else, kuris alert išmestų ar klientas jau pasiekęs šį legalAge, ar dar ne.

const legalAge = 20;
const clientAge = prompt("Iveskite skaiciu");

if (clientAge <= legalAge) {
  alert("Amzius mazesnis negu 20m");
} else alert("Amzius >20m");

//Pasirašyk kintamą su savo vardu. Sukurk if-else, kuris pasakys "Ilgas vardas", jei tavo vardas
//ilgesnis nei 6 raidės. Kitu atveju, nieko neišmes. String ilgį gali susižinoti prirašant
//'length' property (pvz.: "Petras".length arba su kintamu: name.length).

const myName = "Arturas";
if (myName.length > 6) {
  console.log("Ilgas vardas");
}

//Sukurt kintamąjį su savo amžiumi. Patikrink: jei amžius didesnis nei 100, arba mažesnis nei 0 - tegul išmeta
//"Invalid age"; jei tarp 1 ir 18 - "Child"; jei tarp 19 ir 99 - "Adult"

const years = 50;
if (years > 100 || years < 0) {
  console.log("Invalid age");
} else {
  if (years > 1 && years < 18) {
    console.log("Child");
  }

  if (years > 19 && years < 99) {
    console.log("Adult");
  }
}

//Sukurk variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui.
// Sukurk if-else, kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam.
//VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
//BMW group priklauso: BMW, Mini, Rolls-Royce.

const car = "Bmw";
const vwGroup = ["Vw", "Audi", "Bentley", "Bugatti", "Lambo", "Porsche"];
const bmwGroup = ["Bmw", "Mini", "Rolls-Royce"];

if (vwGroup.includes(car)) {
  console.log("Auto priklauso VW koncernui");
} else if (bmwGroup.includes(car)) {
  console.log("Auto priklauso BMW koncernui");
} else {
  console.log("Auto priklauso nezinomam koncernui");
}
