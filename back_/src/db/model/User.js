import { UserModel } from "../schemas/user.js";
import mongoose from "mongoose";

class User {
    static async create({ user_id, email, nickname, password }) {
        try {
            const createdNewUser = UserModel.create({
                user_id,
                email,
                nickname,
                password,
            });

            return createdNewUser;
        } catch (err) {
            console.log("이것이 바로 에러", err);
        }
    }
}

export { User };

// console.log("{newUser}", { newUser });

// const createdNewUser = new UserModel({ newUser });

// await createdNewUser.save();

// createdNewUser.save().then(() => {
//     console.log("saving");
// });

// const result = await createdNewUser.save();

// console.log(result);

// createdNewUser.save(function (err, doc) {
//     if (err) return console.error(err);
//     console.log("Document inserted succussfully!");
// });

// return createdNewUser;

//https://stackoverflow.com/questions/69181182/const-err-new-mongooseerrormessage

// const createdNewUser = UserModel.create({ newUser }, function (err) {
//     if (err) console.log("err occured");
//     // saved!
// });

// return result;
