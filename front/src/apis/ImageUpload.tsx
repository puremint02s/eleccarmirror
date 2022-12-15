import { axiosInstance, axiosLoginInstance } from "./AxiosInstance";

export const postImage = async (image: any) => {
  const res = await axiosInstance.post("/images", image);
  return res;
};
