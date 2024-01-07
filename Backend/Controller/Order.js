const Order = require("../Models/Order");
const CreateOrderHistory = async () => {
  const data = await Order.create(req.body);
  try {
    res
      .status(200)
      .json({
        message: "successfuly created the history",
        data,
        success: true,
      });
  } catch (err) {
    res.status(403).json({ message: err.message, success: false });
  }
};
const GetOrderHistory = async () => {
  try {
  } catch (err) {
    res.status(403).json({ message: err.message, success: false });
  }
};
const DeleteOrderHistory = async () => {
  try {
  } catch (err) {
    res.status(403).json({ message: err.message, success: false });
  }
};

module.exports = {
  CreateOrderHistory,
  GetOrderHistory,
  DeleteOrderHistory,
};
