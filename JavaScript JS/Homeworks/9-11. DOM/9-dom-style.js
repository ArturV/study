document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.background = "blue";
document.querySelector("h1").style.width = "50%";
document.querySelector("h1").style.padding = "2rem 1rem";
document.querySelector("h1").style.borderRadius = "2rem";

document.querySelector("button").addEventListener("click", () => {
  document.querySelector("h1").style.color = "white";
});
