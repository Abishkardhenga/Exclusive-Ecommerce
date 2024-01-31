const owner = require("../Models/Owner");
const { CreateToken, VerifyToken } = require("../middleware/jwt");
// require("dotenv").config();
// const Jwt = require("jsonwebtoken");

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
      const token = CreateToken(data);

      return res
        .status(200)
        .cookie("Token", token, {
          httpOnly: false,
          maxAge: 24 * 60 * 60 * 1000,
          // sameSite: "none",
          // secure: true,
        })
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
      const token = CreateToken(data);
      res
        .status(200)
        .cookie("Token", token)
        .json({ message: " Register SuccessFully ", data, success: true });
    }
  } catch (err) {
    res.status(500).json({ message: "error", err, success: false });
    console.log("this is err", err);
  }
};

const logoutHanlder = async (req, res) => {
  try {
    res.clearCookie("Token");
    res.status(200).json({ message: "suuccessfully logout ", success: true });
  } catch (e) {}
};

const VerifyUser = async (req, res) => {
  try {
    if (!req.cookies || !req.cookies.Token) {
      res
        .status(500)
        .json({ message: "No cookies is avaible", success: false });
    } else {
      const cdata = req.cookies.Token;
      console.log("this is cdata", cdata);
      const vdata = VerifyToken(cdata);
      // const verifiedData = Jwt.verify(data, process.env.jwt_secret);

      console.log("this is data", vdata);

      res
        .status(200)
        .json({ message: "user successfully verified  ", success: true });
    }
  } catch (e) {
    res.status(403).json({ message: e.message, success: false });
  }
};

module.exports = { RegisterHandler, LoginHandler, VerifyUser, logoutHanlder };
