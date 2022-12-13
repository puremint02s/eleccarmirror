import { axiosInstance, axiosLoginInstance } from "./AxiosInstance";

interface UserInfo {
  user_id: string;
  email: string;
  id: string;
  nickname: string;
  password: string;
  age: string;
  address: string;
  car_owned: boolean;
  elec_car_owend: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export const loginRequest = async (id: string, password: string) => {
  const res = await axiosLoginInstance.post("/user/login", {
    id,
    password,
  });
  return res.data;
};

export const currentUserGet = async () => {
  const res = await axiosInstance.get("/user/current");
  return res;
};

export const modifyUserInfo = async (
  email: string,
  id: string,
  nickname: string,
  age: string,
  address: string,
  car_owned?: number,
  elec_car_owned?: number,
) => {
  const res: UserInfo = await axiosInstance.put("/user", {
    email,
    id,
    nickname,
    age,
    address,
    car_owned,
    elec_car_owned,
  });
  return res;
};
