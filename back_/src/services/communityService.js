import { Community } from "../db/model/Community.js";

class communityService {
    static async addContent(data) {
        const newContent = await Community.create(data);

        return newContent;
    }

    static async getContents() {
        const getContents = await Community.findAll();

        return getContents;
    }
}

export { communityService };
