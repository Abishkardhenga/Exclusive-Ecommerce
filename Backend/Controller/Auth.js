const LoginHandler = async (req, res) => {
  try {
    res.status(200).json({ message: "Login SuccessFully ", success: true });
  } catch (err) {
    res.status(403).json({ message: "error", err, success: false });
  }
};
const RegisterHandler = async (req, res) => {
  try {
    res.status(200).json({ message: " Register SuccessFully ", success: true });
  } catch (err) {
    res.status(403).json({ message: "error", err, success: false });
  }
};

module.exports = { RegisterHandler, LoginHandler };
