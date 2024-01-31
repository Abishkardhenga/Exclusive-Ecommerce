const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./utilis/db");
const cookieParser = require("cookie-parser");

db();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(require("./Routes/AuthRoutes"));
app.use(require("./Routes/ProductRoutes"));
app.use(require("./Routes/Shipping"));
app.use(require("./Routes/CartRoutes"));
app.use(require("./Routes/OrderRoutes"));
app.use(require("./Routes/BookmarkRoutes"));
app.listen(8000, () => {
  console.log("port started at 8000");
});
