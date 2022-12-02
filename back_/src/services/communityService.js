import { Community } from "../db/model/Community";

class communityService {
    static async addContents({ title, content, hashtags }) {
        const newContent = { title, content, hashtags };

        await Community.addContents(newContent);

        return newContent;
    }
}

export { communityService };
