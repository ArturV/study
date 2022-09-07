// 1 pratimas

const legalAge = 20;
const clientAge = prompt("Iveskite skaiciu");

if (clientAge <= legalAge) {
    alert("Amzius mazesnis negu 20m");
} else
    alert("Amzius >20m");

//2 pratimas

const myName = "Arturas";
if (myName.length > 6) {
    console.log("Ilgas vardas");
}

//3 pratimas

const years = 50;
if (years > 100 || years < 0) {
    console.log("Invalid age");
} else {
    if (years > 1 && years < 18) {
        console.log("Child");
    }

    if (years > 19 && years < 99) {
        console.log("Adult");
    }
}

//4 pratimas

const car = "Bmw";
const vwGroup = ["Vw", "Audi", "Bentley", "Bugatti", "Lambo", "Porsche"];
const bmwGroup = ["Bmw", "Mini", "Rolls-Royce"];

if (vwGroup.includes(car)) {
    console.log("Auto priklauso VW koncernui");
} else if
    (bmwGroup.includes(car)) {
    console.log("Auto priklauso BMW koncernui");
}

else {
    console.log("Auto priklauso nezinomam koncernui");
}
