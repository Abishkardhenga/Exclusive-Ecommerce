const mongoose = require("mongoose");

const bookmark = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },

    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "owner",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("bookmarkSchema", bookmark);
