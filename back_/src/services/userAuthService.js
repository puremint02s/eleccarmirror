import { User } from "../db/model/User.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

class userAuthService {
    static async addUser({ email, nickname, password }) {
        // const user = await User.findById({ email });
        // if (user) {
        //     const errorMessage =
        //         "이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요.";
        //     return { errorMessage };
        // }

        // const hashedPassword = await bcrypt.hash(password, 10);

        const user_id = uuidv4();
        const newUser = {
            user_id,
            email,
            nickname,
            password,
        };

        console.log("newUser Service");

        // //DB 에 저장

        const createdNewUser = await User.create({
            user_id,
            email,
            nickname,
            password,
        });

        // createNewUser.errorMessage = null;
        // const createNewUser = { email, nickname, password };
        return createdNewUser;
    }
}

export { userAuthService };
