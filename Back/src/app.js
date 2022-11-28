import express from "express";
import connectDB from "./db";
import errorMiddleware from "./middlewares/errorMiddleware";
import userRouter from "./router/userRouter";

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/users", userRouter)

app.use(errorMiddleware);

export default app;