import { Router } from "express";
import { login_required } from "../middlewares/login_required.js";
import { typeService } from "../services/typeService.js";

const typeRouter = Router();

//test type 등록
typeRouter.post("/type", login_required, async function (req, res, next) {
    try {
        const user_id = req.currentUserId;
        const { type } = req.body;

        const typeData = { user_id, type };

        const newType = await typeService.addType(typeData);

        return res.status(201).json(newType);
    } catch (err) {
        next(err);
    }
});

//test type 가져오기
typeRouter.get("/type", login_required, async function (req, res, next) {
    try {
        const user_id = req.currentUserId;

        const getType = await typeService.getType(user_id);

        return res.status(201).json(getType);
    } catch (err) {
        next(err);
    }
});

//test type 수정
typeRouter.put("/type", login_required, async function (req, res, next) {
    try {
        const { _id, type } = req.body;

        const newInput = { _id, type };

        const updatedType = await typeService.updateType(newInput);

        return res.status(201).json(updatedType);
    } catch (err) {
        next(err);
    }
});

export { typeRouter };
