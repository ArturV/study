import { getRobots } from "./module/getRobots.js";
import { createTable } from "./module/createTable.js";

/*
Duomenis pasiimsime iš: https://magnetic-melon-yam.glitch.me
-Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).
-Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę (lentelėje).
-Pridėkite prie lentelės (tarp id ir name) nuotrauką.
-Sukurkite checkbox virš lentelės su JS. Jį paspaudus, rodys tik tuos žmones, kurie yra VIP.
-Sukurkite virš lentelės ir search laukelį (forma su input type search ir mygtukas). 
-Suvedus duomenis, lentelėje turi prasifiltruoti pagal vardą arba pavardę (fullname 
    contains search string). Capitalizacija turėtų būti nesvarbi.
*/

await getRobots();

createTable();

const mainTable = document.querySelector("table");

const renderTable = (robots) => {
  const tableBody = document.createElement("tbody");

  robots.forEach((element) => {
    //const tableRow = document.createElement("tbody");

    const tableRow = document.createElement("tr");
    const id = document.createElement("td");

    id.textContent = element.id;

    mainTable.append(tableBody);
    tableBody.append(tableRow);
    tableRow.append(id);

    console.log();
  });
};

renderTable();
