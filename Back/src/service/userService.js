import UserModel from "../db/models/userModel";
import bcrypt from "bcrypt";
import { SALT_ROUND } from "../constants";

class UserService {
    static async create(user) {
        const password = await bcrypt.hash(user.password, SALT_ROUND);
        user.password = password;
        const newUser = await UserModel.creat(user);

        if (!newUser) {
            throw new Error("유저 생성에 실패했습니다.");
        }

        return newUser;
    }
}

export default UserService;