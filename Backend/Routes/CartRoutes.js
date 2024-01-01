const {
  getCartHandler,
  CreateCartHandler,
  deleteCartHandler,
} = require("../Controller/Cart");

const routes = require("express").Router();

routes.get("/getCart", getCartHandler);
routes.post("/createCart", CreateCartHandler);
routes.delete("/deleteCart", deleteCartHandler);

module.exports = routes;
