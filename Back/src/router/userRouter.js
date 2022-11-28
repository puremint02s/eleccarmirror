import { Router } from "express";
import UserService from "../service/userService";
import SendEmail from "../middlewares/emailAuthMiddleware";

const router = Router();

//email auth
router.post("/auth", SendEmail, async (req, res, next) => {
    try {
        const result = req.body.result;
        res.status(200).json(result);
    } catch(err) {
        next(err);
    }
})

//sign up
router.post("/", async (req, res, next) => {
    try {
        const user = req.body;
        const newUser = await UserService.create(user);

        res.status(201).json(newUser);
    } catch(err) {
        next(err);
    }
})

//login
router.post("/login", async (req, res, next) => {
    res.send("User Sign in");
})


export default router;
