function getMultipliedByTwo(number) {
    return number * 2;
}

const multipliedNumber = getMultipliedByTwo(5);

console.log(multipliedNumber);


//


function getDeviderByTwo(number) {
    return number / 2;
}

const DividerByTwo = getDeviderByTwo(40);

console.log({ DividerByTwo });

//

function getTodaysSales(totalSales, totalSalesYesterday = 50) {
    const todaySales = totalSales - totalSalesYesterday;

    return todaySales;
}

//console.log(getTodaysSales(150, 100)); grazina 50 nes numatytoji reiksme naudojama tik jei neremetame to parametro
console.log(getTodaysSales(150));


// Sukurkite funkciją, į kurią paduosite vardą ir jį pa'alert'ins jį :)

function whatsName(yourName) {
    alert(yourName);
}

let yourName = prompt("Enter your name");