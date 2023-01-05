import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import auth from "../routes/auth.js";
//import article from "../routes/article.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", auth);
//app.use("/article", article);

app.get("/", (_, res) => {
  res.send("Server running").end();
});

app.all("*", (_, res) => {
  res.status(404).send("Page not found").end();
});

app.listen(PORT, () => {
  console.log(`Server runnin on port: ${PORT}`);
});
