const product = require("../Models/Product");

const AddProduct = async (req, res) => {
  try {
    const data = await product.create(req.body);

    if (!data) {
      res
        .status(404)
        .json({ message: "Data is not available ", success: false });
    } else {
      res
        .status(200)
        .json({ message: "Product added Successfully", data, success: true });
    }
  } catch (err) {
    console.error(err);
    res.status(403).json({ message: "error occured", err, success: false });
  }
};

const GetallProduct = async (req, res) => {
  let data = await product.find({ ...req.query });

  try {
    if (data.length == 0) {
      res.status(403).json({ message: "No Product is found", success: false });
    } else {
      res.status(200).json({ message: data, success: true });
    }
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: "error occured", err, success: false });
  }
};

const EditProduct = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await product.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
      },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "product updated successfully", data, success: true });
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: "error occured", err, success: false });
  }
};

const DeleteProduct = async (req, res) => {
  let { id } = req.params;
  try {
    let data = await product.findByIdAndDelete(id);
    if (!data) {
      res.status(404).json({ message: "Product not found", success: false });
    } else {
      res
        .status(200)
        .json({ message: "Product successfully deleted", data, success: true });
    }
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: "error occurred", err, success: false });
  }
};

module.exports = { AddProduct, GetallProduct, EditProduct, DeleteProduct };
