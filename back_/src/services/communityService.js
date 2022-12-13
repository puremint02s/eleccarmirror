import { Community } from "../db/model/Community.js";

class communityService {
    static async addContent(data) {
        const newContent = await Community.create(data);

        return newContent;
    }

    static async getContentsAll() {
        const getAllContents = await Community.findAllContents();

        return getAllContents;
    }

    static async getContents(page, perPage) {
        const getContents = await Community.findAll(page, perPage);

        return getContents;
    }

    static async getUserContents(user_id) {
        const getContents = await Community.find(user_id);

        return getContents;
    }

    static async getEachContent(obj_id) {
        const getEachContent = await Community.findEach(obj_id);

        return getEachContent;
    }

    static async updateContent(newInput) {
        const updateContent = await Community.update(newInput);

        return updateContent;
    }

    static async updateAllContent(newInput) {
        const updateContent = await Community.updateAll(newInput);

        return updateContent;
    }

    static async deleteContent(_id) {
        const deleteContent = await Community.delete(_id);

        return deleteContent;
    }
}

export { communityService };
