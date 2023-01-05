import cookieParser from "cookie-parser";
import express from "express";

const app = express();
const PORT = 5_000;

app.use(cookieParser());
app.use(express.json());

app.get("/home", getHome);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
