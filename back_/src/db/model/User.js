import { UserModel } from "../schemas/user.js";

class User {
    static async create({ newUser }) {
        const createdNewUser = await UserModel.create({ newUser });
        return createdNewUser;
    }
}

export { User };
