// 1. Pasirašyk sąrašą su savo draugų vardais. A-Z tvarka išrykiuok.

const friends = ["Tomas", "Gnomas", "Adomas", "Zirafas", "benas"];

const sortAscendingly = (x, y) => {
  if (typeof x === "number" && typeof y === "number") {
    return x - y;
  }

  if (typeof x === "string" && typeof y === "string") {
    return x.localeCompare(y);
  }
};

console.log(friends.sort(sortAscendingly));

//2. Pakoreguok pirmame pratime esantį sort, kad išrykiuotų Z-A tvarka.

const compareFn = (a, b) => (b > a ? 1 : -1);

console.log(friends.sort(compareFn));

// 3. Nusikopijuok array ([5, 10, 20, 11, 12, 1, 0, 14, 25])
//ir su JS sudėliok mažėjimo tvarka (nuo didžiausio, iki mažiausio).

const arr = [5, 10, 20, 11, 12, 1, 0, 14, 25];

console.log(arr.sort(compareFn));

// 4. Nusikopijuok array ([10, 5, 20, 4]) ir grąžink didžiausią skaičių (vieną skaičių).

const array = [10, 5, 20, 4];
array.sort(compareFn);
console.log(array[0]);
