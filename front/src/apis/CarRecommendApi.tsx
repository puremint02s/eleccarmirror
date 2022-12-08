import { axiosInstance } from "./AxiosInstance";

export const CarMbtiTypePost = async (type: string) => {
  const res = await axiosInstance.post("/type", {
    type,
  });
  return res.data;
};

export const CarMbtiTypeGet = async (user_id: string) => {
  const res = await axiosInstance.get("/type", {
    // 현재 유저 아이디
  });
  return res.data;
};
