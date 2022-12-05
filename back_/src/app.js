import express from "express";
import "dotenv/config";
import cors from "cors";
import { userRouter } from "./routers/userRouter.js";
import { imageRouter } from "./routers/imageRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import BodyParser from "body-parser";
import { communityRouter } from "./routers/CommunityRouter.js";

const app = express();

app.use(cors());
app.use(express.static('./uploads')); //업로드한 이미지에 접근 위함
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(BodyParser.urlencoded({ extended: false }));

app.use(userRouter);
app.use(imageRouter);app.use(communityRouter);

app.use(errorMiddleware);

app.get("/", (req, res) => {
    return res.send("hi?");
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(
        `app is listening on ${process.env.SERVER_PORT}, DB_URL : ${process.env.MONGODB_URL}`
    );
});