
const price1 = 15;
const productName1 = "Batai"; // string - tekstas
const productAvailable1 = false; // boolean: true / false

const price2 = 10; // number: 3, -4.141221, 455789645
const productName2 = "Bucai"; // string - tekstas
const productAvailable2 = true;

console.log(price1, price2);
console.log(price1);
console.log(price1 + price2);


// Kintamuju kurimo struktura:
// let/const pavadinimas = reiksme
// let age =15;   let - gali keistis, const - negali keistis*
// const name='jonas';


//Kodas vykdomas sinchroniskai - kol praeita operacija nebaigta, kitos nebus. 
//Pavyzdziui: kol neivedeme teksto ir prompt nebaige veiklos, tol neatvaizduojamos kintamuju reiksmes HTML. 
//* buna isimciu - pazengusiems ASYNC (asinchroniskas kodas)

let cartItemsAmount = 0;
const userDevice = 'iPhone/iOS';
const userEmail = prompt("Enter your email");
const userLocale = navigator.language;  // OS kalba
const currentDate = new Date();         // Sios dienos data


const itemCategories = ["baldai", "kompiuteriai", "geles"];  // array, masyvas
const usersAges = [16, 82, 25];  // array, masyvas
const siuksliadeze = [false, 15, "asdss", -5]; // masyvas gali talpinti ivairias reiksmes



document.getElementById("user-device").innerText = userDevice;
document.getElementById("user-email").innerText = userEmail;
document.getElementById("user-locale").innerText = userLocale;
document.getElementById("current-date").innerText = currentDate;
