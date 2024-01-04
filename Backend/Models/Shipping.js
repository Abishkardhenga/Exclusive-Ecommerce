const mongoose = require("mongoose");

const shippingSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zipcode: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("shippingDetails ", shippingSchema);
