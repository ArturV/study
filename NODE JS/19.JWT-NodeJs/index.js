import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import { getHome } from "./getHome.js";
import { signIn } from "./signIn.js";

const app = express();
const PORT = 5_000;

//app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/home", getHome);
app.post("/sign-in", signIn);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
