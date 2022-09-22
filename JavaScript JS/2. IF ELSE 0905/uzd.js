// Be switch sukurt programa kuri suskirstytu prekes i 3 skirtingas kategorijas pagal kaina
// kaina
// [0-19]
// (19-100]
// (100-1000]

const productPrice = +prompt("what is the price?"); // + paverciam i skaicius

const randomNumber = (Math.random() * 1_000) | 0; // i sveika skaiciu pavercia su parseInt(); arba |0
console.log(parseInt(randomNumber)); // suapvalina i mazesne puse
const randomNumber2 = +(Math.random() * 1_000).tofixed(2); // palieka 2 skaicius po kablelio ir padaro number formata

if (productPrice >= 0 && productPrice <= 19) {
  console.log("Pirmoji kategorija");
} else if (productPrice > 19 && productPrice <= 100) {
  console.log("Antroji kategorija");
} else if (productPrice > 100 && productPrice <= 1000) {
  console.log("Trecioji kategorija");
} else {
  console.log("Nepatenka i kategorija");
}
