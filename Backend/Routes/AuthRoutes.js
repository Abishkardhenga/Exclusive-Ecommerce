const {
  LoginHandler,
  RegisterHandler,
  VerifyUser,
  logoutHanlder,
} = require("../Controller/Auth");

const routes = require("express").Router();

routes.post("/login", LoginHandler);
routes.post("/register", RegisterHandler);
routes.post("/verify-user", VerifyUser);
routes.get("/logout", logoutHanlder);

module.exports = routes;
