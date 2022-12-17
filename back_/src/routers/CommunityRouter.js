import is from "@sindresorhus/is";
import { Router } from "express";
import { communityService } from "../services/communityService.js";
import { userAuthService } from "../services/userAuthService.js";
import { login_required } from "../middlewares/login_required.js";

const communityRouter = Router();

//커뮤니티 글 등록
communityRouter.post(
    "/community",
    login_required,
    async function (req, res, next) {
        try {
            const user_id = req.currentUserId;

            const user = await userAuthService.getUserInfo(user_id);

            const { title, content, hashtags } = req.body;

            const filteredHashtags = hashtags.replace(/\s/g, "").split(",");

            const data = {
                user_id,
                nickname: user.nickname,
                title,
                content,
                hashtags: filteredHashtags,
                creator: req.user_id,
            };

            const uploadedContent = await communityService.addContent(data);

            return res.status(201).json(uploadedContent);
        } catch (err) {
            next(err);
        }
    }
);

//커뮤니티 글 가져오기 - 페이지 당
communityRouter.get(
    "/community",
    login_required,
    async function (req, res, next) {
        try {
            const page = Number(req.query.page || 1);
            const perPage = Number(req.query.perPage || 10);

            console.log("page =>", page);
            console.log("perPage =>", perPage);

            const content = await communityService.getContents(page, perPage);

            return res.status(201).json(content);
        } catch (err) {
            next(err);
        }
    }
);

//커뮤니티 글 가져오기 - 모두
communityRouter.get(
    "/community/all",
    login_required,
    async function (req, res, next) {
        try {
            const content = await communityService.getContentsAll();

            return res.status(201).json(content);
        } catch (err) {
            next(err);
        }
    }
);

//유저가 쓴 커뮤니티 글
communityRouter.get(
    "/community/:id/user",
    login_required,
    async function (req, res, next) {
        try {
            const user_id = req.params.id;
            const content = await communityService.getUserContents(user_id);

            return res.status(201).json(content);
        } catch (err) {
            next(err);
        }
    }
);

//해당 커뮤니티 글
communityRouter.get(
    "/community/:id",
    login_required,
    async function (req, res, next) {
        try {
            const obj_id = req.params.id;
            const content = await communityService.getEachContent(obj_id);

            return res.status(201).json(content);
        } catch (err) {
            next(err);
        }
    }
);

//커뮤니티 글 수정
communityRouter.put(
    "/community",
    login_required,
    async function (req, res, next) {
        try {
            const { _id, title, content, hashtags } = req.body;

            const newInput = { _id, title, content, hashtags };

            console.log("newInput 라우터 감지", newInput);

            const updateContent = await communityService.updateContent(
                newInput
            );

            return res
                .status(201)
                .json({ message: "커뮤니티 글이 업데이트 되었습니다!" });
        } catch (err) {
            next(err);
        }
    }
);

//유저의 커뮤니티 글 모두 수정
communityRouter.put(
    "/community/users",
    login_required,
    async function (req, res, next) {
        try {
            const user_id = req.currentUserId;
            const { nickname } = req.body;

            const newInput = { user_id, nickname };

            // console.log("newInput 라우터 감지", newInput);

            const updateUsersContent = await communityService.updateAllContent(
                newInput
            );

            return res.status(201).json({
                message: "해당 유저의 커뮤니티 글이 모두 업데이트 되었습니다",
            });
        } catch (err) {
            next(err);
        }
    }
);

//커뮤니티 글 삭제
communityRouter.delete(
    "/community",
    login_required,
    async function (req, res, next) {
        try {
            const { _id } = req.body;

            await communityService.deleteContent(_id);

            return res
                .status(201)
                .json({ message: "Community Content Deleted" });
        } catch (err) {
            next(err);
        }
    }
);

export { communityRouter };
