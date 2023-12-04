const {
  AddProduct,
  GetallProduct,
  EditProduct,
  DeleteProduct,
} = require("../Controller/Product");

const routes = require("express").Router();

routes.post("/addproduct", AddProduct);
routes.get("/getproduct", GetallProduct);
routes.patch("/editproduct/:id", EditProduct);
routes.delete("/deleteproduct/:id", DeleteProduct);

module.exports = routes;
