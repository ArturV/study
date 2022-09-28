document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.background = "blue";
document.querySelector("h1").style.width = "50%";
document.querySelector("h1").style.padding = "2rem 1rem";
document.querySelector("h1").style.borderRadius = "2rem";

document.querySelector("button").addEventListener("click", () => {
  document.querySelector("h1").style.color = "white";
});

//1
//H1 elemente parašykite savo vardą. Paspaudus ant vardo - tegul jūsų vardas
//atsiranda per vidurį ekrano, dvigubai didesniu font'o dydžiu ir raudona spalva.

document.querySelector("h2").append("Vardas");
document.querySelector("h2").addEventListener("click", () => {
  document.querySelector("h2").style.color = "red";
  document.querySelector("h2").style.fontSize = "50px";
  document.querySelector("h2").style.textAlign = "center";
});

//2 Išbandome ekraną. Sukurkite mygtuką su HTML. JS pasirašykite, kad mygtukas position: absolute
// ir jo lokacija - viršus, kairė. Paspaudus ant mygtuko, jis turi peršokti į apačią dešinę pusę.
// Paspaudus vėl - į viršų, kairę pusę. Ir taip šokinėti įstrižai per ekraną kiekvieno paspaudimo metu.

const buttonJump = document.querySelector("#jump-button");

buttonJump.style.cssText = "position:absolute; top:0; left:0";

buttonJump.addEventListener("click", (event) => {
  let originalPosition = true;
  buttonJump.style.cssText = "position:absolute; bottom:0; right:0";

  event.target.style.cssText = originalPosition
    ? "position:absolute; top:0; left:0"
    : "position:absolute; bottom:0; right:0";
  originalPosition = false;
});
