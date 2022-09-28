document.body.style.backgroundColor = "cyan";

//Main block

const main = document.createElement("main");
main.textContent = "hello";
main.style.background = "white";
main.style.width = "50%";
main.style.margin = "10rem auto 0 auto";
main.style.padding = "1rem";
main.style.textAlign = "center";
main.style.borderRadius = "0.5rem";

document.body.append(main);

//img

const img = document.createElement("img");
img.src = "https://www.w3schools.com/w3css/img_avatar3.png";
img.style.width = "10rem";
img.style.height = "10rem";
img.style.objectFt = "cover";
img.style.borderRadius = "70%";
img.style.padding = "0.5rem";
img.style.border = " 1px solid #eee";
img.style.marginTop = "-6.5rem";

main.append(img);

//txt

const namez = document.createElement("h1");
namez.textContent = "Petras";
main.append(namez);

//email

const email = document.createElement("h2");
email.textContent = "petras@petras.lt";
email.style.fontSize = "1.2rem";
email.style.color = "#888";
main.append(email);
