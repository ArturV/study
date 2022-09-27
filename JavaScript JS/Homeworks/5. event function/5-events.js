// Padaryk, kad paspaudus ant mygtuko - išoktų alert su tavo vardu! (naudoti inline metoda: onclick="")
// Perrašyti pirmą pratimą su addEventListener (ir nuo šiol naudoti būtent jį ;) ).

document.querySelector("#but").addEventListener("click", () => {
  //alert("paspaudet ant mygtuko");

  //Padaryti, kad paspaudus ant mygtuko, po apačia atsirastų paragrafe tekstas apie jus.
  const TextAbout = "Aligator is bla !lorem";
  document.querySelector("#about").textContent = TextAbout;
});

// Sukurk programą, kurioje bus h1 tekstas su skaičiumi ir mygtukas.
// Paspaudus ant mygtuko, skaičius padidėja (+1).

let counter = 0;

document.querySelector("#plus").addEventListener("click", () => {
  counter++;
  document.querySelector("h1").innerText = counter;
});

// Sukurk programą, kurioje ilgas paragrafas. Bandant kopijuoti kodą - išmeta, kad negalima kopijuoti.

document.querySelector("#no-copy").addEventListener(
  "contextmenu",
  (evt) => {
    evt.preventDefault();
  },
  false
);

document.querySelector("#no-copy-2").addEventListener(
  "copy",
  (evt) => {
    evt.clipboardData.setData(
      "text/plain",
      "Copying is not allowed on this webpage"
    );

    evt.preventDefault();
  },
  false
);

// 6. Sukurk programą, kur paspaudus ant mygtuko -
//sugeneruoja random skaičių nuo 1 iki 100 ir jį išmeta kaip h1 tekstą.

document.querySelector("#random").addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  document.querySelector("h2").innerText = randomNumber;
});

// 7. Sukurk programą, kurioje du mygtukai - "Turiu bent 18 metų" ir "Mažiau nei 18 metų".
//Jei paspaudžia ant pirmo mygtuko - išmeta h1 tekstą "Alus".
//Jei antrą paspaudžia - išmeta alert su "nepilnametis - nieko neturim

document
  .getElementById("adult")
  .addEventListener(
    "click",
    () => (document.getElementById("output-alus").innerText = "Alus")
  );
document
  .getElementById("child")
  .addEventListener("click", () => alert("nepilnametis - nieko neturim"));

// 8. Sukurk programą, kuri sugeneruoja random skaičių nuo 1 iki 3, kai tik užsikrauna puslapis.
// Vartotojas skaičiaus nemato (bet jūs pasiconsole'inkit). Ekrane - trys mygtukai (1, 2, 3).
// Vartotojas turi spėti koks random skaičius susigeneravo. Jei atspėja - išoka alert("Yay"), jei ne - alert("Nay").

function generateRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}
const randomNumber = generateRandomNumber();
console.log(randomNumber);

document
  .getElementById("one")
  .addEventListener("click", () =>
    randomNumber === 1 ? alert("Yay") : alert("Nay")
  );
document
  .getElementById("two")
  .addEventListener("click", () =>
    randomNumber === 2 ? alert("Yay") : alert("Nay")
  );
document
  .getElementById("three")
  .addEventListener("click", () =>
    randomNumber === 3 ? alert("Yay") : alert("Nay")
  );

// 9 Parašykite programą, kurioje būtų tekstas "Nespauskite mygtuko".
// Vartotojui paspaudus bet kokį mygtuką turi pasikeisti tekstas į "Neklausote manęs".

document.body.addEventListener("click", () => {
  const isButton = event.target.nodeName === "BUTTON";
  if (isButton) {
    document.getElementById("output").innerText = "Neklausote manęs";
  }
});

// 10. Sukurkite h1, jam duokite 150vh aukštį ir 150vh line-height. Jame įrašykite "Nejudinkite pelytės".
// Jeigu vartotojas pajudins pelytę - pakeiskite tekstą į "Kiek galima neklausyti?!".

document.body.addEventListener(
  "mousemove",
  () =>
    (document.getElementById("output2").innerText = "Kiek galima neklausyti?!")
);
