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
            id,
            nickname,
            password,
            age,
            address,
            car_owned,
            elec_car_owned,
        } = req.body;

        const newUser = await userAuthService.addUser({
            email,
            id,
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
        const { id, password } = req.body;

        const user = await userAuthService.getUser({ id, password });
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
userRouter.put("/user", login_required, async function (req, res, next) {
    try {
        const user_id = req.currentUserId;

        const email = req.body.email ?? null;
        const id = req.body.id ?? null;
        const nickname = req.body.nickname ?? null;
        // const password = req.body.password ?? null;
        const age = req.body.age ?? null;
        const address = req.body.address ?? null;
        const car_owned = req.body.car_owned ?? null;
        const elec_car_owned = req.body.elec_car_owned ?? null;
        // const {
        //     email,
        //     id,
        //     nickname,
        //     password,
        //     age,
        //     address,
        //     car_owned,
        //     elec_car_owned,
        // } = req.body;
        // const newInput = {
        //     user_id,
        //     email,
        //     id,
        //     nickname,
        //     password,
        //     age,
        //     address,
        //     car_owned,
        //     elec_car_owned,
        // };

        const newInput = {
            user_id,
            email,
            id,
            nickname,
            // password,
            age,
            address,
            car_owned,
            elec_car_owned,
        };

        const updateUserInfo = await userAuthService.updateUser(newInput);

        if (updateUserInfo.errorMessage) {
            throw new Error(updateUserInfo.errorMessage);
        }

        return res.status(201).json(updateUserInfo);
    } catch (err) {
        next(err);
    }
});

//유저정보 보기
userRouter.get("/user/:id", login_required, async function (req, res, next) {
    try {
        const user_id = req.params.id;

        const currentUser = await userAuthService.getUserInfo(user_id);

        res.status(201).send(currentUser);
    } catch (err) {
        next(err);
    }
});

export { userRouter };
