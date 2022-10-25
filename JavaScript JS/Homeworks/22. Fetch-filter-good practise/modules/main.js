import { getRobots } from "./fetch.js";
import { createTable } from "./createTable.js";
import { createVIPCheckbox } from "./createVIPCheckbox.js";

/*

// Duomenis pasiimsime iš: https://magnetic-melon-yam.glitch.me

//     Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).
//     Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę (lentelėje).
//     Pridėkite prie lentelės (tarp id ir name) nuotrauką.
//     Sukurkite checkbox virš lentelės su JS. Jį paspaudus, rodys tik tuos žmones, kurie yra VIP.
//     Sukurkite virš lentelės ir search laukelį (forma su input type search ir mygtukas). Suvedus duomenis, lentelėje turi prasifiltruoti pagal vardą arba pavardę (fullname contains search string). Capitalizacija turėtų būti nesvarbi.

// sukurti VIP užrašą

*/

const robots = await getRobots();

createTable(robots);

createVIPCheckbox(robots);
