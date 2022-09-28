// 1. Susikuriame objektą "car". Duodame jam tris properties: "doors", "color", "brand". Reikšmes įrašykite patys,
//tik atminkite - doors bus skaičius, o color ir brand - string'ai. Pasiconsole'inkite ir patikrinkite ar matosi car objektas,
// ar galite atskirai pasiimti vieną iš jo parametrų (pvz. car.doors).

const car = {
  doors: 4,
  color: "red",
  brand: "bmw",
};

//console.log(car);
//console.log(car.doors);

//2 Sukuriame formą su dviem input - name ir surname. Pateikus formą, JS turi pasiimti vardą ir pavardę
// ir sukurti objektą pavadinimu 'person'. Šis objektas turės du parametrus - name ir surname.
// Kai tik objektas susikuria (t.y. dar addEventListener funkcijoje) - atsispausdink objektą ir pažiūrėk ar
//viskas gerai veikia. Hint: už funkcijos ribų negali atspausdinti objekto, nes const person = {} yra limituotas
//konkrečiame bloke (šiuo atveju - funkcijoje). Už jos ribų jis neegzistuoja

const getDataFromForm = document.querySelector("#name-surname");

getDataFromForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const Name = document.querySelector("#name").value;
  const surname = document.querySelector("#surname").value; // = event.target.elements.surname.value - tas pats
  const age = document.querySelector("#age").value;
  const isLegalAge = age >= 21; //3

  let adult = false;

  if (age >= isLegalAge) {
    adult = true;
  } else {
    adult = false;
  }

  const person = {
    name: Name,
    surname: surname,
    age: age,
    //isLegal: adult, //3
    isLegal: isLegalAge, //3
    isAdul: adult,
  };
  console.log(person);

  // 3
  // Sukurk formą, kurioje vartotojas įrašo vardą ir įveda amžių.
  //Pateikus duomenis, turi susikurti objektas, kuriame du properties - name ir isLegalAge. Name - string, o isLegalAge - boolean.
});
