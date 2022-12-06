import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import { User } from "../db/index.js";

class userAuthService {
    //회원가입 - 유저 등록
    static async addUser({
        email,
        nickname,
        password,
        age,
        address,
        car_owned,
        elec_car_owned,
    }) {
        const user_id = uuidv4();
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            user_id,
            email,
            nickname,
            password: hashedPassword,
            age,
            address,
            car_owned,
            elec_car_owned,
        };

        const createdNewUser = await User.create(newUser);

        return createdNewUser;
    }

    //로그인
    static async getUser({ email, password }) {
        const user = await User.findByEmail({ email });

        if (!user) {
            const errorMessage =
                "해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }

        // 비밀번호 일치 여부 확인
        const correctPasswordHash = user.password;
        const isPasswordCorrect = await bcrypt.compare(
            password,
            correctPasswordHash
        );

        if (!isPasswordCorrect) {
            const errorMessage =
                "비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }

        // 로그인 성공 -> JWT 웹 토큰 생성
        const secretKey = process.env.JWT_SECRET_KEY || "jwt-secret-key";
        const token = jwt.sign({ user_id: user.user_id }, secretKey);

        // 반환할 loginuser 객체를 위한 변수 설정
        const user_id = user.user_id;
        const nickname = user.nickname;

        const loginUser = {
            token,
            user_id,
            nickname,
            errorMessage: null,
        };

        return loginUser;
    }

    //유저정보 불러오기
    static async getUserInfo(user_id) {
        const user = await User.findById(user_id);

        if (!user) {
            const errorMessage =
                "해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }

        return user;
    }

    // static async getUsersCommunities(user_id) {
    //     const getUsersCommunities = await User.findAllCommunities(user_id);

    //     return getUsersCommunities;
    // }
}

export { userAuthService };
