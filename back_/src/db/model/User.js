import { UserModel } from "../schemas/user.js";

class User {
    static async create({ user_id, email, nickname, password }) {
        // const createdNewUser = await UserModel.create({
        //     email,
        //     nickname,
        //     password,
        // });

        // return createdNewUser;

        const createdNewUser = new UserModel({
            user_id,
            email,
            nickname,
            password,
        });

        createdNewUser.markModified();

        createdNewUser.save(function (err, res) {
            if (err) throw err;
            console.log(res);
        });

        console.log("result", createdNewUser);

        return createdNewUser;
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
