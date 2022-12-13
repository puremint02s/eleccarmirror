import { axiosInstance } from "./AxiosInstance";

export const carMbtiTypePost = async (type: object | undefined) => {
  const res = await axiosInstance.post("/type", type);
  return res;
};

export const carMbtiTypeGet = async (user_id: object) => {
  const res = await axiosInstance.get("/type", user_id);
  return res.data;
};
