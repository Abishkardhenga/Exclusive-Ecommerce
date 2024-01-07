const routes = require("express").Router();

const {
  CreateOrderHistory,
  GetOrderHistory,
  DeleteOrderHistory,
} = require("../Controller/Order");

routes.post("/createOrderHistory", CreateOrderHistory);
routes.get("/getOrderHistory/:id", GetOrderHistory);
routes.delete("/deleteOrderHistory", DeleteOrderHistory);

module.exports = routes;
