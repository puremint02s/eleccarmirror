import { Type } from "../db/model/Type.js";

class typeService {
    static async addType(typeData) {
        const newType = await Type.create(typeData);

        return newType;
    }

    static async getType(user_id) {
        const getType = await Type.find(user_id);

        return getType;
    }

    static async updateType(newInput) {
        const updateType = await Type.update(newInput);

        return updateType;
    }
}

export { typeService };
