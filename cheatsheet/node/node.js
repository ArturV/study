/*
Node Package Manager (npm) naudojamas įkelti bei valdyti packages (bibliotekos,frameworkai)
bei atlikti kitus veiksmus susijusius su esamu projektu

su kiekvienu nauju projektu:

npm init -y
npm i express cors dotenv
npm i -D nodemon
npm i mongodb // kai reikia duombazes
npm start

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

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
