import is from "@sindresorhus/is";
import { Router } from "express";
import { communityService } from "../services/communityService.js";
import { mongoDBConnect } from "../middlewares/mongoDBConnect.js";
import { login_required } from "../middlewares/login_required.js";

const userRouter = Router();

//회원가입
userRouter.post("/community/upload", async function (req, res) {
    const { title, content, hashtags } = req.body;

    await communityService.addContents({ title, content, hashtags });
});

export { userRouter };
