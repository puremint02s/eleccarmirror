import mongoose, { Schema, model } from "mongoose";

const CarSchema = new Schema(
    {
        user_id: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        year: {
            type: String,
            required: true,
        },
        car_image: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const CarModel = model("car", CarSchema);

export { CarModel };
