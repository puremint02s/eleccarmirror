import is from "@sindresorhus/is";
import { Router } from "express";
import { mongoDBConnect } from "../middlewares/mongoDBConnect.js";
import { login_required } from "../middlewares/login_required.js";
import { stepService } from "../services/stepService.js";

const stepRouter = Router();

//유저 step 가져오기
stepRouter.get("/step", login_required, async function (req, res, next) {
    try {
        const user_id = req.currentUserId;

        const getStep = await stepService.getUserStep(user_id);

        return res.status(201).json(getStep);
    } catch (err) {
        console.log(err);
    }
});

//유저 step 등록
stepRouter.post("/step", login_required, async function (req, res, next) {
    try {
        const newStepData = {
            user_id: req.currentUserId,
            step: req.body.step,
        };

        const newStep = await stepService.addUserStep(newStepData);

        return res.status(201).json(newStep);
    } catch (err) {
        console.log(err);
    }
});

//유저 step 업데이트
stepRouter.put("/step", login_required, async function (req, res, next) {
    try {
        const user_id = req.currentUserId;
        const step = req.body.step;

        const updatedStep = await stepService.updateUserStep(user_id, step);

        return res.status(201).json(updatedStep);
    } catch (err) {
        console.log(err);
    }
});

export { stepRouter };
