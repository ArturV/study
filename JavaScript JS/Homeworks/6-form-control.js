// izanga - cheetsheet
/*
document.querySelector("form").addEventListener("submit", myFunction);

function myFunction(event) {
  event.preventDefault(); // padaro kad puslapis nepersikrautu
  console.log(event.target);
  console.log(event.target.elements.abc); // paimam butent abc input tipo elementa
  console.log(document.querySelector("input[name=abc]")); // - tas pats kaip 6 eiluteje

  console.log(document.querySelector("input[name=abc]").value); // - paima to elemento REIKSME
}
*/

/*
1. Sukurk input į kurį įvestum savo vardą. Submit paspaudus - išoktų alert su tavo vardu.

2. Sukurk input į kurį įvesi savo amžių. Padaryk, kad submit paspaudus, viršuj esančiame h1 
elemente atsirastų "Tavo amžius: [amžius]".

3. Sukurk du input - į vieną įrašysi savo vardą, į kitą - amžių. Jei daugiau nei 18 - išmeta h1 elemente 
"Vairuoti gali: [vardas]"; jei nėra išmeta: "Dar mokysis vairuotis: [vardas]".

*/

// 1
document.querySelector("form").addEventListener("submit", getName);

function getName(event) {
  event.preventDefault();
  alert(document.querySelector("input[name=my-name]").value);
}

//2
document.querySelector("form").addEventListener("submit", getAge);

function getAge(event) {
  event.preventDefault();
  const inputAge = document.querySelector("input[name=age]").value;
  alert(document.querySelector("input[name=age]").value);

  document.querySelector("h1").textContent = iputAge;
  console.log(iputAge);
}
