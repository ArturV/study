/*
1. Susikurkite projektą, be jokių HTML tag'ų body. Su JavaScript sukurkite <h2> elementą su savo 
vardu ir pridėkite į <body>.

2. Sukurkite HTML'e <h1> tag'ą su id="name" ir tekstu "unknown". Naudodami JavaScript pakeiskite 
šio elemento tekstą į savo vardą .

3. Sukurkite unordered list su trim list item'ais: "Pienas", "Varškė", "Jautiena". 
Su JavaScript pakeiskite paskutinį list item tekstą į "Sūris".

4. Nusikopijuokite apačioje esantį kodą ir su JavaScript pasikeiskite 
antrame paragrafe esantčio <span> tekstą - iš 'red' į 'blue':

5. Naudodami JavaScript apkeiskite pirmus du sąrašo elementus vietomis. Tačiau, kabliukas - negalima 
JavaScript įrašyti testo (kitaip tariant hard-codinti). 
Pirma Jūs turite pasiimt pirmo ir antro sąrašo elemento reikšmes ir jas išsisaugoti į kintamuosius.
*/

//1
const nameA = "john";
const headerTwo = document.createElement("h2"); // sukuria H2 elementa HTML dokumente
headerTwo.textContent = nameA; // priskiria reiksme tam elementui
document.body.append(headerTwo); // prideda i body H2 elemento teksta

//2

const namez = "Aligator";
document.querySelector("#name").textContent = namez;

//3
document.querySelector("li:last-child").textContent = "Suris";

//4
document.querySelector(".bluetext > span").textContent = "blue";

//5

const liOne = document.querySelector("li:first-child");
const liTwo = document.querySelector("li:nth-child(2)");
const liNewOne = liTwo.textContent;
const liNewTwo = liOne.textContent;

liTwo.textContent = liNewTwo;
liOne.textContent = liNewOne;
//console.log(liOne);
//console.log(liOne);

//5 kitas sprendinys
const listElement = document.getElementsByTagName("ol")[0];
const firstListElement = listElement.children[0];
const secListElement = listElement.children[1];

listElement.replaceChildren(
  secListElement,
  firstListElement,
  listElement.children[2]
);
