const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
require("dotenv").config();
/*
Susikuriame naują duomenų bazę per MongoDB Compass, o joje kolekciją pavadinimu "people".
Sukuriame Express projektą, kuriame įsidiegiame visus reikiamus įrankius (įskaitant ESLint ir dotenv).
Sukuriame GET route, kuris paduos visus duomenis iš "people" kolekcijos.
Sukuriame POST route, kuris gautus duomenis įrašys į kolekciją.
*/
const URI = process.env.URI;
const client = new MongoClient(URI);
const PORT = +process.env.PORT || 5000;
const DB = process.env.DB;
const DBCOLLECTION = process.env.DBCOLLECTION;

app.use(express.json());

app.post("/people", async (req, res) => {
  const { firstName, lastName, age } = req?.body || {};
  console.log(req.body);
  if (!firstName || !lastName || !age) {
    res.status(400).send("write first name, last name & age").end();
    return;
  }

  if (
    typeof firstName !== "string" &&
    typeof lastName !== "string" &&
    typeof age !== number
  ) {
    res
      .status(400)
      .send("first Name & last name must be a string, age - number")
      .end();
    return;
  }
  try {
    const con = await client.connect();
    const dbRes = await con
      .db(DB)
      .collection(DBCOLLECTION)
      .insertOne({ firstName, lastName, age });
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err }).end();
  }
});

app.get("/people", async (req, res) => {
  const id = req.params.id;

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

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
