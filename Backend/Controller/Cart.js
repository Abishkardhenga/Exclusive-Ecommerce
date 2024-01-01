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
    res.status(403).json({ message: err.message, success: false });
  }
};

const deleteCartHandler = async (req, res) => {
  const { id } = req.params;
  const data = await model.findByIdAndDelete(id);
  try {
    if (!id) {
      res.status(403).json({ message: "Error id", success: false });
    } else {
      res.status(200).json({
        message: "successfully deleted the cart item",
        data,
        success: true,
      });
    }
  } catch (err) {
    res.status(403).json({ message: err.message, success: false });
  }
};

module.exports = { CreateCartHandler, getCartHandler, deleteCartHandler };
