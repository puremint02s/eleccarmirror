import { CommunityModel } from "../schemas/community";

class Community {
    static async function(newContent) {
        try {
            const createdContent = CommunityModel.create(newContent);

            return createdContent;
        } catch (err) {
            console.log(err);
        }
    }
}
