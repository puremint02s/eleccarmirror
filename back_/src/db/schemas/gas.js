import mongoose, { Schema, model } from "mongoose";

const GasSchema = new Schema(
    {
        id: {
            type: Number,
            unique: true,
        },
        brand: {
            type: String,
            unique: true,
        },
        model: {
            type: String,
            unique: true,
        },
        year: {
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

const GasModel = model("gas", GasSchema);

export { GasModel };
