const containerElement = document.getElementById("container"); // i ka konriu prideti
const paragraphElement = document.createElement("p"); // ka noriu prideti

paragraphElement.append("Foo");
containerElement.append(paragraphElement);

function showDate() {
  const bodyElement = document.getElementsByTagName("body")[0];

  const paragraphElement = document.createElement("p");

  paragraphElement.append(new Date().toLocaleString("lt-LT")); // pagal regiona
  paragraphElement.append(new Date().toLocaleString(navigator.language)); // is narsykles

  bodyElement.appendChild(paragraphElement);
}
