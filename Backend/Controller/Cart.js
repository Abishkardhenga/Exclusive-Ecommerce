const model = require("../Models/Cart");
const CreateCartHandler = async (req, res) => {
  const data = await model.create(req.body);

  try {
    if (!data) {
      res.status(403).json({ message: "empty xa", success: false });
    } else {
      res.status(200).json({ message: data, success: true });
    }
  } catch (error) {
    res.status(403).json({ message: error, success: false });
  }
};
const getCartHandler = async (req, res) => {
  let data = await model.find({ ...req.query });

  try {
    if (!data) {
      res.status(403).json({ message: "empty xa", success: false });
    } else {
      res.status(200).json({ message: data, success: true });
    }
  } catch (err) {
    res.status(403).json({ message: err, success: false });
  }
};

const deleteCartHandler = async (req, res) => {};

module.exports = { CreateCartHandler, getCartHandler, deleteCartHandler };
