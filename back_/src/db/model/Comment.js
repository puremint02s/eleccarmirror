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

    static async find(id) {
        try {
            const getComment = await CommentModel.findOne({ _id: id });

            return getComment;
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
