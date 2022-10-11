// https://reqres.in/api/users
// https://api.github.com/users

// GET uzklausos metodas. tipiskai nturi body
// GET - mazos uzklausos (2kb+-)
// POST - dideles uzklausos iki 2gb

fetch("https://reqres.in/api/users").then((response) => console.log(response));

const response = await fetch("https://reqres.in/api/users");
const data = await response.json();

console.log(data);
