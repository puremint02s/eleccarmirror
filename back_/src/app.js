import express from "express";
import "dotenv/config";
import cors from "cors";
import { userRouter } from "./routers/userRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import BodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(BodyParser.urlencoded({ extended: false }));

app.use(userRouter);

app.use(errorMiddleware);

app.get("/", (req, res) => {
    return res.send("hi?");
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(
        `app is listening on ${process.env.SERVER_PORT}, DB_URL : ${process.env.MONGODB_URL}`
    );
});
