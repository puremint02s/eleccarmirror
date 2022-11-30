import express from "express";
import "dotenv/config";
import cors from "cors";
import { userRouter } from "./routers/userRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import { UserModel } from "./db/schemas/user.js";
import { v4 as uuidv4 } from "uuid";

const app = express();

const PORT = 4003;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(userRouter);

app.use(errorMiddleware);

// app.post("/user/register", async (req, res) => {
//     const { email, nickname, password } = req.body;

//     const user_id = uuidv4();

//     const createdNewUser = await UserModel.create({
//         user_id,
//         email,
//         nickname,
//         password,
//     });

//     return res.json({ createdNewUser });
// });

app.get("/", (req, res) => {
    return res.send("hi?");
});

app.listen(PORT, () => {
    console.log(
        `app is listening on ${PORT}, DB_URL : ${process.env.MONGODB_URL}`
    );
});
