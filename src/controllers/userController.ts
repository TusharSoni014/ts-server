import { Request, Response } from "express";

export const signup = (req: Request, res: Response) => {
  return res.send({ message: "Signup Success!" });
};
export const login = (req: Request, res: Response) => {
  return res.send({ message: "Login Success!" });
};
export const logout = (req: Request, res: Response) => {
  return res.send({ message: "Logout Success!" });
};