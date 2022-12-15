import { Router } from "express";
import { login_required } from "../middlewares/login_required.js";
import { carService } from "../services/carService.js";

const carRouter = Router();

carRouter.post("/car", login_required, async function (req, res, next) {
    try {
        const newData = {
          user_id: req.currentUserId,
          current: {
            model: req.body.current.model,
            brand: req.body.current.brand,
          },
          recommended: {
            model: req.body.recommended.model,
            brand: req.body.recommended.brand,
          },
        };

        const newCar = await carService.addCar(newData);

        return res.status(201).json(newCar);
    } catch (err) {
        console.log(err);
    }
});

carRouter.get("/car", login_required, async function (req, res, next) {
    try {
        const user_id = req.currentUserId;

        const getUserCar = await carService.getCar(user_id);

        return res.status(201).json(getUserCar);
    } catch (err) {
        console.log(err);
    }
});

carRouter.put("/car", login_required, async function (req, res, next) {
    try {
        const user_id = req.currentUserId;
        const updatedData = {
          current: {
            model: req.body.current.model,
            brand: req.body.current.brand,
          },
          recommended: {
            model: req.body.recommended.model,
            brand: req.body.recommended.brand,
          },
        };

        const updateUserCar = await carService.updateCar(user_id, updatedData);

        return res.status(201).json(updateUserCar);
    } catch (err) {
        console.log(err);
    }
});

export { carRouter };
