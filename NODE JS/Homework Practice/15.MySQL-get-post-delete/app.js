const express = require("express");
const mysql = require("mysql2/promise");
require("dotenv").config();

/*
Susikursime naują NodeJS projektą - pirkinių sąrašą, kuris leis įrašyti norimus nusipirkti maisto produktus,
atsisiųsti visus juos bei vieną ištrinti.

+1.Sukuriame naują duomenų bazę (galite naudoti anksčiau sukurtą clusterį, tiesiog jame sukurkite naują DB per
terminalą ar per Digital Ocean GUI). DB pavadinimas nesvarbu.
+2.Susikuriame naują lentelę pavadinimu 'items' - ji susidės iš ID (INT, Primary Key, Auto Increment) ir title (TEXT).
+3.Susikuriame naują NodeJS projektą su Express (nepamirštam eslint).
4.Sukuriame tris route'us: GET "/items" ir POST "/items", DELETE "/items/:id".
+5.GET route paims ir paduos visus įrašus iš duomenų bazės. Pakoreguokime, kad būtų galime nustatyti limit'ą su
search query (t.y. ?limt=10).
+6.POST įrašys vieną naują prekę į duomenų bazę. Nepamirškime mysql.escape() panaudoti.
+7.DELETE ištrins pagal ID (paduotą kaip URL parametrą) vieną prekę - čia irgi reikės mysql.escape() pagalbos.
8.Patestuokite, kad visi route'ai veikai ir jų edge-case'ai (t.y. kas jeigu jokių duomenų nepaduoti post ar delete? 
kas jei items limitas nepaduotas?).
*/

const app = express();
app.use(express.json());

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
};

const SERVER_PORT = 5_000;
//const db_table = items;

//2. ID (INT, Primary Key, Auto Increment) ir title (TEXT).
app.post("/items-table", async (req, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    await con.execute(
      `CREATE table items (id int NOT NULL AUTO_INCREMENT, title varchar(20), PRIMARY KEY(id))`
    );

    await con.end();
    res.send("Items table created").end();
  } catch (error) {
    res.send(error).end();
    return console.error(error);
  }
});

// 5. paims ir paduos visus įrašus iš db. galime nustatyti limit'ą su search query (t.y. ?limt=10).

app.get("/items", async (req, res) => {
  const limit = req.query.limit;
  //const limit = 3;

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const query = !limit
      ? `SELECT * FROM items ORDER BY id ASC`
      : `SELECT * FROM items ORDER BY id ASC LIMIT ${limit};`;

    const result = await con.execute(query);

    /*
    const result = await con.execute(
      `SELECT * FROM items ORDER BY id ASC LIMIT ${limit};`
    );*/

    await con.end();

    //console.log(result);
    res.send(result[0]).end();
  } catch (error) {
    res.send(error).end;
    return console.error(error);
  }
});

// 6. POST įrašys vieną naują prekę į duomenų bazę. Nepamirškime mysql.escape() panaudoti.

app.post("/items", async (req, res) => {
  //const title = mysql.escape(req.body.title);

  const title = req.body.title;
  const cleanTitle = mysql.escape(title).replaceAll("'", "");

  if (
    cleanTitle.length < 1 ||
    cleanTitle.length > 20 ||
    !cleanTitle ||
    cleanTitle === "NULL"
  ) {
    return res.status(400).send("Insert title").end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    console.log(cleanTitle);
    await con.execute(`INSERT INTO items (title) VALUES ('${cleanTitle}')`);
    await con.end();
    res.status(201).send("New Item added to db.").end();
  } catch (error) {
    res.status(500).send(error).end;
    return console.error(error);
  }
});

app.delete("/items/:id", async (req, res) => {
  const id = mysql.escape(req.params.id);
  const cleanId = +id.replaceAll("'", "");
  //const id = +req.params.id;

  if (
    cleanId.length === 0 ||
    Number.isNaN(cleanId) ||
    typeof cleanId != "number" ||
    cleanId === ""
  ) {
    console.log(cleanId);
    return res.send("Nothing to delete, please put correct ID").end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const checkID = await con.execute(
      `SELECT id FROM items WHERE ID =${cleanId} `
    );

    if (checkID.length === 0) {
      // if (checkID === []) {
      console.log("nera tokio id");
      res.send("No item with this ID").end();
    } else {
      console.log("trinam");
      await con.execute(`DELETE FROM items WHERE id= ${cleanId};`);
      await con.end();
      res.send("Item deleted").end();
    }
  } catch (error) {
    res.status(500).send(error).end;
    return console.error(error);
  }
});

//testavimui query
app.get("/test/:id", async (req, res) => {
  const id = mysql.escape(req.params.id);
  const cleanId = +id.replaceAll("'", "");

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const query = `SELECT id FROM items WHERE ID =${cleanId} `;
    const result = await con.execute(query);

    await con.end();
    //const result2 = Array.isArray(result);
    if (result.length === 0) {
      // if (result2.length === 0) {
      console.log("[]");
    } else console.log("kk");

    res.send(result[0]).end();
  } catch (error) {
    res.send(error).end;
    return console.error(error);
  }
});

app.listen(SERVER_PORT, () => {
  console.log(`Server UP. We working on port: ${SERVER_PORT}`);
});
