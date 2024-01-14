const routes = require("express").Router();
const {
  createBookmark,
  getBookmark,
  deleteBookmark,
} = require("../Controller/Bookmark");

routes.post("/createBookmark", createBookmark);
routes.get("/getBookmark", getBookmark);
routes.delete("/deleteBookmark/:id", deleteBookmark);

module.exports = routes;
