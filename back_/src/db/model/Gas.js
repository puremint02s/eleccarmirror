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

    static async findAll(user_id) {
        try {
            const getContents = await GasModel.find({ user_id });
            return getContents;
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
