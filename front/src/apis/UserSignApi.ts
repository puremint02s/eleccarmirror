import { axiosInstance } from "./AxiosInstance";

interface SignForm {
  email?: string;
  id?: string;
  nickname?: string;
  password?: string;
  age?: string;
  address?: string;
}

export const RegisterRequest = async (registerForm: SignForm) => {
  const res = await axiosInstance.post("/user/register", registerForm);
  return res.data;
};
