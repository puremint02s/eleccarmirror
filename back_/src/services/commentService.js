import { Comment } from "../db/model/Comment.js";

class commentService {
    static async addComment(comment) {
        const newComment = await Comment.create(comment);

        return newComment;
    }

    static async getComment(id) {
        const getEachComment = await Comment.findEach(id);

        return getEachComment;
    }

    static async getCommunityComment(id) {
        const getCommunityComment = await Comment.findCommunityOne(id);

        return getCommunityComment;
    }

    static async getUserComment(id) {
        const getUserComment = await Comment.findUserOne(id);

        return getUserComment;
    }

    static async updateComment(newInput) {
        const updateComment = await Comment.update(newInput);

        return updateComment;
    }

    static async deleteComment(_id) {
        const deleteComment = await Comment.delete(_id);

        return deleteComment;
    }
}

export { commentService };
