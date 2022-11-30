import mongoose, { Schema, model } from "mongoose";

const CarSchema = new Schema(
    {
        id: {
            type: Number,
        },
        brand: {
            type: String,
        },
        model: {
            type: String,
            unique: true,
        },
        car_image: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const CarModel = model("Car", CarSchema);

export { CarModel };
