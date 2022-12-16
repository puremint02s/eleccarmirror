import is from "@sindresorhus/is";
import multer from "multer";
import { Router } from "express";
import { communityService } from "../services/communityService.js";
import { userAuthService } from "../services/userAuthService.js";
import { login_required } from "../middlewares/login_required.js";
import { uploadFiles } from "../middlewares/imageMiddleware.js";

const communityRouter = Router();

//multer를 이용해서 이미지 업로드, multer({속성값 객체})
const upload = multer({
    //업로드한 이미지를 어디에 저장할지 - 로컬디스크
    storage: multer.diskStorage({
        //저장위치 결정 함수
        destination(req, file, done) {
            done(null, "uploads");
        },
        //파일명 결정 함수
        filename(req, file, done) {
            //파일 확장자 추출
            const ext = path.extname(file.originalname);
            //path에서 파일명 추출
            const basename = path.basename(file.originalname, ext);
            //파일명 + 시간 + 확장자
            done(null, basename + "_" + new Date().getTime() + ext);
        },
    }),
    limits: {
        fileSize: 20 * 1024 * 1024, //20MB, MB=2^10*바이트, KM=2^3*바이트
    },
});

//커뮤니티 글 등록
communityRouter.post(
    "/community",
    login_required,
    upload.single("file"),
    async function (req, res, next) {
        console.log("file", req.file); //undefined

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
                // filename: req.file.filename,
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
