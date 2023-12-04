const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const db = require("./utilis/db");
app.use(express.json());
db();
app.use(require("./Routes/AuthRoutes"));
app.listen(8000, () => {
  console.log("port started at 8000");
});
