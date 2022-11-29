const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
require("dotenv").config();

/*
Užduotis: `users` kolekcijoje nustatyti unikalių vardų sąrašą (bent dešimt įrašų lentelėje).
 Nustatyti, kiek įrašų turi vardą X (kur X - pateiktas per užklausą. Apmąstykit, body ar params).
Nustatyti bendrą vartotojo vardu X užsakymų kiekį
*/

const URI = process.env.URI;
const client = new MongoClient(URI);
const PORT = +process.env.PORT || 5000;

const DB = process.env.DB;
const DBCOLLECTION = process.env.DBCOLLECTION;

app.use(express.json());

app.get("/users/:name", async (req, res) => {
  const { name } = req.params;

  const pipeline = [
    { $match: { name } },
    { $group: { _id: "$name", orders: { $sum: "$orders" } } },
    { $sort: { orders: -1 } },
  ];

  if (typeof name !== "string") {
    res.status(400).send("name is not a string.").end();
    return;
  }

  if (!name) {
    res.status(400).send("This name was not provided.").end();
    return;
  }

  try {
    const connection = await client.connect();
    const docs = [];

    const entries = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .distinct("name");

    const nameCount = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .count({ name });

    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find({ name })
      .toArray();

    const aggregationCursor = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .aggregate(pipeline);

    for await (const doc of aggregationCursor) {
      docs.push(doc);
    }

    await connection.close();

    res.send({ nameCount, docs, data, entries }).end();
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err);
  }
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
