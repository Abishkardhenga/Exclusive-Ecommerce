const mongoose = require("mongoose");

const OrderHistory = new mongoose.Schema(
  {
    product: {
      ref: "product",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    shipping: {
      ref: "shippingDetails",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    owner: {
      ref: "owner",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("orderHistorySchema", OrderHistory);
