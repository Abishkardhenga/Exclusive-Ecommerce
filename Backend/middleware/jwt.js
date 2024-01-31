const Jwt = require("jsonwebtoken");
require("dotenv").config();

const CreateToken = (data) => {
  const secretData = Jwt.sign({ data }, process.env.jwt_secret, {
    expiresIn: 60 * 60 * 60,
  });
  return secretData;
};

const VerifyToken = (data) => {
  const verifiedData = Jwt.verify(data, process.env.jwt_secret);
  return verifiedData;
};

module.exports = {
  CreateToken,
  VerifyToken,
};
