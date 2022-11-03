const http = require("http");
const port = 5_000;
const randomNumber = Math.round(Math.random());

// http.createServer sukuria ir grąžina serverį. Pasiekia užklausą (req) ir atsakymą (res)
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain"); // panašu, kaip JavaScripte su fetch

  // jei atsitiktinis numeris yra 1, grąžink error (klaidą)
  if (randomNumber) {
    res.statusCode = 201;
    res.end("Puikus ketv vakaras!");
  }

  res.statusCode = 200;

  res.end("Hello!");
});

server.listen(port, () => {
  // nurodom portą, ties kuriuo bus klausomasi (laukiama užklausų)
  console.log(`Server is running ${randomNumber}.`);
});
