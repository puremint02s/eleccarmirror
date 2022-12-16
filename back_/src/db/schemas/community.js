import mongoose, { Schema, model } from "mongoose";

const CommunitySchema = new Schema(
    {
        user_id: {
            type: String,
            required: true,
        },
        nickname: {
            type: String,
            // required: true,
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
            type: Array,
            trim: true,
        },
        file: {
            type: String,
            // contentType: String,
            // trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const CommunityModel = model("community", CommunitySchema);

export { CommunityModel };
