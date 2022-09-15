document.querySelector("form").addEventListener("submit", myFunction);

function myFunction(event) {
  event.preventDefault(); // padaro kad puslapis nepersikrautu
  console.log(event.target);
  console.log(event.target.elements.abc); // paimam butent abc input tipo elementa
  console.log(document.querySelector("input[name=abc]")); // - tas pats kaip 6 eiluteje

  console.log(document.querySelector("input[name=abc]").value); // - paima to elemento REIKSME
}
