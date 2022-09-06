/*const age = prompt("Koks amzius?");

if (age > 30) {
    console.log("ne paauglys")
} else {
    console.log("jaunas");
}

*/


const price = prompt("Kokia sios prekes kaina?");
const isExpensive = price >= 1000;
// tas pats:
// const isExpensive = price >= 1000 ? true : false

// console.log({
//     isExpensive
// })


if (price >= 100) {
    console.log("Apskaitoma preke");
} else {
    console.log("Neapskaitoma");
}

// kas tarp tu skliaustu tikrina ar TRUE ar FALSE
if (isExpensive) {
    console.log("reikia apskaityti preke");
}

const isTaxable = price > 20;
if (isTaxable) {
    alert("Taxable");
} else {
    alert("Non taxable");
}


/*
const color = prompt("Kokia spalva?");

if (color === "red" || color === "yellow") {
    console.log("sutampa: red / yellow");
} else {
    console.log("kita spalva");
}
*/

const productName = prompt("Product name?");
const isLongName = productName.length >= 7;

// tas pats kas su if else
//alert(isLongName ? "Too long" : "Short name")

if (isLongName) {
    alert("too long");
} else {
    alert("Short name");
}

const isImportantProduct = isTaxable && isExpensive && isLongName;

if (isImportantProduct) {
    alert("sita reikia saugot");
}