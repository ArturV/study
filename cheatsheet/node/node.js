/*
Node Package Manager (npm) naudojamas įkelti bei valdyti packages (bibliotekos,frameworkai)
bei atlikti kitus veiksmus susijusius su esamu projektu

su kiekvienu nauju projektu:

npm init -y
npm i express cors dotenv
npm i mongodb // kai reikia duombazes
npm i -D nodemon
npm start

*/

/*
const prices = await collection.distinct("price") // - atrenka unikalias reiksmes
*/

/* SERVER */

const express = require("express");
const cors = require("cors");
const app1 = express();

require("dotenv").config(); // npm i dotenv pries tai irasome i terminala
const PORT1 = +process.env.PORT || 5000;

app1.use(cors());
app1.use(express.json());

app1.post("/", (req, res) => {
  res.send({ message: "Welcome to my project" });
});

app1.listen(PORT, () => {
  console.log(`Server is running on ${PORT1}`);
});

// POST GET DELETE PATCH

const express = require("express");
const app = express();

app.use(express.json());

const PORT = 5001;

let students = [{ firstName: "Name", lastName: "Surname", studentId: 1 }];

app.get("/", (_, res) => {
  res.send(students).end();
});

app.post("/create-student", (req, res) => {
  const { firstName, lastName, studentId } = req.body;

  const isNumber = (value) => {
    return typeof value === "number" && !Number.isNaN(value);
  };

  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    !isNumber(studentId)
  ) {
    res.status(400).send({ message: "Invalid user data" }).end();
    return;
  }

  const student = { firstName, lastName, studentId };

  students.push(student);
  res.send(students).end();
});

app.get("/student/:studentId", (req, res) => {
  const studentId = +req.params.studentId;

  const student = students.find(
    (curStudent) => curStudent.studentId === studentId
  );

  if (!student) {
    return res.status(404).send("Student does not exist").end();
  }

  res.send(student).end();
});

app.delete("/student/:studentId", (req, res) => {
  const studentId = +req.params.studentId;

  console.log({ studentId, existingStudentId: students[0].studentId });

  const deleteStudent = students.find(
    (curStudent) => curStudent.studentId === studentId
  );

  if (deleteStudent) {
    students = students.filter(
      (curStudent) => curStudent.studentId !== studentId
    );

    return res.send(deleteStudent).end();
  }

  res.status(404).send({ message: "Student does not exist." }).end();
});

// demo versija su netobulumais

app.patch("/student/:studentId", (req, res) => {
  const studentId = +req.params.studentId;
  const { firstName, lastName } = req.body;

  const studentToUpdateIndex = students.findIndex(
    (curStudent) => curStudent.studentId === studentId
  );

  if (!firstName) {
    return res.status(404).send("First name was not provided").end();
  }

  const studentToUpdate = students[studentToUpdateIndex];
  console.log(studentToUpdate);

  if (studentToUpdateIndex !== -1) {
    console.log(firstName);
    students[studentToUpdateIndex] = {
      ...students[studentToUpdateIndex],
      firstName,
    };
  }

  res.send(students[studentToUpdateIndex]).end();
});

app.get("/filtered-users", async (req, res) => {
  const { name, surname } = req.query; // query skirta filtravimui per url: ?name=  pvz: ?name=Jonas&surname=Naujas
  /*
body: kurti, redaguoti
query: filtruoti
params: pasiekti tam tikrą įrašą
*/
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(dbCollection)
      .find({ name, surname })
      .toArray();

    console.log(name);
    await connection.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.patch("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { age, firstName, lastName } = req.body;

  // todo: test whether age, firstName, lastName are provided properly
  try {
    const con = await client.connect();
    const db = con.db(DB);

    const user = await db
      .collection("users")
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { age, firstName, lastName } }
      );

    await con.close();

    res.send(user).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

app.get("/user/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(dbCollection)
      .findOne({ _id: ObjectId(id) });

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

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));

/*
app.get("/orders", async (req, res) => {

  const { deliveryType } = req.body;

  try {

    const connection = await client.connect();
    const ordersCount = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .count({ deliveryType });
    const orders = await connection
     .db(DB)
      .collection(DBCOLLECTION)
      .find()
      .toArray();
    await connection.close();

    res.send({ ordersCount, orders });

  } catch (err) {

    res.status(500).send({ err }).end();

    throw Error(err);

  }

});

*/
/*
app.post("/orders", async (req, res) => {
  const { postOrders } = req.body;

  if (!Array.isArray(postOrders)) {
    return res

      .status(400)

      .send({ message: "postOrders is not an array" })

      .end();
  }

  try {
    const connection = await client.connect();

    const newOrders = await connection

      .db(DB)

      .collection(DBCOLLECTION)

      .insertMany(postOrders);

    await connection.close();

    res.send(newOrders).end();
  } catch (error) {
    res.status(500).send({ error }).end();
  }
});
*/
