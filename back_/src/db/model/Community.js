import { CommunityModel } from "../schemas/community.js";
import { UserModel } from "../schemas/user.js";

class Community {
    static async create(data) {
        try {
            const createdContent = await CommunityModel.create(data);

            return createdContent;
        } catch (err) {
            console.log(err);
        }
    }

    static async findAll(page, perPage) {
        try {
            const total = await CommunityModel.countDocuments({});

            //참고URL : https://lakelouise.tistory.com/228

            const findContent = await CommunityModel.find({})
                .sort({
                    createdAt: -1,
                    //제일 마지막에 생성된 것을 앞으로 불러오기 위해
                    //역순으로 정렬
                })
                .skip(perPage * (page - 1))
                //skip : 검색 시, 포함하지 않을 데이터 수
                //현재 페이지가 1일때, 10*(1-1) = 0 :: 0 부터 9까지 출력
                //현재 페이지가 2일때, 10*(2-1) = 10 :: 10 부터 19까지 출력

                .limit(perPage); //limit :검색 결과 수 제한

            const totalPage = Math.ceil(total / perPage);
            //총 페이지 수 : 총 게시글 / 페이지 당 게시글 수

            return { findContent, totalPage };
        } catch (err) {
            console.log(err);
        }
    }

    static async find(user_id) {
        try {
            const findContent = await CommunityModel.find({ user_id });
            return findContent;
        } catch (err) {
            console.log(err);
        }
    }

    static async findEach(_id) {
        try {
            const findEachContent = await CommunityModel.findOne({ _id });
            return findEachContent;
        } catch (err) {
            console.log(err);
        }
    }

    static async update(newInput) {
        console.log("newInput =>", newInput);
        try {
            const { _id, title, content, hashtags } = newInput;
            const update = { title, content, hashtags };

            const updateContent = await CommunityModel.updateOne(
                { _id },
                update,
                {
                    returnOriginal: false,
                }
            );

            return updateContent;
        } catch (err) {
            console.log(err);
        }
    }

    static async delete(_id) {
        try {
            const deleteContent = await CommunityModel.findOneAndDelete({
                _id,
            });

            return deleteContent;
        } catch (err) {
            console.log(err);
        }
    }
}

export { Community };
