/*
BASE URL = https://robust-safe-crafter.glitch.me/

Sukuriame du puslapius (index.html ir add.html) - CSS frameworką naudoti galima, 
tačiau rekomenduotina daryti su custom CSS.

Šis puslapis atsisiųs skelbimus iš API ir juos atvaizduos kortelėse. Filter funkcionalumas nėra privalaomas,
tačiau stipresniems studentams - rekomenduojamas (t.y. paspaudus ant mygtuko turi filtruoti NT pagal konkretų miestą)

Suvedus informaciją į laukelius, juos turi POSTint į API.

Duomenų formatas:

{
    image: string,
    city: string,
    price: number,
    description: string
}
*/
