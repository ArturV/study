const firstName = 'Jonas';

//imk firstName reiksme ir tikrink pagal loginius nurodymys/atvejus
switch (firstName) {
    case 'Jonas': {
        console.info("Atitinka mano varda");
        break; // kodo switche neziures
    }
    case 'Adolfas': {
        console.info("Neatitinka mano varda");
        break;
    }

    default: {
        console.info(`Sis vardas idomus ${firstName}`); // String template literal
    }
}

console.log("***Pratimai***");
//  pratimai, tasks

const rating = +prompt("Kiek vertinate preke?"); // + pavercia i skaiciu

switch (rating) {
    case 5:
        console.info("Puikiai");
        break;
    case 4:
        console.info("Gerai");
        break;
    case 3:
        console.info("Tinkamai");
        break;

    default:
        console.info("Blogai");
        break;
}

console.log(`Ivertinimas ${rating}`);

// pratybos switch 3.1

const car = "Bmw";
switch (car) {
    case "Bmw":
        console.info("Priklauso BMW koncernui");
        break;

    case "Mini":
        console.info("Priklauso BMW koncernui");
        break;

    case "Rolls-Royce":
        console.info("Priklauso BMW koncernui");
        break;

    case "VW":
        console.info("Priklauso VW koncernui");
        break;
    case "Audi":
        console.info("Priklauso VW koncernui");
        break;

    case "Buggati":
        console.info("Priklauso VW koncernui");
        break;

    default:
        console.info("Nepriklauso jokiam koncernui");
        break;
}

// pratybos switch 3.2

const userInput = "Morka";

switch (userInput) {
    case "Obuolys":
        console.info("Vaisiai");
        break;
    case "Kivi":
        console.info("Vaisiai");
        break;
    case "Arbuzas":
        console.info("Vaisiai");
        break;
    case "Mango":
        console.info("Vaisiai");
        break;
    case "Morka":
        console.info("Darzoves");
        break;

    default:
        console.info("nera kategorijos");
        break;

}

// pratybos switch 3.3

const weekDay = 5;

switch (weekDay) {
    case 0:
        console.info("Pirmadienis");
        break;

    case 1:
        console.info("Antradienis");
        break;
    case 2:
        console.info("Treciadienis");
        break;
    case 3:
        console.info("Ketvirtadienis");
        break;
    case 4:
        console.info("Penktadienis");
        break;
    case 5:
        console.info("Sestadienis");
        break;
    case 6:
        console.info("Sekmadienis");
        break;


    default:
        console.info("no date");
        break;
}

// kitas sprendimas

let weekDayN = new Date().getDay();
switch (weekDayN) {
    case 0:
        weekDayN = 'Sekmadienis';
        break;
    case 1:
        weekDayN = 'Pirmadienis';
        break;
    case 2:
        weekDayN = 'Antradienis';
        break;
    case 3:
        weekDayN = 'Trečiadienis';
        break;
    case 4:
        weekDayN = 'Ketvirtadienis';
        break;
    case 5:
        weekDayN = 'Penktadienis';
        break;
    case 6:
        weekDayN = 'Šeštadienis';
        break;
}
console.log(weekDayN);