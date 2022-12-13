const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
require("dotenv").config;

/*
Susikuriame NodeJS Express serverį, kuriame instaliuojame MySQL ir sukuriame 4 route'us:
2.1. GET "/" - išmeta, kad serveris funkcionuoja.
2.2 GET "/shirts" - išmeta 10 pigiausių marškinių (naudojam MySQL LIMIT ir ORDER BY).
2.3. POST "/shirts" - įrašo vienus marškinius.
2.4. GET "*" - išmeta, kad tokio puslapio nėra.
Pakoreguojame GET "/shirts", kad leistų pagal dydį filtruoti ("/shirts/:size") ir grąžintų 10 pigiausių to dydžio'o. Tačiau jei dydis neparašytas - grąžintų, kaip ir anksčiau, visų dydžių 10 pigiausių.
Pakoreguokime, kad LIMIT skaičius būtų pagal search parametrą, tarp 10 ir 100. Linko pvz.: "/shirts/M?limit=20" (naudojame req.query).
*/

const app = express();
const SERVER_PORT = 5000;

//const MYSQL_CONFIG = process.env.MYSQL_CONFIG;

const MYSQL_CONFIG = "#";

/* {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
  
}; */
console.log(MYSQL_CONFIG);

app.use(express.json());
app.use(cors());

app.post("/shirts-table", async (_, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    await con.execute(
      `CREATE table shirts (id int NOT NULL AUTO_INCREMENT, brand varchar(30), model varchar(30), SIZE ENUM('XS','S','M','L','XL'), price DECIMAL(6,2), PRIMARY KEY (id))`
    );

    await con.end();
    res.send("Table created").end();
  } catch (error) {
    res.send(error).end;
    return console.error(error);
  }
});

//2.3. POST "/shirts" - įrašo vienus marškinius.
app.post("/shirts", async (req, res) => {
  const brand = req.body?.brand?.trim();
  const model = req.body?.model?.trim();
  const size = req.body?.size?.trim();
  const price = req.body?.price;

  if (!brand || !model || !size || !price) {
    return res.status(400).send("Insert all data").end();
  }

  if (brand.length > 30 && model.length > 30) {
    return res.status(400).send("Insert brand & model to 30 symbols").end();
  }
  /*
  if (size != "XS" || "S" || "M" || "L" || "XL") {
    console.log(size);
    console.log({ size });
    return res
      .status(400)
      .send("Size must be one of these: XS, S, M, L, XL")
      .end();
  }
*/
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    await con.execute(
      `INSERT INTO shirts (brand, model, size, price) VALUES ('${brand}','${model}','${size}','${price}')`
    );
    await con.end();
    res.status(201).send("Insertion correct").end();
  } catch (error) {
    res.status(500).send(error).end();
    console.error(error);
  }
});

//2.2 GET "/shirts" - išmeta 10 pigiausių marškinių (naudojam MySQL LIMIT ir ORDER BY).

app.get("/shirts", async (_, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const result = await con.execute(
      `SELECT * FROM shirts ORDER BY price ASC LIMIT 10;`
    );

    await con.end();
    console.log(result);
    res.send(result[0]).end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error(error);
  }
});

// Pakoreguojame GET "/shirts", kad leistų pagal dydį filtruoti ("/shirts/:size") ir grąžintų 10 pigiausių
//to dydžio'o. Tačiau jei dydis neparašytas - grąžintų, kaip ir anksčiau, visų dydžių 10 pigiausių.

app.get("/shirts/:size", async (req, res) => {
  const size = req.params.size.toUpperCase();

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    if (size) {
      const result = await con.execute(
        `SELECT * FROM shirts WHERE SIZE='${size}' ORDER BY price ASC LIMIT 10;`
      );
    }
    //if (!size) {
    else {
      const result = await con.execute(
        `SELECT * FROM shirts ORDER BY price ASC LIMIT 10;`
      );
    }

    await con.end();
    //console.log(result);
    res.send(result[0]).end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error(error);
  }
});

//2.1. GET "/" - išmeta, kad serveris funkcionuoja.
app.get("/", async (_, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    res.send("Server working").end();
    await con.end();
  } catch (error) {
    res.send({ error }).end();
    console.error(error);
  }
});

//GET "*" - išmeta, kad tokio puslapio nėra.
app.get("*", async (_, res) => {
  res.status(404).send("Invalid URL").end();
});

app.listen(SERVER_PORT, () => {
  console.log(`Server running on ${SERVER_PORT}`);
});
