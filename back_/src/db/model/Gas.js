import { GasModel } from "../schemas/gas.js";

class Gas {
    static async create(gasInfo) {
        try {
            const createNewGas = await GasModel.create(gasInfo);

            return createNewGas;
        } catch (err) {
            console.log(err);
        }
    }

    static async find(user_id) {
        try {
            const getUserContents = await GasModel.find({ user_id });
            return getUserContents;
        } catch (err) {
            console.log(err);
        }
    }

    static async findEach(obj_id) {
        try {
            const getEachContent = await GasModel.find({ _id: obj_id });
            return getEachContent;
        } catch (err) {
            console.log(err);
        }
    }

    static async update(obj_id, updateGas) {
        try {
            const updatedGas = await GasModel.updateOne(
                { _id: obj_id },
                updateGas,
                {
                    returnOriginal: false,
                }
            );

            return updatedGas;
        } catch (err) {
            console.log(err);
        }
    }

    static async delete(obj_id) {
        try {
            const deleteGas = await GasModel.deleteOne({ obj_id });

            return deleteGas;
        } catch (err) {
            console.log(err);
        }
    }
}

export { Gas };
