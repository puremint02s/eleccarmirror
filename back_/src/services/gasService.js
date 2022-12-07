import { Gas } from "../db/model/Gas.js";

class gasService {
    static async addGas(gasInfo) {
        const createNewGas = await Gas.create(gasInfo);

        return createNewGas;
    }

    static async getUserContents(user_id) {
        const getUserContents = await Gas.find(user_id);

        return getUserContents;
    }

    static async getEachContent(obj_id) {
        const getEachContent = await Gas.findEach(obj_id);

        return getEachContent;
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
