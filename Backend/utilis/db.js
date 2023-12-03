const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    let data = await mongoose.connect(process.env.mongo_URI);
    // res
    //   .status(200)
    //   .json({ message: "successfully connected to Mongo", success: true });

    // console.log("this is data", data);
    console.log("Successfully connected to ", process.env.mongo_URI);
  } catch (err) {
    console.error(err);
    // res.status(403).json({ message: "error occured", err, success: false });
  }
};

module.exports = dbConnect;
