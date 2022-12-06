import { Gas } from "../db/model/Gas.js";

class gasService {
    static async addGas(gasInfo) {
        const createNewGas = await Gas.create(gasInfo);

        return createNewGas;
    }

    static async getContents(user_id) {
        const getContents = await Gas.findAll(user_id);

        return getContents;
    }

    static async update(obj_id, newGasInfo) {
        const updateGas = await Gas.update(obj_id, newGasInfo);

        return updateGas;
    }

    static async delete(obj_id) {
        const deleteGas = await Gas.delete(obj_id);

        return deleteGas;
    }
}

export { gasService };
