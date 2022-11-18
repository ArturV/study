const express = require("express");

require("dotenv").config(); // npm i dotenv pries tai irasome i terminala

const app = express();
const PORT = +process.env.PORT || 5000;
const URI = process.env.URI;

app.use(express.json());

app.post("/", (req, res) => {
  res.send({ message: "Welcome to my project" });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
