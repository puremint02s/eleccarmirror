import { Step } from "../db/model/Step.js";

class stepService {
    //유저 step 등록
    static async addUserStep(newStepData) {
        const { user_id } = newStepData;

        const isAleadyCreated = await Step.getUserStep(user_id);

        if (isAleadyCreated) {
            const errorMessage = "step 이 이미 생성되어있습니다.";

            return { errorMessage };
        }

        const newUserStep = await Step.createUserStep(newStepData);

        return newUserStep;
    }

    //유저 step 가져오기
    static async getUserStep(user_id) {
        const getUserStep = await Step.getUserStep(user_id);

        return getUserStep;
    }

    //유저 step 업데이트
    static async updateUserStep(user_id, step) {
        const updateUserStep = await Step.updateUserStep(user_id, step);

        return updateUserStep;
    }
}

export { stepService };
