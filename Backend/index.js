const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const db = require("./utilis/db");

db();

app.listen(8000, () => {
  console.log("port started at 8000");
});
