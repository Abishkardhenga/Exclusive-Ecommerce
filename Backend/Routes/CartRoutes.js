const {
  getCartHandler,
  CreateCartHandler,
  deleteCartHandler,
} = require("../Controller/Cart");

const routes = require("express").Router();

routes.get("/getCart", getCartHandler);
routes.post("/createCart", CreateCartHandler);
routes.delete("/deleteCart/:id", deleteCartHandler);

module.exports = routes;
