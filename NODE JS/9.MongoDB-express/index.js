const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config(); // npm i dotenv pries tai irasome i terminala

const app = express();
const PORT = +process.env.PORT || 5000;
const URI = process.env.URI;
const client = new MongoClient(URI);

app.use(express.json());

app.get("/", async (_, res) => {
  const connection = await client.connect();
  const data = await connection
    .db("node-mongo-first-project")
    .collection("users")
    .find()
    .toArray();
  await connection.close();
  return res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
