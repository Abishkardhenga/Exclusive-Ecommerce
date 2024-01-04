const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./utilis/db");
app.use(express.json());

db();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(require("./Routes/AuthRoutes"));
app.use(require("./Routes/ProductRoutes"));
app.use(require("./Routes/CartRoutes"));
app.use(require("./Routes/Shipping"));
app.listen(8000, () => {
  console.log("port started at 8000");
});
