import mongoose, { Schema, model } from "mongoose";

const CommentsSchema = new Schema(
    {
        user_id: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const CommentsModel = model("comments", CommentsSchema);

export { CommentsModel };
