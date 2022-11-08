const express = require("express");

const app = express();
const PORT = 5_000;

app.use(express.json());

app.get("/", (_, res) => {
  // _ pries kableli reiskia kintamo nenaudojam, nors privalome islaikyti eiliskuma
  res.send({ age: 24 });
});

app.post("/", (req, res) => {
  console.log(req.params);

  res.send("0");
});

app.post("/:userId", (req, res) => {
  res.send({ age: req.body.age * 2 });
});

app.listen(PORT, () => {
  console.log(`server is runnig on port: ${PORT}`);
});
