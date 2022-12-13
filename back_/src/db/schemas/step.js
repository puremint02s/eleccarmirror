import mongoose, { Schema, model } from "mongoose";

const StepSchema = new Schema(
    {
        user_id: {
            type: String,
            required: true,
        },
        step: {
            type: String,
            required: true,
            enum: ["0", "1", "2", "3"],
        },
    },
    {
        versionKey: false,
    }
);

const StepModel = model("step", StepSchema);

export { StepModel };
