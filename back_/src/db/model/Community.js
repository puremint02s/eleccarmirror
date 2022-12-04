import { CommunityModel } from "../schemas/community.js";

class Community {
    static async create(data) {
        try {
            const createdContent = CommunityModel.create(data);

            return createdContent;
        } catch (err) {
            console.log(err);
        }
    }

    static async findAll() {
        try {
            const createdContent = CommunityModel.find({});

            return createdContent;
        } catch (err) {
            console.log(err);
        }
    }
}

export { Community };
