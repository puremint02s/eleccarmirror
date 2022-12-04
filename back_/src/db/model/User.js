import { UserModel } from "../schemas/user.js";
import mongoose from "mongoose";

class User {
    static async create(newUser) {
        try {
            const createdNewUser = UserModel.create(newUser);

            return createdNewUser;
        } catch (err) {
            console.log("이것이 바로 에러", err);
        }
    }

    static async findByEmail({ email }) {
        const user = await UserModel.findOne({ email });
        return user;
    }

    static async findById(user_id) {
        const user = await UserModel.findOne({ user_id: user_id });
        return user;
    }
}

export { User };
