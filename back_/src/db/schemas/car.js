import mongoose, { Schema, model } from "mongoose";

const CarSchema = new Schema(
    {
        id: {
            type: Number,
            unique: true,
        },
        brand: {
            type: String,
        },
        model: {
            type: String,
        },
        year: {
            type: String,
        },
        car_image: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const CarModel = model("car", CarSchema);

export { CarModel };
