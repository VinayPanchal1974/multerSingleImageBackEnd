const express = require('express');
const AuthController = require("../../Controller/AdminController/AdminAuthController");

const authRouter = express.Router();


authRouter.post("/signup",AuthController.signup)
authRouter.post("/login",AuthController.login);
module.exports = authRouter;