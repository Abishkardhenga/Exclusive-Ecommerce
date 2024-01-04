const routes = require("express").Router();
const {
  createAddressController,
  deleteAddressController,
  editAddressController,
  getAddressController,
} = require("../Controller/Shipping");

routes.get("/getShippingAddress", getAddressController);
routes.post("/createShippingAddress", createAddressController);
routes.delete("/deleteShippingAddress/:id", deleteAddressController);
routes.patch("/editShippingAddress/:id", editAddressController);

module.exports = routes;
