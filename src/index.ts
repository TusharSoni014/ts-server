import express from "express";
import { userRouter } from "./routes/userRoute";

const app = express();

app.use("/user", userRouter);

console.log("this is a test")

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
