import is from "@sindresorhus/is";
import { Router } from "express";
import { userAuthService } from "../services/userAuthService.js";
import { mongoDBConnect } from "../middlewares/mongoDBConnect.js";
import { login_required } from "../middlewares/login_required.js";

const userRouter = Router();

//회원가입
userRouter.post("/user/register", async function (req, res, next) {
    try {
        if (is.emptyObject(req.body)) {
            throw new Error(
                "headers의 Content-Type을 application/json으로 설정해주세요"
            );
        }
        const {
            email,
            nickname,
            password,
            age,
            address,
            car_owned,
            elec_car_owned,
        } = req.body;

        const newUser = await userAuthService.addUser({
            email,
            nickname,
            password,
            age,
            address,
            car_owned,
            elec_car_owned,
        });

        return res.status(201).json(newUser);
    } catch (err) {
        next(err);
    }
});

//로그인
userRouter.post("/user/login", async function (req, res, next) {
    try {
        const { email, password } = req.body;

        const user = await userAuthService.getUser({ email, password });
        res.status(200).send(user);
    } catch (err) {
        next(err);
    }
});

//로그인 유저정보 GET
userRouter.get(
    "/user/current",
    login_required,
    async function (req, res, next) {
        try {
            const user_id = req.currentUserId;

            console.log("currentUserId", user_id);

            const currentUserInfo = await userAuthService.getUserInfo(user_id);

            res.status(200).send(currentUserInfo);
        } catch (err) {
            next(err);
        }
    }
);

//유저정보 수정

//유저정보 모두 보기
userRouter.get("/user/:id", login_required, async function (req, res, next) {
    try {
        const user_id = req.params.id;

        const currentUser = await userAuthService.getUserInfo(user_id);

        res.status(201).send(currentUser);
    } catch (err) {
        next(err);
    }
});

//유저의 커뮤니티 리스트 불러오기
// userRouter.get(
//     "/user/:user_id/community",
//     login_required,
//     async function (req, res, next) {
//         try {
//             const { user_id } = req.params;

//             const getUsersCommunities =
//                 await userAuthService.getUsersCommunities(user_id);

//             return res.status(201).json(getUsersCommunities);
//         } catch (err) {
//             next(err);
//         }
//     }
// );

export { userRouter };
