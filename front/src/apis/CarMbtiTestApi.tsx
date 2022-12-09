import { axiosInstance } from "./AxiosInstance";

// 테스트 타입 저장
export const CarMbtiTypePost = async (type: string) => {
  const res = await axiosInstance.post("/type", {
    type,
  });
  return res.data;
};

// 테스트 타입 반환
export const CarMbtiTypeGet = async (user_id: string) => {
  const res = await axiosInstance.get("/type", {
    // 현재 유저 아이디
  });
  return res.data;
};
