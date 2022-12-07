import mongoose, { Schema, model } from "mongoose";

const CommunitySchema = new Schema(
    {
        user_id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        hashtags: {
            type: String,
            trim: true,
        },
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comments" }],
    },
    {
        timestamps: true,
    }
);

const CommunityModel = model("community", CommunitySchema);

export { CommunityModel };
