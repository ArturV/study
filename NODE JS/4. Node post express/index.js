const express = require("express");

// git rm -rf --cached .  - isvalyti kesa githube

require("dotenv").config(); // npm i dotenv pries tai irasome i terminala
//const { addListener } = require("nodemon");

const app = express();
const PORT = +process.env.PORT || 5000;

app.use(express.json());

app.post("/", (req, res) => {
  res.send({ message: "Welcome to my project" });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
