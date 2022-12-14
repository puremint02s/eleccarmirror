import { axiosInstance } from "./AxiosInstance";

export const CarInfoGet = async () => {
  const res = await axiosInstance.get("/car");
  return res;
};
