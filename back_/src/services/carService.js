import { Car } from "../db/model/Car.js";

class carService {
    static async addCar(newData) {
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
