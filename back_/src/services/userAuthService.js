import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { User } from "../db/index.js";

class userAuthService {
    static async addUser({ email, nickname, password }) {
        const user_id = "werwerwer";

        console.log("newUser Service");

        const createdNewUser = await User.create({
            user_id,
            email,
            nickname,
            password,
        });

        console.log("createdNewUser =>", createdNewUser);

        return createdNewUser;
    }
}

export { userAuthService };
