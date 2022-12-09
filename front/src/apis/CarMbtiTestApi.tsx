import { axiosInstance } from "./AxiosInstance";

export const CarMbtiTypePost = async (type: string) => {
  const res = await axiosInstance.post("/type", {
    type,
  });
  return res.data;
};

// 테스트 타입 반환
// export const CarMbtiTypeGet = async (user_id: string) => {
//   const res = await axiosInstance.get("/type", {
//     // user_id,
//   });
//   return res.data;
// };
