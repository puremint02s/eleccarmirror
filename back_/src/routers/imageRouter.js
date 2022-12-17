import { Router } from "express";
import { ImageModel } from "../db/schemas/image.js";
import { login_required } from "../middlewares/login_required.js";

const imageRouter = Router();

import multer from "multer";
import fs from "fs";
import path from "path";
import request from "request";
import dotenv from "dotenv";
dotenv.config();

//upload폴더가 존재하는지 확인후 없으면 생성
try {
    fs.accessSync("uploads");
} catch (err) {
    console.log("upload folder do not exist");
    fs.mkdirSync("uploads");
}
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

imageRouter.get("/images", async (req, res, next) => {
    console.log(process.env.SERVER_PORT);
    res.json("[TEST] imageRouter가 제대로 동작하고 있습니다.");
});

//multer를 이용해 받은 key값이 'image'인 FormData를 images 경로에 업로드 한다.
imageRouter.post("/images", upload.single("image"), async (req, res, next) => {
    let filename = req.file.filename;

    const options = {
        method: "POST",
        uri: `${process.env.AI_SERVER_URL}/predict`,
        body: {
            filename,
        },
        json: true,
    };
    console.log("REQUEST TO AI SERVER FROM BACK SERVER");
    request(options, async function (error, response, body) {
        if (response === undefined) {
            return res.status(400).json("파이썬 서버 에러");
        }
        if (!error && response.statusCode == 200) {
            console.log("RESPONSE DATA : " + response.body + " FROM AI SERVER");
            return res.status(200).json({
                filename: req.file.filename,
                prediction: response.body,
            });
        }
    });
});

imageRouter.post(
    "/community/images",
    login_required,
    upload.single("image"),
    async (req, res, next) => {
        const user_id = req.currentUserId;
        const filename = req.file.filename;

        const result = await ImageModel.create({ user_id, filename });

        return res.status(201).json(result);
    }
);

export { imageRouter };
