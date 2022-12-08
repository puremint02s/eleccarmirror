import { axiosInstance } from "./AxiosInstance";

export const LoginRequest = async (id: string, password: string) => {
  const res = await axiosInstance.post("/user/login", {
    id,
    password,
  });
  return res.data;
};
