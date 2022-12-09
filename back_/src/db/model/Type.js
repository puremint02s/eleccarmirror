import { TypeModel } from "../schemas/type.js";

class Type {
    static async create(typeData) {
        try {
            const newType = await TypeModel.create(typeData);

            return newType;
        } catch (err) {
            console.log(err);
        }
    }

    static async find(user_id) {
        try {
            const getType = await TypeModel.find({ user_id });

            return getType;
        } catch (err) {
            next(err);
        }
    }

    static async update(newInput) {
        try {
            const { _id, type } = newInput;
            const updateType = await TypeModel.updateOne(
                { _id },
                { type },
                {
                    returnOriginal: false,
                }
            );

            return updateType;
        } catch (err) {
            next(err);
        }
    }
}

export { Type };
