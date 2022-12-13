import { StepModel } from "../schemas/step.js";

class Step {
    //유저 step 등록
    static async createUserStep(newStepData) {
        try {
            const newUserStep = await StepModel.create(newStepData);

            return newUserStep;
        } catch (err) {
            console.log(err);
        }
    }

    //유저 step 가져오기
    static async getUserStep(user_id) {
        try {
            const getUserStep = await StepModel.findOne({ user_id });

            return getUserStep;
        } catch (err) {
            console.log(err);
            // next(err);
        }
    }

    //유저 step 업데이트
    static async updateUserStep(user_id, step) {
        try {
            const updateUserStep = await StepModel.updateOne(
                { user_id },
                { step },
                {
                    returnOriginal: false,
                }
            );

            return updateUserStep;
        } catch (err) {
            console.log(err);
        }
    }
}

export { Step };
