const express = require("express");
const mysql = require("mysql2/promise");
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

const MYSQL_CONFIG =
  "mysql://doadmin:AVNS_P0xmrLL7wTYuUWhKMWG@db-mysql-codeacademy-do-user-13084610-0.b.db.ondigitalocean.com:25060/shirts?ssl-mode=REQUIRED";
/* {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
  
}; */
console.log(MYSQL_CONFIG);

app.use(express.json());

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

app.post("/shirts", async (req, res) => {
  const brand = req.body?.brand?.trim();
  const model = req.body?.model?.trim();
  const size = req.body?.size?.trim();
  const price = req.body?.price?.trim();

  if (!brand || !model || !size || !price) {
    return res.status(400).send("Insert all data").end();
  }

  if (brand.length() > 30 && model.length > 30) {
    return res.status(400).send("Insert brand & model to 30 symbols").end();
  }

  if (size != "XS" || "S" || "M" || "L" || "XL") {
    return res
      .status(400)
      .send("Size must be one of these: XS, S, M, L, XL")
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    await con.execute(
      `INSERT INTO shirts (brand, model, size, price) VALUES ('${brand}','${model}','${size}','${price}')`
    );
    await con.end();
  } catch (error) {}
});

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

app.listen(SERVER_PORT, () => {
  console.log(`Server running on ${SERVER_PORT}`);
});
