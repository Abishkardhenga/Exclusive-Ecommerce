const model = require("../Models/Shipping");

const createAddressController = async (req, res) => {
  const { fullname, phonenumber, emailAddress, zipcode, country, city, user } =
    req.body;

  try {
    if (
      !fullname ||
      !phonenumber ||
      !emailAddress ||
      !zipcode ||
      !country ||
      !user ||
      !city
    ) {
      return res.status(403).json({
        message: "Please enter all the details correctly.",
        success: false,
      });
    }

    // Assuming `model` is your mongoose model
    const data = await model.create(req.body);

    res.status(200).json({
      message: "Successfully added the address",
      data,
      success: true,
    });
  } catch (err) {
    res.status(403).json({ message: err.message, success: false });
  }
};

const getAddressController = async (req, res) => {
  try {
    const data = await model.find({ ...req.query });
    if (!data) {
      res
        .status(403)
        .json({ message: "no data is available ", success: false });
    } else {
      res.status(200).json({ message: data, success: true });
    }
  } catch (err) {
    res.status(403).json({ message: err.message, success: false });
  }
};

const editAddressController = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.findByIdAndUpdate(
      id,
      {
        fullname: req.body.fullname,
        phonenumber: req.body.phonenumber,
        country: req.body.country,
        city: req.body.city,
        emailAddress: req.body.emailAddress,
        zipcode: req.body.zipcode,
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

const deleteAddressController = async (req, res) => {
  let { id } = req.params;
  try {
    let data = await model.findByIdAndDelete(id);
    if (!data) {
      res
        .status(404)
        .json({ message: "Detail not found to delete ", success: false });
    } else {
      res
        .status(200)
        .json({ message: "Product successfully deleted", data, success: true });
    }
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: err.message, success: false });
  }
};

module.exports = {
  createAddressController,
  getAddressController,
  editAddressController,
  deleteAddressController,
};
