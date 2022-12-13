import { axiosInstance } from "./AxiosInstance";

export const getUserCarInfo = async () => {
  const res = await axiosInstance("/car");
  return res;
};
