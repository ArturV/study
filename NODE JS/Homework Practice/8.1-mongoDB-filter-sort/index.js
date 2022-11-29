const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
require("dotenv").config();
/*
Susikuriame duomenų bazę ir kolekciją “pets”, kuri turės dokumentus su augintiniais
 (name, type, age) (pvz “Madis”, “dog”, 1).

su NodeJS apsirašome keturis route’us:
1. GET “/pets” paduoda visus gyvūnus.
2. POST “/pets” įkelia vieną gyvūną.
3. GET by type “/pets/:type”, kuris dinaminis ir paduoda įrašyto tipo gyvūnus (pvz tik šunis)
4. GET by age descending “/pets/byoldest”, kuris paduoda visus gyvūnus, nuo seniausio iki jauniausio
*/
const URI = process.env.URI;
const client = new MongoClient(URI);
const PORT = +process.env.PORT || 5000;
const DB = process.env.DB;
const DBCOLLECTION = process.env.DBCOLLECTION;

app.use(express.json());

app.get("/pets", async (req, res) => {
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find()
      .toArray();

    await connection.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err }).end();
  }
});

app.post("/pets", async (req, res) => {
  const { name, type, age } = req?.body || {};

  if (!name || !type || !age) {
    res.status(400).send("write correct data").end();
    return;
  }

  if (
    typeof name !== "string" &&
    typeof type !== "string" &&
    typeof age !== number
  ) {
    res.status(400).send("Name & type be a string, age - number").end();
    return;
  }
  try {
    const con = await client.connect();
    const dbRes = await con
      .db(DB)
      .collection(DBCOLLECTION)
      .insertOne({ name, type, age });
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err }).end();
  }
});

app.get("/pets/:type", async (req, res) => {
  const { type } = req.params;
  console.log(type);
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      //.find({ "type": "type" })
      .find({ type: { $regex: type } })
      .toArray();

    console.log(data);
    await connection.close();
    res.send(data).end();
  } catch (err) {
    res.status(500).send({ err }).end();
  }
});

app.get("/pets/byoldest", async (req, res) => {
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find()
      .sort({ age: -1 })
      .toArray();

    await connection.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err }).end();
  }
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
