import { Router } from "express";
import { login_required } from "../middlewares/login_required";

const commentsRouter = Router();

commentsRouter.post(
    "/comments",
    login_required,
    async function (req, res, next) {
        // const {}
    }
);

export { commentsRouter };
