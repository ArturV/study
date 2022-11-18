const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config(); // npm i dotenv pries tai irasome i terminala

const app = express();
const PORT = +process.env.PORT || 5000;
const URI = process.env.URI;
const client = new MongoClient(URI);

app.use(express.json());

app.get("/", async (_, res) => {
  try {
    const connection = await client.connect();
    const data = await connection
      .db("node-mongo-first-project")
      .collection("users")
      .find()
      .toArray();
    await connection.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post("/", async (req, res) => {
  try {
    const con = await client.connect();
    const dbRes = await con
      .db("node-mongo-first-project")
      .collection("users")
      .insertOne({ name: "Petras", surname: "Slekys" });
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
