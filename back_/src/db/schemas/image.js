import mongoose, { Schema, model } from "mongoose";

const ImageSchema = new Schema(
    {
        user_id: {
            type: String,
            required: true,
        },
        filename: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ImageModel = model("image", ImageSchema);

export { ImageModel };
