import express from "express";
import { isLoggedIn } from "../src/middleware.js";
const router = express.Router();

router.get("/", isLoggedIn, (req, res) => {
  console.log(req.user);
  res.send({ msg: "Getting data..." });
});

export default router;
