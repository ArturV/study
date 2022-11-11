const express = require("express");

/*
2.1 
Susikuriame aplanką, jame package.json ir index.js. Pasitikriname ar veikia.
Įsidiegiame Express (t.y. npm i express arba npm install express).
Importuojame Express (t.y. const express = require("express")).
Inicializuojame Express kaip programėlę pavadinimu 'app' (app bus express instancija) (t.y. const app = express()).

2.2
Sukurkite NodeJS projektą, kuris GET / paduos automobilių brandus 
(t.y. array su automobilių brandais: pvz. ["BMW", "VW, "Porsche"]).
Su atskiru aplanku, kur bus front-end'as (index.html) pasiimkite šiuos duomenis (naudojant Fetch) 
ir atvaizduokite juos unordered list'e.
*/

const cors = require("cors");

const PORT = 5000;
const cars = ["BMW", "VW", "Porsche"];
const app = express();

app.use(cors());
app.use(express.json());

app.get("/cars", (req, res) => {
  res.send(cars);
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
