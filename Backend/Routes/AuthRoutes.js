const { LoginHandler, RegisterHandler } = require("../Controller/Auth");

const routes = require("express").Router();

routes.post("/login", LoginHandler);
routes.post("/register", RegisterHandler);

module.exports = routes;
