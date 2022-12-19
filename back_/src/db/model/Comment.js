import { CommentModel } from "../schemas/comment.js";

class Comment {
    static async create(comment) {
        try {
            const newComment = await CommentModel.create(comment);

            return newComment;
        } catch (err) {
            console.log(err);
        }
    }

    static async findEach(id) {
        try {
            const getEachComment = await CommentModel.findOne({ _id: id });

            return getEachComment;
        } catch (err) {
            console.log(err);
        }
    }

    static async findCommentAll() {
        try {
            const getAllComment = await CommentModel.find({});

            return getAllComment;
        } catch (err) {
            console.log(err);
        }
    }

    static async findCommunityOne(id) {
        try {
            const getCommunityComment = await CommentModel.find({
                community_id: id,
            });

            return getCommunityComment;
        } catch (err) {
            console.log(err);
        }
    }

    static async findUserOne(id) {
        try {
            const findUserOne = await CommentModel.find({
                user_id: id,
            });

            return findUserOne;
        } catch (err) {
            console.log(err);
        }
    }

    static async update(newInput) {
        try {
            const { _id, content } = newInput;
            const updateComment = await CommentModel.updateOne(
                { _id },
                { content },
                {
                    returnOriginal: false,
                }
            );

            return updateComment;
        } catch (err) {
            console.log(err);
        }
    }

    static async delete(_id) {
        try {
            const deleteComment = await CommentModel.deleteOne({ _id });

            return deleteComment;
        } catch (err) {
            console.log(err);
        }
    }
}

export { Comment };
