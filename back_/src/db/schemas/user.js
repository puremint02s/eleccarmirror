import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        user_id: {
            type: String,
        },
        email: {
            type: String,
        },
        nickname: {
            type: String,
        },
        password: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const UserModel = model("user", UserSchema);

export { UserModel };
