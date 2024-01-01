const {
  getCartHandler,
  CreateCartHandler,
  deleteCartHandler,
  editCartHandler
} = require("../Controller/Cart");

const routes = require("express").Router();

routes.get("/getCart", getCartHandler);
routes.post("/createCart", CreateCartHandler);
routes.delete("/deleteCart/:id", deleteCartHandler);
routes.patch("/editCart/:id", editCartHandler);

module.exports = routes;
