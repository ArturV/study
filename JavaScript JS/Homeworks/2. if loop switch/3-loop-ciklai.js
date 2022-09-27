/*
1. Padaryk, kad kompiuteris 10 kartų paconsole'intų tavo vardą (atsimink, konsolė 
  tas pačias eilutes grupuoja ir šalia parašo skaičiuką dažniausiai, vietoj to, kad 
  išmestų kiekvienoje eilutėje).

2. Pakoreguok pirmą pratimą, kad tiek vardas, tiek kiek kartų kartos - būtų kintamieji.

3. Prie savo vardo atspaudink ir 'i' raidę, t.y. kelintas ciklas yra 
(pvz.: "0. Petras", "1. Petras", "2. Petras")...

4. Parašyk for loopą, kuris atspaudins nuo 10 iki 1 countdown konsolėje.

*/

//1
const n = 1;
for (let i = 0; i < n; i++) {
  console.log("Vardas");
}

//2
let inputName = prompt("vardas");
let qty = +prompt("kiek kartu");
for (let z = 0; z < qty; z++) {
  console.log(inputName);
  //3
  //console.log(z, inputName); taip nekorektiskai rodo
  console.log(`${z}. ${inputName}`);
}

//4

for (let index = 10; index > 0; index--) {
  console.log(index);
}
