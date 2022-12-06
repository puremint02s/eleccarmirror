import { Router } from "express";
import { login_required } from "../middlewares/login_required.js";
import { gasService } from "../services/gasService.js";

const gasRouter = Router();

//주유내역 생성
gasRouter.post("/gas", login_required, async function (req, res, next) {
    try {
        const user_id = req.currentUserId;
        const { oiling_date, gas_type, gas_amount, odometer } = req.body;

        const gasInfo = {
            user_id,
            oiling_date,
            gas_type,
            gas_amount,
            odometer,
        };

        const newGas = await gasService.addGas(gasInfo);

        return res.status(201).json(newGas);
    } catch (err) {
        next(err);
    }
});

//각 유저의 주유내역 가져오기
gasRouter.get("/gas/:id", login_required, async function (req, res, next) {
    try {
        const user_id = req.params.id;
        const getContents = await gasService.getContents(user_id);

        return res.status(201).json(getContents);
    } catch (err) {
        next(err);
    }
});

//주유내역 수정
gasRouter.put("/gas", login_required, async function (req, res, next) {
    try {
        const { _id, oiling_date, gas_type, gas_amount, odometer } = req.body;

        const obj_id = _id;

        const newGasInfo = { oiling_date, gas_type, gas_amount, odometer };

        const updateGasInfo = gasService.update(obj_id, newGasInfo);

        return res.status(201).json(updateGasInfo);
    } catch (err) {
        next(err);
    }
});

//주유내역 삭제
gasRouter.delete("/gas", login_required, async function (req, res, next) {
    try {
        const { _id } = req.body;

        const obj_id = _id;

        await gasService.delete(obj_id);

        return res.status(201).json({ message: "gas history Deleted" });
    } catch (err) {
        next(err);
    }
});

export { gasRouter };
