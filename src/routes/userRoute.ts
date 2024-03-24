import { Router } from "express";
import { login, logout, signup, userinfo } from "../controllers/userController";

export const userRouter = Router();

userRouter.get("/signup", signup);
userRouter.get("/login", login);
userRouter.get("/logout", logout);
userRouter.get("/user-info", userinfo);
