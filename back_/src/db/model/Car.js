import { CarModel } from "../schemas/car.js";

class Car {
    static async create(newData) {
        try {
            const newCar = await CarModel.create(newData);

            return newCar;
        } catch (err) {
            console.log(err);
        }
    }

    static async findCar(user_id) {
        try {
            const getCar = await CarModel.findOne({ user_id });

            return getCar;
        } catch (err) {
            console.log(err);
        }
    }

    static async updateCar(user_id, updatedData) {
        try {
            const updateCar = await CarModel.updateMany(
                { user_id },
                updatedData,
                { returnOriginal: false }
            );

            return updateCar;
        } catch (err) {
            console.log(err);
        }
    }
}

export { Car };
