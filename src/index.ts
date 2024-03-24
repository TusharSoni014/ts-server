import express from "express";
import { userRouter } from "./routes/userRoute";

const app = express();

app.use("/user", userRouter);

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
