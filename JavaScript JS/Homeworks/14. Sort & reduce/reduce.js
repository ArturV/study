// 1. Parašyk array su penkiais mėgstamiausiais tavo skaičiais. Su reduce visus juos sudėk ir grąžink vieną skaičių.

const numbers = [7, 14, 5, 9, 4];

const numb = numbers.reduce((a, v) => a + v); // 7+14 = 21; 21+5 = 26; 26+9 = 35; 35 + 4 = 39

console.log(numb);

//2. Nusikopijuok array (["BMW", "MCB", "VWG", "Toyota", "AUDI"]) ir naudojant reduce - grąžink skaičių,
// kiek šiame array elementų yra su 3 simboliais (p.s. efektyviau turbūt su filter, bet šiuo atveju reduce).

const auto = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];

console.log(auto.reduce((a, v) => (v.length === 3 ? a + 1 : a), 0));

//3. Sukurk array su daug skaičių. Grąžink didžiausią skaičių iš array naudojant reduce.

const arr = [100, 55, 4, 14, 17, 20, 900, 54, 50, 12, 14, 17];

console.log(arr.reduce((a, v) => (a > v ? a : v)));
