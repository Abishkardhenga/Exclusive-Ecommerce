const mongoose = require("mongoose");

const OrderHistory = new mongoose.Schema(
  {
    product: {
      ref: "product",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    cartInfo: {
      ref: "cart",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

module.export = mongoose.model("orderHistorySchema", OrderHistory);
