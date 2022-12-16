import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import { User } from "../db/index.js";

class userAuthService {
    //회원가입 - 유저 등록
    static async addUser({
        email,
        id,
        nickname,
        password,
        age,
        address,
        car_owned,
        elec_car_owned,
    }) {
        try {
            const isEmail = await User.findByEmailValue({ email });
            const isId = await User.findByIdValue({ id });
            const isNickname = await User.findByNicknameValue({ nickname });

            if (isEmail) {
                const errorMessage =
                    "이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요.";
                return { errorMessage };
            }

            if (isId) {
                const errorMessage =
                    "이 아이디는 현재 사용중입니다. 다른 아이디를 입력해 주세요.";
                return { errorMessage };
            }

            if (isNickname) {
                const errorMessage =
                    "이 닉네임은 현재 사용중입니다. 다른 닉네임을 입력해 주세요.";
                return { errorMessage };
            }

            const user_id = uuidv4();
            const hashedPassword = await bcrypt.hash(password, 10);

            console.log("hashedPassword", hashedPassword);

            const newUser = {
                user_id,
                email,
                id,
                nickname,
                password: hashedPassword,
                age,
                address,
                car_owned,
                elec_car_owned,
            };

            if (!isEmail && !isId && !isNickname) {
                const createdNewUser = await User.create(newUser);
                return createdNewUser;
            }
        } catch (err) {
            console.log("회원가입 생성 오류입니다", err);
        }
    }
    //로그인
    static async getUser({ id, password }) {
        const user = await User.findByEmail({ id });

        console.log("user 정보", user);
        console.log("user 정보", user);

        if (!user) {
            const errorMessage =
                "해당 아이디는 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }
        if (!user) {
            const errorMessage =
                "해당 아이디는 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }

        // 비밀번호 일치 여부 확인
        const correctPasswordHash = user.password;
        console.log("password ===>", password);
        console.log("correctPasswordHash", correctPasswordHash);
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
        // const id = user.id;
        // 반환할 loginuser 객체를 위한 변수 설정

        const loginUser = {
            token,
            user_id,
            id: user.id,
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

    //유저정보 중복체크
    static async getUserInfomation({ id }) {
        const userSame = await User.findByEmail({ id });
        try {
            if (!userSame) {
                const successMessage = "올바른 아이디입니다";
                return { successMessage };
            }
            if (userSame) {
                const errorMessage =
                    "해당 아이디는 가입 내역이 있습니다. 다시 한 번 확인해 주세요.";
                return { errorMessage };
            }
        } catch {}

        return userSame;
    }

    //유저정보 수정
    static async updateUser(newInput) {
        const {
            user_id,
            email,
            id,
            nickname,
            age,
            address,
            car_owned,
            elec_car_owned,
        } = newInput;
        let user = await User.findById(user_id);

        // console.log("user 찾음?", user);

        // db에서 찾지 못한 경우, 에러 메시지 반환
        if (!user) {
            const errorMessage =
                "해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }
        // console.log("id", id, "user.id", user.id);
        // db에서 찾지 못한 경우, 에러 메시지 반환
        if (!user) {
            const errorMessage =
                "해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }
        // console.log("id", id, "user.id", user.id);

        if (user.email !== email) {
            console.log("email is updated");
            const fieldToUpdate = "email";
            const updateValue = email;
            if (user.email !== email) {
                console.log("email is updated");
                const fieldToUpdate = "email";
                const updateValue = email;

                user = await User.update({
                    user_id,
                    fieldToUpdate,
                    updateValue,
                });
            }
            user = await User.update({ user_id, fieldToUpdate, updateValue });
        }

        if (user.id !== id) {
            console.log("id is updated");
            const fieldToUpdate = "id";
            const updateValue = id;
            if (user.id !== id) {
                console.log("id is updated");
                const fieldToUpdate = "id";
                const updateValue = id;

                user = await User.update({
                    user_id,
                    fieldToUpdate,
                    updateValue,
                });
            }
            user = await User.update({ user_id, fieldToUpdate, updateValue });
        }

        if (user.nickname !== nickname) {
            console.log("nickname is updated");
            const fieldToUpdate = "nickname";
            const updateValue = nickname;
            if (user.nickname !== nickname) {
                console.log("nickname is updated");
                const fieldToUpdate = "nickname";
                const updateValue = nickname;

                user = await User.update({
                    user_id,
                    fieldToUpdate,
                    updateValue,
                });
            }
            user = await User.update({ user_id, fieldToUpdate, updateValue });
        }

        if (user.age !== age) {
            console.log("age is updated");
            const fieldToUpdate = "age";
            const updateValue = age;
            if (user.age !== age) {
                console.log("age is updated");
                const fieldToUpdate = "age";
                const updateValue = age;

                user = await User.update({
                    user_id,
                    fieldToUpdate,
                    updateValue,
                });
            }
            user = await User.update({ user_id, fieldToUpdate, updateValue });
        }

        if (user.address !== address) {
            console.log("address is updated");
            const fieldToUpdate = "address";
            const updateValue = address;
            if (user.address !== address) {
                console.log("address is updated");
                const fieldToUpdate = "address";
                const updateValue = address;

                user = await User.update({
                    user_id,
                    fieldToUpdate,
                    updateValue,
                });
            }
            user = await User.update({ user_id, fieldToUpdate, updateValue });
        }

        if (user.car_owned !== car_owned) {
            console.log("car_owned is updated");
            const fieldToUpdate = "car_owned";
            const updateValue = car_owned;
            if (user.car_owned !== car_owned) {
                console.log("car_owned is updated");
                const fieldToUpdate = "car_owned";
                const updateValue = car_owned;

                user = await User.update({
                    user_id,
                    fieldToUpdate,
                    updateValue,
                });
            }
            user = await User.update({ user_id, fieldToUpdate, updateValue });
        }

        if (user.elec_car_owned !== elec_car_owned) {
            console.log("elec_car_owned is updated");
            const fieldToUpdate = "elec_car_owned";
            const updateValue = elec_car_owned;

            user = await User.update({ user_id, fieldToUpdate, updateValue });
        }

        console.log("nothing to update");
        console.log("nothing to update");

        return user;
    }
}

export { userAuthService };
