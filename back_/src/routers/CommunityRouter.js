import is from "@sindresorhus/is";
import { Router } from "express";
import { communityService } from "../services/communityService.js";
import { login_required } from "../middlewares/login_required.js";

const communityRouter = Router();

//커뮤니티 글 등록
communityRouter.post("/community/upload", async function (req, res, next) {
    try {
        const user_id = req.currentUserId;
        const { title, content, hashtags } = req.body;

        const data = {
            user_id,
            title,
            content,
            hashtags,
            creator: req.user_id,
        };

        const uploadedContent = await communityService.addContent(data);

        return res.status(201).json(uploadedContent);
    } catch (err) {
        next(err);
    }
});

//커뮤니티 글 가져오기
communityRouter.get("/community/list", async function (req, res, next) {
    try {
        // const user_id = req.currentUserId;
        const content = await communityService.getContents();

        return res.status(201).json(content);
    } catch (err) {
        next(err);
    }
});

//커뮤니티 글 수정

//커뮤니티 글 삭제

export { communityRouter };
