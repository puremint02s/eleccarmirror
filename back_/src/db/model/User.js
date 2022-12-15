import { UserModel } from "../schemas/user.js";
import mongoose from "mongoose";

class User {
  static async create(newUser) {
    try {
      const createdNewUser = await UserModel.create(newUser);

      return createdNewUser;
    } catch (err) {
      console.log(" 유저 생성 실패", err);
    }
  }

  static async findByEmailValue({ email }) {
    try {
      const findValue = await UserModel.findOne({ email });

      return findValue;
    } catch (err) {
      console.log("이것이 바로 에러", err);
    }
  }

  static async findByIdValue({ id }) {
    try {
      const findValue = await UserModel.findOne({ id });

      return findValue;
    } catch (err) {
      console.log("이것이 바로 에러", err);
    }
  }

  static async findByNicknameValue({ nickname }) {
    try {
      const findValue = await UserModel.findOne({ nickname });

      return findValue;
    } catch (err) {
      console.log("이것이 바로 에러", err);
    }
  }

  static async findByEmail({ id }) {
    try {
      const user = await UserModel.findOne({ id });
      return user;
    } catch (err) {
      console.log("이것이 바로 에러", err);
    }
  }

  static async findById(user_id) {
    try {
      const user = await UserModel.findOne({
        user_id: user_id,
      });

      console.log("user ==>", user);

      return user;
    } catch (err) {
      console.log("이것이 바로 에러", err);
    }
  }

  static async update({ user_id, fieldToUpdate, updateValue }) {
    try {
      const filter = { user_id: user_id };
      const update = { [fieldToUpdate]: updateValue };
      const option = { returnOriginal: false };

      const updatedUser = await UserModel.findOneAndUpdate(
        filter,
        update,
        option
      );

      return updatedUser;
    } catch (err) {
      console.log(err, "업데이트 오류");
    }
  }

  static async lookById(id) {
    try {
      const user = await UserModel.findOne({
        id: id,
      });

      console.log("user ==>", user);

      return user;
    } catch (err) {
      console.log("이것이 바로 에러", err);
    }
  }
}

export { User };
