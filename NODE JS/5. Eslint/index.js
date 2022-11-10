const express = require("express");
const cors = require("cors");
/*
npm init @eslint/config  - instaluojame Eslint'a
npx eslint .  - paleidziame Eslint'a
*/
const app = express();

const PORT = 5_000;

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
	// _ pries kableli reiskia kintamo nenaudojam, nors privalome islaikyti eiliskuma
	res.send({ age: 24 });
});

// localhost:5000/date?locale=lt-LT    => 2022-11-09 19:44:53
app.get("/date", (req, res) => {
	const locale = req.query.locale || "en-US";
	// const { locale } = req.query;

	const formattedDate = new Date().toLocaleString(locale);

	res.send(formattedDate);
});

app.post("/", (req, res) => {
	console.log(req.params);

	res.send("0");
});

app.post("/:userId", (req, res) => {
	res.send({ age: req.body.age * 2 });
});

app.post("/", (req, res) => {
	const age = req.body?.age || 5; // naudok req.body.age. jei neegzistuoja - naudok 5

	// jei `age` yra truthy reiksme (ne 0, ne null, ne undefined, ne '', ...)
	// const providedAge = age ? age : 0;

	res.send({ ageTimesTwo: age * 2 });
});

// localhost:5000/jonas-152 grąžins { userName: 'jonas-152' }
app.get("/:userName", (req, res) => {
	const { userName } = req.params;
	// const userName = req.params.userName;

	const user = users.find((curUser) => curUser.name.toLocaleLowerCase() === userName.toLocaleLowerCase().trim());

	res.send(user ?? { info: "User not found" });
});

app.listen(PORT, () => {
	console.log(`server is runnig on port: ${PORT}`);
});
