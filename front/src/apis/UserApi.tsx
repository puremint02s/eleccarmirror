import { axiosInstance, axiosLoginInstance } from "./AxiosInstance";

export const LoginRequest = async (id: string, password: string) => {
  const res = await axiosLoginInstance.post("/user/login", {
    id,
    password,
  });
  return res.data;
};

export const CurrentUserGet = async () => {
  try {
    const res = await axiosInstance.get("/user/current");
    const currentUser = res.data;
    console.log(currentUser);
  } catch (err) {
    console.log(err);
  }
};
