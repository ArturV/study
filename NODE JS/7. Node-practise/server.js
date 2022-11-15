const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
const PORT = +process.env.PORT || 5000;

let phones = ["Samsung", "Xiomi"];

app.use(cors());
app.use(express.json());

app.post("/add", (_, res) => {
  const newPhone = "Nokia";

  phones.push(newPhone);

  res.send(phones).end();
});

app.get("/phones", (req, res) => {
  req = phones;
  res.send(phones);
  res.end();
});

app.delete("/delete", (req, res) => {
  const deleteLast = phones.pop(); //istrina paskutini

  res.send(deleteLast).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
