const routes = require("express").Router();
const {
  CreateCartHandler,
  getCartHandler,
  deleteCartHandler,
  editCartHandler,
} = require("../Controller/Cart");

routes.post("/createCart", CreateCartHandler);
routes.get("/getCart", getCartHandler);
routes.delete("/deleteCart/:id", deleteCartHandler);
routes.patch("/editCart/:id", editCartHandler);

module.exports = routes;
