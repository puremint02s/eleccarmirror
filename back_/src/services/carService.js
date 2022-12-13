import { Car } from "../db/model/Car.js";

class carService {
    static async addCar(newData) {
        // const { user_id } = newData;

        // const isAleadyCreated = await Car.findCar(user_id);

        // if (isAleadyCreated) {
        //     const errorMessage =
        //         "해당 유저는 챠량 등록 요청이 이미 진행되었습니다. 수정 요청을 해주세요";

        //     return { errorMessage };
        // }

        const newCar = await Car.create(newData);

        return newCar;
    }

    static async getCar(user_id) {
        const getCar = await Car.findCar(user_id);

        return getCar;
    }

    static async updateCar(user_id, updatedData) {
        const updateCar = await Car.updateCar(user_id, updatedData);

        return updateCar;
    }
}

export { carService };
