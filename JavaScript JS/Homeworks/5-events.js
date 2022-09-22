// Padaryk, kad paspaudus ant mygtuko - išoktų alert su tavo vardu! (naudoti inline metoda: onclick="")
// Perrašyti pirmą pratimą su addEventListener (ir nuo šiol naudoti būtent jį ;) ).

document.addEventListener("click", function txt() {
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

// Sukurk programą, kur paspaudus ant mygtuko -
//sugeneruoja random skaičių nuo 1 iki 100 ir jį išmeta kaip h1 tekstą.

document
  .querySelector("#random")
  .addEventListener("click", function randomize() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.querySelector("h2").innerText = randomNumber;
  });
