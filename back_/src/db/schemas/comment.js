import mongoose, { Schema, model } from "mongoose";

const CommentSchema = new Schema(
    {
        user_id: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        community: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "community",
        },
    },
    {
        timestamps: true,
    }
);

const CommentModel = model("comment", CommentSchema);

export { CommentModel };
