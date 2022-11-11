/*
Node Package Manager (npm) naudojamas įkelti bei valdyti packages (bibliotekos,frameworkai)
bei atlikti kitus veiksmus susijusius su esamu projektu

su kiekvienu nauju projektu:

pnm init -y
npm i nodemon express cors dotenv
npm start

*/

/* SERVER */
const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config(); // npm i dotenv pries tai irasome i terminala
const PORT = +process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  res.send({ message: "Welcome to my project" });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
