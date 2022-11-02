// 1. Parašykite metodą klasėje, kuris pasakys ar žmogus yra pilnametis ar ne, pagal jo amžių.
// 2. Parašykit funkciją, kuri priimtu mąsyvą sudarytą iš skaičių ir raidžių. Grąžinkite masyvą tik su skaičiais.
// pvz: fn([1, 5, "a", "g", "z", 6]) => [1, 5, 6]
// 3. Sukurk funkciją, kuri paims stringą kaip parametrą ir padvigubins kiekvieną raidę (bet ne simbolį ar skaičių).
// pvz: fn("Petras 123 Slekys") => "PPeettrraass 123 SSlleekkyyss"
// 4. Parašykite funkciją, kuri tikrins ar paduotas post code - teisingas. Post code turi susidėti iš 5 skaičių, arba trijų skaičių ir dviejų raidžių. Jei yra tarpų - post code neteisingas.
// Pvz: fn("abc123") => false; fn("12345") => true; fn("123ab") => true.
// 5. Sukurkite funkciją, kuri priims array ir prie kiekvieno array elemento pridės "7", nebent elementas baigsis "7".

// 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge() {
    return this.age >= 20
      ? `${this.name} is old enough to drink`
      : `${this.name} is not old enough to drink`;
  }
}

const p1 = new Person("Petras", 10);
console.log(p1.compareAge());

// 2

const filterOutLetters = (arr) =>
  arr.filter((element) => typeof element === "number");
console.log(filterOutLetters([1, 5, "a", "g", "z", 6]));

// 3

const duplicateAllLetters = (text) =>
  text
    .split("")
    .map((element) => (element.match(/[a-z]/i) ? element.repeat(2) : element))
    .join("");
console.log(duplicateAllLetters("Petras 123 Slekys"));

// 4

const isValidPostCode = (postCode) =>
  /^[0-9]{5}|[0-9]{3}[A-Za-z]{2}$/.test(postCode);
console.log(isValidPostCode("abc123"));
console.log(isValidPostCode("12345"));
console.log(isValidPostCode("123ab"));

// 5

const jazzify = (array) =>
  array.map((element) =>
    element.endsWith("7") ? element : element.concat("7")
  );
console.log(jazzify(["G", "F", "C"]));
console.log(jazzify(["Dm", "G", "E", "A"]));
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));
console.log(jazzify([]));
