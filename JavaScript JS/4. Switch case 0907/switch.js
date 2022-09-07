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



