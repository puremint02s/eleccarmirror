import is from "@sindresorhus/is";
import { Router } from "express";
import { userAuthService } from "../services/userAuthService.js";
import { mongoDBConnect } from "../middlewares/mongoDBConnect.js";

const userRouter = Router();

userRouter.post("/user/register", async function (req, res, next) {
    try {
        if (is.emptyObject(req.body)) {
            throw new Error(
                "headers의 Content-Type을 application/json으로 설정해주세요"
            );
        }
        const { email, nickname, password } = req.body;

        console.log("email", email, "pw", password);

        const newUser = await userAuthService.addUser({
            email,
            nickname,
            password,
        });

        console.log("newUser Router", newUser);

        return res.status(201).json(newUser);
    } catch (err) {
        console.log(`지나갈수없다`);
        next(err);
    }
});

export { userRouter };
