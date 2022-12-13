import { axiosInstance } from "./AxiosInstance";

export const carMbtiTypePost = async (type: object | undefined) => {
  const res = await axiosInstance.post("/type", type);
  return res;
};

// 테스트 타입 반환
// export const carMbtiTypeGet = async (user_id: string) => {
//   const res = await axiosInstance.get("/type", {
//     // user_id,
//   });
//   return res.data;
// };
