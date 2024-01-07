const routes = require("express").Router();

const {
  CreateOrderHistory,
  GetOrderHistory,
  DeleteOrderHistory,
} = require("../Controller/Order");

routes.post("/createOrderHistory", CreateOrderHistory);
routes.get("/getOrderHistory", GetOrderHistory);
routes.delete("/deleteOrderHistory/:id", DeleteOrderHistory);

module.exports = routes;
