import mongoose, { Schema, model } from "mongoose";

const TypeSchema = new Schema(
    {
        user_id: {
            type: String,
            required: true,
        },
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
        versionKey: false,
    }
);

const TypeModel = model("type", TypeSchema);

export { TypeModel };
