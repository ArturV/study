// map - pereinam per array ir ji pakoreguojame
// filter - prafiltruoja masyva
// find - suranda pirma elementa
// every - ar visi atitinka tam tikra kriteriju
// foreach - atspasudinam visa array

// 1.Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).

const cars = ["BMW", "VW", "Audi"];

cars.forEach((value) => console.log(value));

//2. Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).

const newCars = cars.map((v, i) => i + ". " + v);
console.log(newCars);

//3 Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.).
//Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga
//kapitalizacija (pvz. "peTras" => "Petras").

const friends = ["jOnAs", "toMAS", "aGNE", "MARIUS", "darius"];

const correctFriends = friends.map(
  (names) => names.charAt(0).toUpperCase() + names.slice(1).toLowerCase()
);
console.log(correctFriends);

//4 Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.

const age = [19, 15, 27, 45, 98, 15, 12, 19, 18];

const isAdult = (value) => {
  return value >= 18;
};

const adultAge = age.filter(isAdult);
console.log(adultAge);

// console.log(age.filter((x) => x >= 18));  <-- galima ir taip buvo

//5. Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

const cities = ["Vilnius", "Utena", "Kaunas", "klaipeda"];
const findK = cities.find(
  (element) => element.charAt(0) === "k" || element.charAt(0) === "K"
);

console.log(findK);

// 6. Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.

console.log(cities.some((v) => v.charAt(0) === v.charAt(0).toLowerCase()));

// 7. Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda ir mažosios, bet ar visi iš didžiosios.

console.log(cities.every((v) => v.charAt(0) === v.charAt(0).toUpperCase()));
