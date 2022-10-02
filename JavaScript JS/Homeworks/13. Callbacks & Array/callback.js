/*

Sukurk dvi funkcijas: alertName, consoleName. Abi funkcijos turės vieną parametrą - vardą. Jos bus callback funkcijos, 
pirma tą vardą alertins, kita - console.log'ins. O dabar susikuriame pagrindę funkciją (coreFunction), ši funkcija - paima pirmą raidę,
 ją padidina ir prijungia kitas raides (t.y. užtikrina, kad vardas prasideda iš didžiosios; 
 pvz: "petras" => "Petras"), tada iškviečia viena iš callback funkcijų (nesvarbu kurią, galima jas kaitalioti).
*/

function alertName(text) {
  alert(text);
}

function consoleName(text2) {
  console.log(text2);
}

function coreFunction(name, callback) {
  const capitalizeFirst =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  callback(capitalizeFirst);
}

coreFunction("jUOZas", consoleName);
