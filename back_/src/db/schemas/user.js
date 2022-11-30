import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        user_id: {
            type: String,
            // required: true,
        },
        email: {
            type: String,
            // required: true,
        },
        nickname: {
            type: String,
            // required: true,
        },
        password: {
            type: String,
            // required: true,
        },
        // age: {
        //     type: Number,
        // },
        // address: {
        //     type: String,
        // },
        // car_owned: {
        //     type: Boolean,
        // },
        // elec_car_owned: {
        //     type: Boolean,
        // },
        // test_type: {
        //     type: Number,
        // },
        // car_id: {
        //     type: Number,
        // },
        // average_mileage: {
        //     type: String,
        // },
    },
    {
        timestamps: true,
    }
);

const UserModel = model("User", UserSchema);

export { UserModel };
