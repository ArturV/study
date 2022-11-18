const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config(); // npm i dotenv pries tai irasome i terminala

const app = express();
const PORT = +process.env.PORT || 5000;
const URI = process.env.URI;
const client = new MongoClient(URI);
const DB = process.env.DB;
const dbCollection = process.env.dbCollection;
app.use(express.json());

app.get("/users", async (_, res) => {
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(dbCollection)
      .find()
      .toArray();
    await connection.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post("/user", async (req, res) => {
  const { firstName, lastName } = req?.body || {};
  console.log(req.body);
  if (!firstName || !lastName) {
    res.status(400).send("write first name & last name").end();
    return;
  }

  if (typeof firstName !== "string" && typeof lastName !== "string") {
    res.status(400).send("not numbers only string").end();
    return;
  }
  try {
    const con = await client.connect();
    const dbRes = await con
      .db(DB)
      .collection(dbCollection)
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
