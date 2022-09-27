/*
1. Parašykite variable su jūsų vardu. Pasiklauskite, jei vardo ilgis trumpesnis nei 5 simboliai - 
tegul išmeta konsolėje "Short Name", kitaip - "Long Name".

2. Sukurkite du kintamuosius: 'clientAge' ir 'legalAge'. Patikriname ar vartotojas gali vairuoti 
automobilį - t.y. clientAge didesnis arba lygus legalAge. Jei taip - išmeta 'Can Drive', kitaip 'Can't drive'.

3. Ahh, o jeigu antrame pratime įvesti -1 kaip amžių? Darom double ternary operator - t.y.
 operatorius operatoriuje. Pirma paklausiame - jei amžius mažesnis nei 0; arba didesnis nei 120 - išmetame 
 "Invalid Age". Jei vis tik ne - tada false statement'e bus dar vienas operatorius su antru pratimo klausimu.

4. Sukurkite variable 'phone', kuris būtų lygus 'iPhone'. Taip pat sukurkite variable isIphoneUser, 
kuris turėtų būti prilygintas Boolean reikšmei (t.y. true arba false) priklausomai ar phone yra 'iPhone' ar bet koks kitas.

*/

//1.

const myName = "Art"; // ? - if true; : - else
const nameLength = myName.length < 5 ? "Short name" : "Long name";
console.log(nameLength);

//2.

const clientAge = 28;
const legalAge = 18;

const canDrive = clientAge >= legalAge ? "Can drive" : "Can't drive";
console.log(canDrive);

//3. jei amžius mažesnis nei 0; arba didesnis nei 120 - išmetame Invalid age

const canDrivePlu =
  clientAge < 0 || clientAge > 120
    ? "Invalid age"
    : clientAge >= legalAge
    ? "Can drive"
    : "cant drive";

console.log(canDrivePlu);

//4.
const phone = "iPhone";
const isIphoneUser = phone === "iPhone";
console.log(isIphoneUser);
