import { Router } from "express";
import { login, logout, signup } from "../controllers/userController";

export const userRouter = Router();

userRouter.get("/signup", signup);
userRouter.get("/login", login);
userRouter.get("/logout", logout);