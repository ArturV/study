import express from "./express";
const router = express.Router();

const { isLoggedIn } = require("./middleware");

router.get("/", isLoggedIn, (req, res) => {
  res.send("Route");
});

export default router;
