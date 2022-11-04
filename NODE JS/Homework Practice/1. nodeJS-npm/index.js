const casual = require("casual");

//console turi išmesti random miestą kiekvieną kartą paleidus šį kodą.
// Pakoreguojame kodą. Tegul dabar konsolė atspausdina du dalykus:
//ir random miestą, ir random skaičių nuo 1 iki 10 (o random skaičių generuoti juk dar mokame su Math.random()).
//Casual pluginas gali ne tik miestą sugeneruoti, bet ir įvairiausius kitus parametrus.
// Pridedame (prie console.log), kad "Mr Petras Slekys" (bus atsitiktiniai duomenys: suffix + first name + last name).

const city = casual.city;
const name = casual.first_name;
const surName = casual.last_name;
const prefix = casual.name_prefix;

const randomNumber = (Math.random() * 10) | 0;

console.log(`${city}, ${randomNumber}. ${prefix} ${name} ${surName}`);
