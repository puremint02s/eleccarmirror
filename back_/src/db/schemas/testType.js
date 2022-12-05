import mongoose, { Schema, model } from "mongoose";

const TestTypeSchema = new Schema(
    {
        type: {
            type: String,
            required: true,
            enum: [
                "CFBH",
                "CFBN",
                "CFAH",
                "CFAN",
                "CWBH",
                "CWBN",
                "CWAH",
                "CWAN",
                "EFBH",
                "EFBN",
                "EFAH",
                "EFAN",
                "EWBH",
                "EWBN",
                "EWAH",
                "EWAN",
            ],
        },
    },
    {
        timestamps: true,
    }
);

const TestTypeModel = model("testType", TestTypeSchema);

export { TestTypeModel };
