const Order = require("../Models/Order");

const CreateOrderHistory = async (req, res) => {
  try {
    const data = await Order.create(req.body);

    res.status(200).json({
      message: "successfully created the history",
      data,
      success: true,
    });
  } catch (err) {
    res.status(403).json({ message: err.message, success: false });
  }
};

const GetOrderHistory = async (req, res) => {
  const { id } = req.params;
  const data = await Order.find({ ...req.query });
  try {
    res.status(200).json({
      message: "Found the info successfully",
      data,
      success: true,
    });
  } catch (err) {
    res.status(403).json({ message: err.message, success: false });
  }
};
const DeleteOrderHistory = async (req, res) => {
  const { id } = req.params;
  const data = await order.findByIdAndDelete(id);
  try {
    res
      .status(200)
      .json({ message: "successfully deleted it ", data, success: true });
  } catch (err) {
    res.status(403).json({ message: err.message, success: false });
  }
};

module.exports = {
  CreateOrderHistory,
  GetOrderHistory,
  DeleteOrderHistory,
};
