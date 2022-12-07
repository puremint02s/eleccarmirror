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
            const user = await UserModel.findOne({
                user_id: user_id,
            });

            console.log("user ==>", user);

            return user;
        } catch (err) {
            console.log("이것이 바로 에러", err);
        }
    }

    static async update(newInput) {
        try {
            const {
                user_id,
                email,
                id,
                password,
                age,
                address,
                car_owned,
                elec_car_owned,
            } = newInput;

            const update = {
                email,
                id,
                password,
                age,
                address,
                car_owned,
                elec_car_owned,
            };

            const updatedUser = await UserModel.updateOne({ user_id }, update, {
                returnOriginal: false,
            });

            return updatedUser;
        } catch (err) {
            console.log(err);
        }
    }
}

export { User };
