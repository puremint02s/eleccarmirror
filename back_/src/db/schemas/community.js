import { Schema, model } from "mongoose";

const CommunitySchema = new Schema(
    {
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
    },
    {
        timestamps: true,
    }
);

const CommunityModel = model("community", CommunitySchema);

export { CommunityModel };
