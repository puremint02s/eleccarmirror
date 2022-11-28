import db from "../schemas";
const User = db.User;

class UserModel {
    static async creat(user) {
        const newUser = await User.create(user);

        return newUser;
    }
}

export default UserModel;