const owner = require("../Models/Owner");
const LoginHandler = async (req, res) => {
  const { email, password } = req.body;

  const data = await owner.findOne({ email });
  try {
    if (!data) {
      return res
        .status(404)
        .json({ message: "No data found ", success: false });
    }
    if (!email || !password) {
      return res
        .status(403)
        .json({ message: " Enter all the fields", success: false });
    } else if (data.password !== password) {
      return res
        .status(403)
        .json({ message: "passwor is wrong  ", success: false });
    } else {
      return res
        .status(200)
        .json({ message: "Login SuccessFully ", data, success: true });
    }
  } catch (err) {
    console.log("this is err", err);
    return res.status(403).json({ message: err, success: false });
  }
};
const RegisterHandler = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    if (!email || !password || !username) {
      res
        .status(400)
        .json({ message: "Enter all the fields ", success: false });
    } else {
      const data = await owner.create(req.body);
      res
        .status(200)
        .json({ message: " Register SuccessFully ", data, success: true });
    }
  } catch (err) {
    res.status(500).json({ message: "error", err, success: false });
    console.log("this is err", err);
  }
};

module.exports = { RegisterHandler, LoginHandler };
