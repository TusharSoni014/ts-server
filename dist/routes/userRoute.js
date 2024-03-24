"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("/signup", userController_1.signup);
exports.userRouter.get("/login", userController_1.login);
exports.userRouter.get("/logout", userController_1.logout);
