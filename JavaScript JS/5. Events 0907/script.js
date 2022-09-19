// https://w3c.github.io/uievents/#event-types-list

document.addEventListener("click", function () {
  console.log("paspaudet ant puslapio");
});

const specialCodeElement = document.getElementById("special-code");
let count = 0;
let i = 0;

/*for (let index = 0; index < 1500; index++) {
  document.getElementById("count").append(index);
}*/

for (const element of ["stringas A", "s", "d"]) {
  console.log(element);
}

const interval = setInterval(() => {
  document.getElementById("count").innerText = i++;

  if (i === 20) {
    clearInterval(interval);
  }
}, 50);

specialCodeElement.addEventListener("mouseover", () => {
  incrementCount();
  document.getElementById("count").innerText = count; //innerText - iraso i p elementa
  /*
  if (count >= 10 && count < 20) {
    specialCodeElement.style = "background-color: yellow";
  } else if (count >= 20) {
    specialCodeElement.style = "background-color: red";
  }*/
});

document.getElementById("count").addEventListener("click", () => {
  resetCount();
  document.getElementById("count").innerText = count;
});

const colorTheCode = () => {
  if (count >= 20) {
    specialCodeElement.style = "background-color: red";
  } else if (count >= 10) {
    specialCodeElement.style = "background-color: yellow";
  }
};

const incrementCount = () => {
  count++;
  colorTheCode();
};

const resetCount = () => {
  count = 0;
  colorTheCode;
};

const currentRoute = location.pathname;
const currentURL = location.href;

console.log(currentRoute);
console.log(currentURL);

//location.assign("/home");
