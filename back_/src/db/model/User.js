import { UserModel } from "../schemas/user.js";
import mongoose from "mongoose";

class User {
    static async create(newUser) {
        try {
            const createdNewUser = await UserModel.create(newUser);

            return createdNewUser;
        } catch (err) {
            console.log("이것이 바로 에러", err);
        }
    }

    static async findByEmail({ email }) {
        try {
            const user = await UserModel.findOne({ email });
            return user;
        } catch (err) {
            console.log("이것이 바로 에러", err);
        }
    }

    static async findById(user_id) {
        try {
            const user = await UserModel.findById({
                _id: user_id,
            }).populate("community");
            // .exec(function (err, data) {
            //     console.log("populate data", data);
            // });

            return user;
        } catch (err) {
            console.log("이것이 바로 에러", err);
        }
    }

    // static async findAllCommunities(user_id) {
    //     try {
    //         const userCommunities = await UserModel.findOne({
    //             user_id: user_id,
    //         }).populate("community");

    //         return userCommunities;
    //     } catch (err) {
    //         console.log("이것이 바로 에러", err);
    //     }
    // }
}

export { User };
