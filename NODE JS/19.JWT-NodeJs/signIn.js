import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwtSecret = process.env.jwtSecret;
const issuedAt = new Date().getTime();
const expiresIn = 60;

export const signIn = (req, res) => {
  console.log(req.headers);
  const { userName, password } = req.body;

  const users = {
    Jonas: "kaledos",
    Anrius: "velykos",
  };

  if (typeof userName !== "string" || typeof password !== "string") {
    return res.status(400).send({ error: "data is incorrect" });
  }

  if (!userName || !password) {
    return res
      .status(400)
      .send({ error: "Please provide userName and password" });
  }
  // ar egzistuoja duomenu bazeje:
  if (password !== users[userName]) {
    return res.status(400).send("Incorect login data");
  }

  const token = jwt.sign({ userName, issuedAt }, jwtSecret, {
    algorithm: "HS256",
    expiresIn,
  }); //kartais vadinama accessToken
  // expiresIn turetu buti irgi .env

  res.cookie("token", token, { maxAge: expiresIn * 1_000 });

  //res.send("Sign in successfully").end();
  res.send({ accessToken: token }).end();
};
