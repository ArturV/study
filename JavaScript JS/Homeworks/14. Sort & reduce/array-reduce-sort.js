//1. Prafiltruojame masyvą, kad rodytų tik pilnamečius

const people = [
  {
    name: "Petras",
    age: "18",
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 20,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];

console.log(people.filter((x) => x.age >= 18));

//2. Pakoreguojame aukščiau nurodytą pratimą, kad pilnamečių array rodytų
//tik vardus (amžius jau nesvarbu). Tai rezultatas turi būti: ["Petras", "Antanas", "Diana"].

console.log(people.filter((x) => x.age >= 18).map((people) => people.name));

//3. Antro pratimo array A-Z tvarka išrykiuokite. Optimizuokite kodą, kad visas veiksmas tilptų į vieną eilutę.

console.log(
  people
    .filter((x) => x.age >= 18)
    .map((people) => people.name)
    .sort()
);

//4. 4. Sukurkite funkciją. Ji priims vieną argumentą - array su objektais, kurie turės du parametrus -
//name ir price. Grąžins - brangiausią ir pigiausią prekes.
//Turi veikti padavus neribotą kiekį elementų (pavyzdyje apačioje - tik du).

const drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
];

function fn(items) {
  items.sort((a, b) => a.price - b.price);
  return {
    pigiausias: items[0].name,
    brangiausias: items[items.length - 1].name,
  };
}

console.log(fn(drinks));
