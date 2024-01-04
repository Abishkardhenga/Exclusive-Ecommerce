const routes = require("express").Router();
const {
  createAddressController,
  deleteAddressController,
  editAddressController,
  getAddressController,
} = require("../Controller/Shipping");

routes.get("/getCart", getAddressController);
routes.post("/createCart", createAddressController);
routes.delete("/deleteCart/:id", deleteAddressController);
routes.patch("/editCart/:id", editAddressController);

module.exports = routes;
