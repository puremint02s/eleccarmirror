import mongoose, { Schema, model } from "mongoose";

const GasSchema = new Schema(
    {
        user_id: {
            type: String,
            required: true,
        },
        oiling_date: {
            type: String,
            required: true,
        },
        gas_type: {
            type: String,
            required: true,
            enum: ["휘발유", "경유"],
        },
        gas_amount: {
            type: Number,
            required: true,
        },
        odometer: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const GasModel = model("gas", GasSchema);

export { GasModel };
