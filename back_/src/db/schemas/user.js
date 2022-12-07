import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        user_id: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        age: {
            type: String,
            required: true,
            enum: ["10대", "20대", "30대", "40대", "50대", "60대", "70대"],
        },
        address: {
            type: String,
            required: true,
        },
        testType: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "testType",
        },
        car_owned: {
            type: Boolean,
            default: false,
        },
        elec_car_owned: {
            type: Boolean,
            default: false,
        },
        gas: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "gas",
        },
        car: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "car",
        },
    },
    {
        timestamps: true,
    }
);

const UserModel = model("user", UserSchema);

export { UserModel };
