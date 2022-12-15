import { axiosInstance } from "./AxiosInstance";

interface SignForm {
  email?: string;
  id?: string;
  nickname?: string;
  password?: string;
  age?: string;
  address?: string;
  car_owned?: boolean;
  elec_car_owned?: boolean;
}

export const RegisterRequest = async (registerForm: SignForm) => {
  console.log("1", registerForm);
  const res = await axiosInstance.post("/user/register", registerForm);
  console.log("완료", res.data);
  return res.data;
};
